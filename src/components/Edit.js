import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';
import Form from "@rjsf/core";
import JSONSchemaForm from "@rjsf/core";
import $ from "jquery";
import Schema from "./schema"
class Edit extends Component {

  constructor(props) {
    super(props);

    this.ref = firebase.firestore().collection("details");
    this.unsubscribe = null;

    const Form = JSONSchemaForm.default;
    const schema = {
      type: "object",
      properties: {
        title: {
          type: "string"
        },
        done: {
          type: "boolean"
        }
      }
    };
    
    const formData = {
      title: "First task",
      done: true
    };

    this.state = {
      resumeData: { 
                    main : '',
                    resume : '',
                    portfolio : ''
                  },
      schema : Schema ,
      formData: formData
    
    };

    // this.getResumeData();


  }


  saveAllData() {
    this.ref
      .doc("main")
      .set(this.state.resumeData.main)
      .then(function () {
        console.log("Document successfully written!");
      });
    this.ref
      .doc("resume")
      .set(this.state.resumeData.resume)
      .then(function () {
        console.log("Document successfully written!");
      });
    this.ref
      .doc("portfolio")
      .set(this.state.resumeData.portfolio)
      .then(function () {
        console.log("Document successfully written!");
      });
  }


  getAllData() {
    
    var state = this.state;
    var self = this;  
     

    this.ref
      .doc("main")
      .get()
      .then(function (doc) {

          // console.log("Document data:", doc.data());
        state.resumeData.main=doc.data();
        self.setState(state);

      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });

    this.ref
      .doc("resume")
      .get()
      .then(function (doc) {
      
          // console.log("Document data:", doc.data());
          state.resumeData.resume=doc.data();
          self.setState(state);
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });

    this.ref
      .doc("portfolio")
      .get()
      .then(function (doc) {
       
          // console.log("Document data:", doc.data());
          state.resumeData.portfolio =doc.data() ;
          self.setState(state);

          
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  }



  componentDidMount() {
     this.getAllData();

  }

  // onChange = (e) => {
  //   const state = this.state
  //   state[e.target.name] = e.target.value;
  //   this.setState({details:state});
  // }

  setFormData(e){
    
    const state = this.state ;
    state.resumeData = e ; 
    this.setState(state)
    // console.log(this.state.resumeData.main)
  // console.log(e.main)
   this.saveAllData()
  }

  render() {

    return (

      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              EDIT
            </h3>
          </div>
          <div class="panel-body">
          <Form schema={this.state.schema}
      formData={this.state.resumeData} 
      onSubmit={e => this.setFormData(e.formData)}
      />

          </div>
          </div>
          </div>


    );
  }
}

export default Edit;