import React from 'react';
import { TableContainer, TableCell, Table, TableHead, TableBody, TableRow, Paper, Tooltip, Button } from '@material-ui/core';
import moment from 'moment';
import { useHistory } from 'react-router';
import {useDispatch} from 'react-redux';
import {ToastsStore} from 'react-toasts'
import './OrderHistory.css';
import { handleOrderUpdate } from '../../Redux/Orders/orders.helper';

const columns = [
  {
    id: 'orderCreatedDate',
    value: 'Order Date'
  },
  {
    id: 'documentID',
    value: 'Order ID'
  },
  {
    id: 'orderTotal',
    value: 'Total Amount'
  },
  {
    id: 'cancel',
    value: 'Cancel'
  }

]

const formating = (columnName, columnValue) => {
  switch (columnName) {
    case 'orderTotal':
      return `RS.${Math.round(columnValue *100)/100}`
    case 'orderCreatedDate':
      return moment(new Date(columnValue.seconds * 1000)).format('DD/MM/YYYY hh:mm A');
    case 'cancel':
      return <span>Cancel</span>
    default:
      return columnValue
  }
}

const OrderHistory = ({ order }) => {
  const seller = false;
  const history = useHistory();
  const dispatch =useDispatch();
  const cancelOrder = ( documentID) =>{
      dispatch(handleOrderUpdate(documentID,'true'));//added now
  }
  return (
      <TableContainer component={Paper} className="historyContainer" >
        <Table className="table">
          <TableHead>
            <TableRow>
              {columns.map((column, index) => {
                const { value } = column;
                return (
                  <TableCell className='headCell'>{value}</TableCell>
                )
              })
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {(Array.isArray(order) && order.length > 0) && order.map((order, index) => {
              if(order.isCancelled) return null;
              const { documentID } = order;
              return (
                <TableRow key={index} >
                  {columns.map((column, index) => {
                    const columnName = column.id;
                    const columnValue = order[columnName];
                    const textFormating = formating(columnName, columnValue);
                    if(column.id ==='cancel'){
                      return (
                      <TableCell key={index} className='headCell' >
                        <Button className="cancelButton" onClick={() => cancelOrder(documentID)}>
                          {textFormating}
                        </Button>
                      </TableCell>
                    )}
                    else{
                      return (
                        <TableCell key={index} onClick={() => history.push(`/Order/${documentID}/${seller}`)} className='headCell' >{textFormating}</TableCell>
                    )}
                  })
                  }
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
  )
}

export default OrderHistory
