import React, { Component } from "react";



class Area2 extends Component {
   
    state = {
      value : '',
      loading : true
    }

  
  handleChange = (e) => {
    this.setState({
      value : e.target.value
    });
  }

  clicked = id => {
    const company = this.props.showResults.filter(company => company.id !== id);
    const name = company.map(company => {
      return company.name
    });
    const str = name.join();
    console.log('name of company : ', str);
    console.log('id : ', id);
  }

  showSomething = () => (
    <div>hello</div>
  );
  
  
  render() {
     
    return (
      <>
      <h4>2 - Select Partner</h4>
      <p className="sub_title">Please type a partner name</p>
      {this.props.showResults.map((company, index) => {
        const d = new Date(company.create_date).toDateString();
        return (
        <div className='row' key={company.id}>
        <div className="col-4">
          <h5>{company.name}</h5>
          <p className="sub_title">
            Client since from {d}
          </p>
        </div>
        <div className="col-8 text-right">
        {" "}
        <label className='radio_container'>
        <input
        type='radio'
        id={company.id}
        checked={this.state.value === company.name}
        value={company.name}
        onChange={this.handleChange}
        onClick={() => this.clicked(company.id)}
        />
        <span className='circle'></span>
        </label>
        </div>
      </div>) 
      }
      )}
      </>
    );
    }
  }

export default Area2;

/*<Radio
                checked={this.state.value === company.value }
                value={company.name}
                id={company.id.toString()}
                style={{ color: "#f26d39" }}
                onChange={this.handleChange}
              />*/