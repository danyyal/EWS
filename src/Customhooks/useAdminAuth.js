import {useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { CheckUserIsAdmin } from '../Utils/Utils';


const mapState=({user})=>({
    currentUser:user.currentUser
});


const useAdminAuth=props=>{
    const {currentUser} = useSelector(mapState);
   const history=useHistory();
    useEffect(() => {
        if(!CheckUserIsAdmin(currentUser)){
         history.push('/SignIn'); 
        }
    }, [currentUser]);
    return currentUser;
}
export default useAdminAuth;