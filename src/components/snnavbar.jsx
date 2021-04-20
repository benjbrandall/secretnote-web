import React, { Component } from 'react';
import { Navbar, /*Button*/ } from 'react-bootstrap'

export class SnNavbar extends Component {

    render() {
        return(
            
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand className="justify-content-start" href="/">
            { /*<img alt="" src="./assets/lock.svg" width="30" height="30" className="d-inline-block align-top"/>{' '} */ }
            secretnote
            </Navbar.Brand>
            { /* <div className="justify-content-end"><Button className="btn-sm pull-right">+</Button></div> */}
            </Navbar> 

        )
    }
}