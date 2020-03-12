import React from 'react';
import {
    Nav,
    Button,
} from 'reactstrap';
import { Redirect } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='ProfSide'>

                <div className="SideLeft" onClick={this.showProfile}>
                    <Nav navbar className="MenuBtn">
                        <Button outline onClick={() => { this.props.handleSidebar() }}>
                            <span aria-hidden>&ndash;</span>
                        </Button>
                    </Nav>
                </div>
                <div className="SideRight"><a className="mr-auto navbar-brand" href="/">Company Name And Logo</a></div>
            </div>
        );
    }
}

export default Header;