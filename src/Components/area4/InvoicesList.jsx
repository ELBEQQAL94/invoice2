import React, { Component } from "react";
import { Download } from "styled-icons/boxicons-solid/Download";

export default class Partners extends Component {
  state = {
    value: "a"
  };

  handleDownload = e => {
    e.preventDefault();
    console.log('you clicked me !');
  };

  render() {
    return (
      <div className="row">
        <div className="col-4">
          <h5>Agrolait</h5>
          <p className='text-capitalize'>invoices number : </p>
          <p className="sub_title"> 10/05/3010</p>
        </div>
        <div className="col-8 text-right">
          {" "}
          <Download onClick={this.handleDownload} className='download_icon' size={30} />
        </div>
        <div className="col-4">
          <h5>Agrolait</h5>
          <p className='text-capitalize'>invoices number : </p>
          <p className="sub_title"> 10/05/3010</p>
        </div>
        <div className="col-8 text-right">
          {" "}
          <Download className='download_icon' size={30} />
        </div>
        <div className="col-4">
          <h5>Agrolait</h5>
          <p className='text-capitalize'>invoices number : </p>
          <p className="sub_title"> 10/05/3010</p>
        </div>
        <div className="col-8 text-right">
          {" "}
          <Download className='download_icon' size={30} />
        </div>
        <div className="col-4">
          <h5>Agrolait</h5>
          <p className='text-capitalize'>invoices number : </p>
          <p className="sub_title"> 10/05/3010</p>
        </div>
        <div className="col-8 text-right">
          {" "}
          <Download className='download_icon' size={30} />
        </div>
      </div>
    );
  }
}
