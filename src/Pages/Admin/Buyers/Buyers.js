import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../../Firebase/utils'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Tooltip } from '@material-ui/core';
import AdminDesign from '../AdminDesign/AdminDesign';
import { CheckUserIsSeller } from '../../../Utils/Utils';
import { getAllUsers, deleteUsers } from '../../../Redux/User/user.actions';
import moment from 'moment';
import { ToastsStore } from 'react-toasts'
import '../Admin.css';
import DeleteIcon from '@material-ui/icons/Delete';

const mapState = (state) => ({
  data: state.user.users.data
})


const columns = [
  {
    id: 'FullName',
    value: 'First Name'
  },

  {
    id: 'createdDate',
    value: 'Created Date'
  },
  {
    id: 'email',
    value: 'Email'
  },
  {
    id: '',
    value: 'Remove'
  }

]

const Buyers = () => {
  const { data } = useSelector(mapState)
  //  const {data} =users;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());

  }, [])
  return (
    <div>
      <AdminDesign heading='Manage Buyer' />
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
            {(Array.isArray(data) && (data.length > 0)) && data.map((user, index) => {
              const { displayName, createDate, email, documentID } = user;
              if (!displayName || !createDate || !email) return null;
              const isSeller = CheckUserIsSeller(user);
              if (!isSeller) {
                return (
                  <TableRow key={index}>
                    <TableCell>{displayName}</TableCell>
                    <TableCell>{moment(createDate.nano).format('DD/MM/YYYY')}</TableCell>
                    <TableCell>{email}</TableCell>
                    <TableCell >
                      <Tooltip title='Delete'>
                        < DeleteIcon
                          className='sellerProductIcons'
                          onClick={() => {
                            if (auth.currentUser.uid === documentID) {
                              ToastsStore.warning('Cannot delete your own account');
                              return
                            }
                            else {
                              dispatch(deleteUsers(documentID))
                            }
                          }}
                        />
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                );
              }
            })}
          </TableBody>
        </Table>
      </TableContainer>

    </div>
  )
}

export default Buyers
