import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { auth } from '../../Firebase/utils'
import { setOrderDetail } from '../../Redux/Orders/orders.actions';
import './Order.css'

const userId = auth.currentUser?.uid
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
  },
  {
    id: 'totalPrice',
    value: 'Total'
  }
]
const formating = (columnName, columnValue) => {
  switch (columnName) {
    case 'productPrice':
      return `RS.${Math.round(parseInt(columnValue))}`
    case 'productThumbnail':
      return <img src={columnValue} className='thumb' />;
    default:
      return columnValue
  }
}



const Order = ({ order, seller, userId }) => {
  let orderItem = order && order.orderItems;
  const [sellerOrders, setSellerOrders] = useState([]);

  useEffect(()=>{
    setSellerOrders(orderItem?.filter(item => item.productSellerUID === userId))
  },[userId,orderItem])

  let mappedArray = orderItem;
  if(seller == "true") mappedArray = sellerOrders

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
          {(Array.isArray(mappedArray) && mappedArray.length > 0) && 
            <TableBody>

              {mappedArray.map((order, index) => {
                return (
                  <TableRow className="orderDetail" key={index}>
                    {columns.map((column, index) => {
                      if(column.id === 'totalPrice')
                        return <TableCell key={index} className='headCell'>{parseInt(order.productPrice) * parseInt(order.quantity)}</TableCell>
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
          }
        </Table>
      </TableContainer>
    </div>
  )
}

export default Order
