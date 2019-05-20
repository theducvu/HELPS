import './NavMenu.css';
import * as React from 'react';
import {Component} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import uts from '../../res/uts-white.png';
import {IndexLinkContainer} from 'react-router-bootstrap';
import {AppState} from '../../types/store/StoreTypes';
import {connect} from 'react-redux';
import {NavMenuProps, NavMenuStateProps} from '../../types/components/NavMenuTypes';
import {AdminMenu, StudentMenu} from './Menu';

class NavMenu extends Component<NavMenuProps> {

    render() {
        const menuItems = this.props.isAdmin ? AdminMenu : StudentMenu;
        return (
            <header className='nav-menu'>
                <Navbar className='navbar-custom d-flex shadow'>
                    <Navbar.Brand href='/user' className='text-light ml-3'>
                        <img src={uts} alt='UTS Logo'/>
                    </Navbar.Brand>
                    <ul className='navbar-nav col ml-5'>
                        {menuItems.map((menuItem, index) => (
                            <IndexLinkContainer to={`/${menuItem.route}`}
                                                key={`${menuItem.route} ${index}`}
                                                className='text-light font-weight-bold link'>
                                <Nav.Item className='mr-5'>
                                    {menuItem.title}
                                </Nav.Item>
                            </IndexLinkContainer>
                        ))}
                    </ul>
                    <IndexLinkContainer to='/' className='text-light font-weight-bold link'>
                        <Nav.Item className='mr-3'>
                            Logout
                        </Nav.Item>
                    </IndexLinkContainer>
                </Navbar>
            </header>
        );
    }
}

const mapStateToProps = (state: AppState): NavMenuStateProps => ({
    isAdmin: state.auth.isAdmin
});

export default connect<NavMenuStateProps, {}, {}, AppState>(
    mapStateToProps
)(NavMenu);
