import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../../Firebase/utils'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@material-ui/core';
import AdminDesign from '../AdminDesign/AdminDesign';
import { ToastsStore } from 'react-toasts'
import moment from 'moment';
import {getUserMessage} from '../../../Redux/Contact/Contact.actions';
import '../Admin.css';


const mapState = (state) => ({
  messages: state.contactData.messages
})


const columns = [
  {
    id: 'name',
    value: 'Name'
  },

  {
    id: 'email',
    value: 'Email'
  },
  {
    id: 'message',
    value: 'Message'
  },
  {
      id: 'Created Date',
      value: 'createdDate'
  }
]

const Queries = () => {
  const { messages } = useSelector(mapState)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserMessage());
  }, []);
  return (
    <div>
      <AdminDesign heading='All Queries' />
      <TableContainer component={Paper} className='buyerPaper'>
        <Table className='table'>
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
            {(Array.isArray(messages.data) && (messages.data.length > 0)) && messages.data.map((user, index) => {
              const { email, name, message, userID, createdDate } = user;
              console.log(createdDate,';dsofaiuoi')
              if (!name || !message || !email) return null;
                return (
                  <TableRow key={index}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{email}</TableCell>
                    <TableCell>{message.length >70 ? message.slice(0,70)+"..." : message}</TableCell>
                    <TableCell>{moment(new Date(createdDate.seconds * 1000)).format('DD/MM/YYYY hh:mm A')}</TableCell>
                  </TableRow>
                );
            })}
          </TableBody>
        </Table>
      </TableContainer>

    </div>
  )
}

export default Queries;
