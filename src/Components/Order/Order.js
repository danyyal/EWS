import React, { useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { setOrderDetail } from '../../Redux/Orders/orders.actions';
import './Order.css'
const columns = [
  {
    id: 'productThumbnail',
    value: 'Picture'
  },
  {
    id: 'productName',
    value: 'Name'
  },
  {
    id: 'productPrice',
    value: 'Price'
  },
  {
    id: 'quantity',
    value: 'Quantity'
  }
]
const formating = (columnName, columnValue) => {
  switch (columnName) {
    case 'productPrice':
      return `RS.${columnValue}`
    case 'productThumbnail':
      return <img src={columnValue} className='thumb' />;
    default:
      return columnValue
  }
}



const Order = ({ order }) => {
  const orderItem = order && order.orderItems;
  const dispatch = useDispatch();
  useEffect(() => {

    return () => {
      dispatch(setOrderDetail({}))
    }
  }, [])

  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow >
              {columns.map((column, index) => {
                const { value } = column;
                return (
                    <TableCell className='orderDetailHeadCell'>{value}</TableCell>
                )
              })
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {(Array.isArray(orderItem) && orderItem.length > 0) && orderItem.map((order, index) => {

              return (
                <TableRow className="orderDetail" key={index}>
                  {columns.map((column, index) => {
                    const columnName = column.id;
                    const columnValue = order[columnName];
                    const textFormating = formating(columnName, columnValue);
                    return (
                      <TableCell key={index} className='headCell'>{textFormating}</TableCell>
                    )
                  })
                  }
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Order
