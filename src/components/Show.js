import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      details: {},
      key: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('details').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          details: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  delete(id){
    firebase.firestore().collection('ddetails').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
          <h4><Link to="/">Show Details</Link></h4>
            <h3 class="panel-title">
              Details List
            </h3>
          </div>
          <div class="panel-body">
            <dl>
              <dt>About Me:</dt>
              <dd>{this.state.details.bio}</dd>
              <dt>Author:</dt>
              <dd>{this.state.details.contactmessage}</dd>
            </dl>
            <Link to={`/edit/${this.state.key}`} class="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.key)} class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;