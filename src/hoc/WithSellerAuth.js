import useSellerAuth from '../Customhooks/useSellerAuth';


const WithSellerAuth=props=>useSellerAuth(props) && props.children;

export default WithSellerAuth;