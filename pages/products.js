import useProducts from '../hooks/useProducts';
import Layout from '../components/Layout/Layout';
import React, { useEffect, useMemo, useState } from 'react';
import { Amplify, API } from 'aws-amplify';
import awsExports from '../src/aws-exports';
import { useTable } from 'react-table';

const Products = () => {
  const products = useProducts();
  console.log('products', products);
  const columns = useMemo(
    () => [
      //   {
      //     Header: 'ID',
      //     accessor: 'id', // accessor is the "key" in the data
      //     Cell: ({ value }) => (
      //       <a
      //         className="text-blue-600 underline"
      //         target={'_blank'}
      //         href={`https://${window.location.hostname}${
      //           window.location.port ? ':' + window.location.port : ''
      //         }/confirmation/${value}`}
      //         rel="noreferrer"
      //       >
      //         {value}
      //       </a>
      //     ),
      //   },
      {
        Header: 'Name',
        accessor: 'name', // accessor is the "key" in the data
      },
      {
        Header: 'Price',
        accessor: 'price', // accessor is the "key" in the data
      },
      {
        Header: 'Description',
        accessor: 'description', // accessor is the "key" in the data
      },
    ],
    []
  );
  const tableInstance = useTable({ columns, data: products });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <Layout full>
      <div className="bg-white p-5 w-full box-border">
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

export default Products;
