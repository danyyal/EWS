import {useAuth} from './../Customhooks';

const WithAuth = props => useAuth(props) && props.children;

export default WithAuth;