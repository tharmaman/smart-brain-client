import React, { Component } from 'react';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

export default class ProfileIcon extends Component {
    state = {
        dropdownOpen: false
    };

    toggle = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    };

    handleSignout = async () => {
        const { onRouteChange, user } = this.props;
        console.log(user);
        const token = window.sessionStorage.getItem('token');
        let response = await fetch(`http://localhost:3000/logout/${user.id}`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token
            }
        });
        console.log(response);
        onRouteChange('signout');
        window.sessionStorage.clear();
    };

    render() {
        return (
            <div className="pa4 tc">
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle
                        tag="span"
                        data-toggle="dropdown"
                        aria-expanded={this.state.dropdownOpen}
                    >
                        <img
                            src="http://tachyons.io/img/logo.jpg"
                            className="br-100 ba h3 w3 dib"
                            alt="avatar"
                        />
                    </DropdownToggle>
                    <DropdownMenu
                        className="b--transparent shadow-5"
                        style={{
                            marginTop: '20px',
                            backgroundColor: 'rgba(255, 255, 255, 0.5)'
                        }}
                        right
                    >
                        <DropdownItem onClick={this.props.toggleModal}>
                            View Profile
                        </DropdownItem>
                        <DropdownItem onClick={() => this.handleSignout()}>
                            Sign Out
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        );
    }
}
