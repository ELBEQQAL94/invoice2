import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import MyButton from "../MyButton";
class Area3 extends Component {
  render() {
    return (
      <>
        <h4 className="text-capitalize font-wight-bold">
          partner informations
        </h4>
        <p className="sub_title">
          Please setup host, username and password first.
        </p>
        {this.props.showResults.map(company => {
          return (
            <form key={company.id}>
              <div className="form-group">
                {" "}
                <TextField
                  style={{ width: "100%", margin: "2em 0" }}
                  value={company.name}
                />
              </div>
              <div className="form-group">
                {" "}
                <TextField value={company.street} style={{ width: "100%" }} />
              </div>
              <div className="form-group">
                {" "}
                <TextField value={company.phone} style={{ width: "100%" }} />
              </div>
              <MyButton text="Save Changes" />
            </form>
          );
        })}
      </>
    );
  }
}

export default Area3;
