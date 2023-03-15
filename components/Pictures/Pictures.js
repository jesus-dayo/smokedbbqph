import { useEffect, useMemo, useState } from 'react';
import { Amplify, API } from 'aws-amplify';
import awsExports from '../../src/aws-exports';
import { useTable } from 'react-table';
import '@aws-amplify/ui-react/styles.css';
import { listProductPictures } from '../../src/graphql/custom_queries';
import Button from '../Button/Button';
import UpdatePictureModal from './UpdatePictures/UpdatePictureModal';
import Image from 'next/image';
import { s3Loader } from '../../common/s3-loader';

Amplify.configure({ ...awsExports, ssr: true });

const Pictures = () => {
  const [selectedPicture, setSelectedPicture] = useState({});
  const [pictures, setPictures] = useState([]);
  const [addOpen, setAddOpen] = useState(false);

  const updatePicture = (picture) => {
    setSelectedPicture(picture);
    setAddOpen(true);
  };

  const columns = useMemo(() => {
    return [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Product',
        accessor: 'name',
      },
      {
        Header: 'Web',
        accessor: 'picture.web',
        Cell: ({ value }) => (
          <div>
            <div>
              <h3 className="font-bold">{value}</h3>
            </div>
            <div className="relative">
              <Image
                loader={s3Loader}
                src={value}
                width={200}
                height={500}
                alt={value}
              />
            </div>
          </div>
        ),
      },
      {
        Header: 'Mobile',
        accessor: 'picture.mobile',
        Cell: ({ value }) => (
          <div>
            <div>
              <h3 className="font-bold">{value}</h3>
            </div>
            <div className="relative">
              <Image
                loader={s3Loader}
                src={value}
                width={200}
                height={500}
                alt={value}
              />
            </div>
          </div>
        ),
      },
      {
        Header: 'Action',
        accessor: 'picture',
        Cell: ({ value }) => (
          <div>
            <Button onClick={() => updatePicture(value)}>Update</Button>
          </div>
        ),
      },
    ];
  }, []);
  const tableInstance = useTable({ columns, data: pictures });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  const listPicturesAPI = async () => {
    const picturesResponse = await API.graphql({
      query: listProductPictures,
      variables: {
        limit: 1000000,
      },
    });
    const items = picturesResponse?.data?.listProducts?.items || [];
    setPictures(items);
  };

  useEffect(() => {
    listPicturesAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full box-border">
      <UpdatePictureModal
        modalIsOpen={addOpen}
        setIsOpen={setAddOpen}
        reload={listPicturesAPI}
        selectedPicture={selectedPicture}
      />
      <table className="p-2 border-2 box-border w-full" {...getTableProps()}>
        <thead>
          {
            // Loop over the header rows
            headerGroups.map((headerGroup, headInd) => (
              // Apply the header row props
              <tr
                key={`head-${headInd}`}
                {...headerGroup.getHeaderGroupProps()}
              >
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map((column, headValInd) => (
                    // Apply the header cell props
                    <th
                      className="p-2 border-2"
                      key={`head-${headValInd}`}
                      {...column.getHeaderProps()}
                    >
                      {
                        // Render the header
                        column.render('Header')
                      }
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        {/* Apply the table body props */}
        <tbody {...getTableBodyProps()}>
          {
            // Loop over the table rows
            rows.map((row, rowInd) => {
              // Prepare the row for display
              prepareRow(row);
              return (
                // Apply the row props
                <tr key={`row-${rowInd}`} {...row.getRowProps()}>
                  {
                    // Loop over the rows cells
                    row.cells.map((cell, cellInd) => {
                      // Apply the cell props
                      return (
                        <td
                          className="p-2 border-2"
                          key={`cell-${cellInd}`}
                          {...cell.getCellProps()}
                        >
                          {
                            // Render the cell contents
                            cell.render('Cell')
                          }
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default Pictures;
