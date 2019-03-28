import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import MyButton from "../MyButton";
import Area2 from "../area2/Area2";
//import Area3 from "../area3/Area3";
  
export default class FormInput extends Component {
  // State of application

  state = {
    username: "xmlrpc@econostic.net",
    password: "xmlrpc",
    showResults: []
  }
  // Update changes
  updateChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const username = this.state.username;

    const password = this.state.password;
    //API Request #1
    
  const Odoo = require("odoo-xmlrpc");
  const odoo = new Odoo({
  url: "https://econostic-youssef.odoo.com",
  db: "econostic-youssef",
  username: username,
  password: password
});

// connect to odoo
odoo.connect(err => {
  if (err) {
    return console.log(err);
  } else {
    console.log("Connected to Odoo server.");
  }
})
}


  render() {
    const showResults =  this.state.showResults; 
    return (
      <div className="auth_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
            <h4>1 - Server Authentification</h4>
            <p className='sub_title'>Please setup host, username and password first.</p>
              <form onSubmit={event => this.handleSubmit(event)}>
                <div className="form-group">
                  {" "}
                  <TextField
                    label="Username*"
                    style={{ width: "100%", margin: "2em 0" }}
                    value={this.state.username}
                    type="text"
                    onChange={this.updateChange("username")}
                  />
                </div>
                <div className="form-group">
                  {" "}
                  <TextField
                    label="Password*"
                    type="password"
                    style={{ width: "100%", margin: "2em 0" }}
                    value={this.state.password}
                    onChange={this.updateChange("password")}
                  />
                </div>
                <MyButton submit={this.handleSubmit} text="connect"  />
              </form>
            </div>
            <div className='col-lg-8'>
                <Area2 showResults={showResults}/>
            </div>
          </div>
          <hr/>
          <div className='row'>
            <div className='col-lg-4'>Area3</div>
            <div className='col-lg-8'>Area4</div>
          </div>
        </div>
      </div>
    );
  }
}
