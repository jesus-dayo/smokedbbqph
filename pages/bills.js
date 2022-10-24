import Layout from '../components/Layout/Layout';
import { useEffect, useMemo, useState } from 'react';
import { Amplify, API } from 'aws-amplify';
import awsExports from '../src/aws-exports';
import { listBillsWithDelivery } from '../src/graphql/custom_queries';
import { useTable } from 'react-table';
import moment from 'moment';

Amplify.configure({ ...awsExports, ssr: true });

const Bills = () => {
  const [bills, setBills] = useState([]);
  const columns = useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id', // accessor is the "key" in the data
      },
      {
        Header: 'Delivery',
        accessor: 'delivery.date', // accessor is the "key" in the data
      },
      {
        Header: 'Client',
        accessor: 'client.name', // accessor is the "key" in the data
      },
      {
        Header: 'Payment Option',
        accessor: 'paymentOption.option', // accessor is the "key" in the data
      },
      {
        Header: 'Address',
        accessor: 'address.city', // accessor is the "key" in the data
      },
    ],
    []
  );
  const tableInstance = useTable({ columns, data: bills });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  useEffect(() => {
    const listBillAPI = async () => {
      const bill = await API.graphql({
        query: listBillsWithDelivery,
        variables: {
          limit: 1000000,
        },
      });
      const items = bill?.data?.listBills?.items || [];
      setBills(
        items
          .filter(
            (item) =>
              moment(item?.delivery?.date, 'DD MMM YYYY').toDate() >
              moment().toDate()
          )
          .sort((prev, next) => {
            if (prev.delivery?.date > next.delivery?.date) {
              return 1;
            } else if (prev.delivery?.date < next.delivery?.date) {
              return -1;
            }
            return 0;
          })
      );
    };
    listBillAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout full>
      <div className="bg-white p-5">
        <table className="p-2 border-2" {...getTableProps()}>
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
    </Layout>
  );
};

export default Bills;
