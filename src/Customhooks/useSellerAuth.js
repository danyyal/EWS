import {useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {CheckUserIsSeller} from '../Utils/Utils';

const mapState=({user})=>({
    currentUser:user.currentUser
});


const useSellerAuth=props=>{
    const {currentUser} = useSelector(mapState);
   const history=useHistory();
    useEffect(() => {
        if(!CheckUserIsSeller(currentUser)){
         history.push('/SignIn'); 
        }
    }, [currentUser]);
    return currentUser;
}
export default useSellerAuth;