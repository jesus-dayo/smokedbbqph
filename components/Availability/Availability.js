import { useEffect, useMemo, useState } from 'react';
import { Amplify, API } from 'aws-amplify';
import awsExports from '../../src/aws-exports';
import { useTable } from 'react-table';
import { useAlert } from 'react-alert';
import { event } from 'nextjs-google-analytics';
import '@aws-amplify/ui-react/styles.css';
import { listAvailabilityProducts } from '../../src/graphql/custom_queries';
import { deleteAvailability } from '../../src/graphql/mutations';
import AddAvailabilityModal from './AddAvailabilityModal/AddAvailabilityModal';
import Button from '../Button/Button';

Amplify.configure({ ...awsExports, ssr: true });

const Availability = () => {
  const [availabilities, setAvailabilities] = useState([]);
  const [addOpen, setAddOpen] = useState(false);

  const columns = useMemo(() => {
    const deleteAvailabilityById = async (id) => {
      await API.graphql({
        query: deleteAvailability,
        variables: {
          limit: 1000000,
          input: {
            id,
          },
        },
      });
      listAvailabilityAPI();
    };
    return [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Product',
        accessor: 'name', // accessor is the "key" in the data
      },
      {
        Header: 'Availability',
        accessor: 'availability.items',
        Cell: ({ value }) => (
          <div>
            {value.map((val) => (
              <div key={val.id} className={'p-2 border-2 mb-1'}>
                <li key={val.id}>Avail ID: {val.id}</li>
                <li key={val.date}>Date: {val.date}</li>
                <li key={val.quantity}>Quantity: {val.quantity}</li>
                <li key={val.range?.id}>
                  Time: {val.range?.start} - {val.range?.end}
                </li>
                <Button onClick={() => deleteAvailabilityById(val.id)}>
                  Delete
                </Button>
              </div>
            ))}
          </div>
        ),
      },
    ];
  }, []);
  const tableInstance = useTable({ columns, data: availabilities });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  const listAvailabilityAPI = async () => {
    const availabilities = await API.graphql({
      query: listAvailabilityProducts,
      variables: {
        limit: 1000000,
      },
    });
    const items = availabilities?.data?.listProducts?.items || [];
    console.log('availabilities', availabilities);
    setAvailabilities(items);
  };

  useEffect(() => {
    event('availabilities', {
      category: 'Admin',
    });

    listAvailabilityAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full box-border">
      <AddAvailabilityModal
        modalIsOpen={addOpen}
        setIsOpen={setAddOpen}
        reload={listAvailabilityAPI}
      />
      <div className="p-2">
        <Button variant={'secondary'} onClick={() => setAddOpen(true)}>
          Add Availability
        </Button>
      </div>
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

export default Availability;
