import React, { Component } from 'react';
import {withRouter} from "react-router-dom";

class Note extends Component {

    state = {
        note: {}
      };

    render() {
        return(
            <div className="note-body p-5">{this.state.note ? this.state.note.body : "Note not found"}</div>
        )
    }

    componentDidMount() {
        const noteId = this.props.match.params.id;
        fetch(`http://localhost:3000/notes/${noteId}`)
            .then(res => res.json())
            .then((data) => {
              this.setState({ note: data.note })
            })
            .catch(console.log)
        fetch(`http://localhost:3000/notes/${noteId}`, { method: 'DELETE'})
          }
}

export default withRouter(Note);