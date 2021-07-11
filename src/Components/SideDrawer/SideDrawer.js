import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';


  
 const PermanentDrawerLeft=()=>{

  return (
    <div className='root'>
        <UpperNav {...props} />
<Drawer className='sideDrawer'
        variant="permanent"
        anchor="left"
>
 <Divider />
 <List>
   <ListItem><Link to='dashboard'>Home</Link></ListItem>
   <ListItem><Link to='dashboard'  onClick={() => signOut()}>SignOut</Link></ListItem>
 </List>
</Drawer>

      </div>
       );
}
export default PermanentDrawerLeft;