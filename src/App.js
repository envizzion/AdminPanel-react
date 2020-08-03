import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import firebase from './Firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('details');
    this.unsubscribe = null;
    this.state = {
      details: []
    };




  }

  onCollectionUpdate = (querySnapshot) => {
    const details = [];
    querySnapshot.forEach((doc) => {
      const { bio, contactmessage} = doc.data();
      details.push({
        key: doc.id,
        bio, // DocumentSnapshot
        contactmessage,
        
      });
    });
  //   this.setState({
  //     details
  //  });
  }

  componentDidMount() {
    // this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              EDIT LIST
            </h3>
          </div>
          <div class="panel-body">
            
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Edit tab</th>
                  <th>About Me</th>
                  <th>Contact Message</th>
                  
                </tr>
              </thead>
              <tbody>
                {this.state.details.map(details =>
                  <tr>
                    <td><Link to={`/show/${details.key}`}>Edit</Link></td>
                    <td>{details.bio}</td>
                    <td>{details.contactmessage}</td>
                    
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
