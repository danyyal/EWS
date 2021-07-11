import React,{useState} from 'react';
import { TableContainer, TableCell, Table, TableHead, TableBody, TableRow, } from '@material-ui/core';
import moment from 'moment';
import { useHistory } from 'react-router';
import Checkbox from '@material-ui/core/Checkbox';

import './OrderHistory.css';
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
            return `RS.${columnValue}`
        case 'orderCreatedDate':
            return moment(columnValue.nano).format('DD/MM/YYYY');
        case 'cancel':
            return <span><Checkbox/>Cancel</span>
        default:
            return columnValue
    }
}

const OrderHistory = ({ order }) => {
    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };

    const history = useHistory();
    return (
        <div className="historyContainer">
            <TableContainer>
                <Table>
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
                            const { documentID } = order;
                            return (
                                // console.log(order),
<TableRow key={index} onClick={() => history.push(`/Order/${documentID}`)} >
              {columns.map((column, index) => {
           const columnName = column.id;
             const columnValue = order[columnName];
                 const textFormating = formating(columnName, columnValue);
                        return (
      <TableCell key={index} className='headCell' >
        {textFormating}
     </TableCell>
    
         )
        })
        }

</TableRow>
                            )
                        })

                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default OrderHistory
