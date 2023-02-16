import Layout from '../components/Layout/Layout';
import { useEffect, useMemo, useState } from 'react';
import { Amplify, API } from 'aws-amplify';
import awsExports from '../src/aws-exports';
import { listBillsWithDelivery } from '../src/graphql/custom_queries';
import { useTable } from 'react-table';
import moment from 'moment';
import Button from '../components/Button/Button';
import { useAlert } from 'react-alert';

Amplify.configure({ ...awsExports, ssr: true });

const Bills = () => {
  const [bills, setBills] = useState([]);
  const alert = useAlert();

  const columns = useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id', // accessor is the "key" in the data
        Cell: ({ value }) => (
          <a
            className="text-blue-600 underline"
            target={'_blank'}
            href={`https://${window.location.hostname}${
              window.location.port ? ':' + window.location.port : ''
            }/confirmation/${value}`}
            rel="noreferrer"
          >
            {value}
          </a>
        ),
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
      {
        Header: 'Orders',
        accessor: 'orders.items',
        Cell: ({ value }) => (
          <div>
            {value.map((val) => (
              <li key={val.label}>
                {val.label}(x{val.quantity})
              </li>
            ))}
          </div>
        ),
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
      items.sort((prev, next) => {
        let prevDate = moment(prev.delivery?.date, 'DD MMM YYYY');
        if (!prevDate.isValid()) {
          prevDate = moment(prev.delivery?.date, 'D MMM YYYY');
        }
        let nextDate = moment(next.delivery?.date, 'DD MMM YYYY');
        if (!nextDate.isValid()) {
          nextDate = moment(next.delivery?.date, 'D MMM YYYY');
        }
        return nextDate.diff(prevDate);
      });
      setBills(items);
    };
    listBillAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const undelivered = () => {
    return bills.filter(
      (bill) =>
        moment().toDate() <= moment(bill.delivery?.date, 'DD MMM YYYY').toDate()
    );
  };

  const copyToClipboard = () => {
    const filteredBills = undelivered().map(
      (bill) =>
        `https://${window.location.hostname}${
          window.location.port ? ':' + window.location.port : ''
        }/confirmation/${bill.id}<br/>`
    );
    const blob = new Blob([JSON.stringify(filteredBills.join(''))], {
      type: 'text/html',
    });
    const clipboardItem = new window.ClipboardItem({ 'text/html': blob });
    navigator.clipboard.write([clipboardItem]).then(() => {
      alert.show('Copy to clipboard was successful');
    });
  };

  return (
    <Layout full>
      <div className="bg-white p-5 w-full box-border">
        <div className="p-2">
          <Button onClick={copyToClipboard}>Copy To Clipboard</Button>
        </div>
        <div>
          <span>Total Undelivered: {undelivered().length}</span>
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
    </Layout>
  );
};

export default Bills;
