import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'
import { Form, Button, Alert } from 'react-bootstrap'
import NoteBanner from './notebanner';

class New extends Component {

    constructor(props) {
        super(props);

        this.state = {
            noteBannerOpen: false
        };
    }

    handleSubmit = (event) => {
        this.setState({emptyNoteBannerOpen: false, noteBannerOpen: false})
        event.preventDefault();
        const note = this.state.value
        if (!note) {
            this.setState({emptyNoteBannerOpen: true})
        } else {
            fetch('http://localhost:3000/notes', {
            method: 'post', 
            body: JSON.stringify({body: note}), 
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then((data) => {
            this.setState({noteId: data.note.id})
            this.setState({noteBannerOpen: true, emptyNoteBannerOpen: false})
        })
        }
    }

    handleChange = (event) => {
        this.setState({value: event.target.value})
    }

    render() {
        return(
        <div className="p-3">
            <div className="container">
            { this.state.noteBannerOpen ? <div><NoteBanner id={this.state.noteId} /></div> : null }
            { this.state.emptyNoteBannerOpen ? <div><Alert variant="warning">Note can't be empty</Alert></div> : null }
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="noteText">  
                    <Form.Control value={this.state.value} as="textarea" onChange={this.handleChange} rows={10} />
                    <Button className="mt-3" type="submit">Create New Note</Button>
                </Form.Group>
            </Form>
            </div>
        </div>
        )
    }
}

export default withRouter(New);