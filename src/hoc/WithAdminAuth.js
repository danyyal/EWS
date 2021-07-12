
import useAdminAuth from '../Customhooks/useAdminAuth';

const WithAdminAuth=props=>useAdminAuth(props) && props.children;

export default WithAdminAuth;