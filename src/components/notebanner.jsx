import React, {Component} from 'react';
import { Alert, Button } from 'react-bootstrap'

class NoteBanner extends Component {

    constructor(props) {
        super(props);

        this.state = {
            clipboardCopyClicked: false
        }
    }

    copyUrl = () => {
        navigator.clipboard.writeText(`localhost:3001/${this.props.id}`)
        this.setState({clipboardCopyClicked: true})
    }

    render() {
        return(
            <div>
                <Alert variant="success">Note saved!
                    <Button variant="link" onClick={this.copyUrl}>
                        {this.state.clipboardCopyClicked ? "Copied! ✨" : "Copy note URL to clipboard"}
                    </Button>
                </Alert>
            </div> 
        )
    }   
}

export default NoteBanner
