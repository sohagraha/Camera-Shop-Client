import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ManageProducts from '../../ManageProduct/ManageProducts/ManageProducts';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";

import { Button } from '@mui/material';
import AddService from '../../AddService/AddService';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Payment from '../Payment/Payment';
import AddReview from '../../Review/AddReview/AddReview';
import Myorders from '../../Myorders/Myorders';
import Allorders from '../../Allorders/Allorders';
import useFirebase from '../../../hooks/useFirebase';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import UserRoute from '../../Login/UserRoute/UserRoute';

const drawerWidth = 240;

function MainDashboard(props) {

    const { logout } = useFirebase();
    const { user, admin } = useAuth();

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar><i className="fas fa-user fs-1"></i><span className="fw-bold">{user?.displayName}</span></Toolbar>

            <Divider />

            <Link to={"/"}><Button variant='contained' className="bg-dark w-100 m-1">Home</Button></Link>
            <br />
            {
                admin &&
                <Link to={`${url}/add-product`}><Button variant='contained' className="bg-dark w-100 m-1">Add Product</Button></Link>
            }
            {
                admin &&
                <Link to={`${url}/manage-product`}><Button variant='contained' className="bg-dark w-100 m-1">Manage Porduct</Button></Link>
            }

            {
                admin &&
                <Link to={`${url}/make-admin`}><Button variant='contained' className="bg-dark w-100 m-1">Make AdMin</Button></Link>
            }

            {
                !admin &&
                <Link to={`${url}/my-orders`}><Button variant='contained' className="bg-dark w-100 m-1">My Order</Button></Link>}
            {
                admin &&
                <Link to={`${url}/all-orders`}><Button variant='contained' className="bg-dark w-100 m-1">All Order</Button></Link>
            }

            {
                !admin &&
                <Link to={`${url}/add-review`}><Button variant='contained' className="bg-dark w-100 m-1">Add Review</Button></Link>}

            {
                !admin &&
                <Link to={`${url}/pay`}><Button variant='contained' className="bg-dark w-100 m-1">Payment</Button></Link>
            }

            <Link className="nav-link" to="/"><span className="text-danger ms-2 p-2 bg" onClick={logout}> <i className="fas fa-sign-out-alt"></i> Log Out</span></Link>

            <Divider />
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar className="bg-dark">
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >

                <Switch>
                    <Route exact path={path}>
                        <h1>Welcome</h1>
                    </Route>
                    <AdminRoute path={`${path}/make-admin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manage-product`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                    <AdminRoute path={`${path}/add-product`}>
                        <AddService></AddService>
                    </AdminRoute>
                    <AdminRoute path={`${path}/all-orders`}>
                        <Allorders></Allorders>
                    </AdminRoute>
                    <UserRoute path={`${path}/my-orders`}>
                        <Myorders></Myorders>
                    </UserRoute>
                    <UserRoute path={`${path}/add-review`}>
                        <AddReview></AddReview>
                    </UserRoute>
                    <UserRoute path={`${path}/pay`}>
                        <Payment></Payment>
                    </UserRoute>
                </Switch>
            </Box>
        </Box>
    );
}

MainDashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default MainDashboard;

