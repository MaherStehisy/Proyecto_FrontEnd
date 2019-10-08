import React from 'react';

class Form extends React.Component{
    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });  
    }
    handleClick = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render(){
        return(
            <form className="form form-contact">
            <div className="row">
              <label className="label">Name:</label>
              <input className="input" type="text" name="name" onChange={this.handleChange} />
            </div>
            <div className="row">
              <label className="label">Email:</label>
              <input className="input" type="email" name="email" onChange={this.handleChange} />
            </div>
            <div className="row">
              <label className="label">Message:</label>
              <textarea className="textarea" type="text" name="message" onChange={this.handleChange}></textarea>
            </div>
            <div className="row">
              <button className="button button-green" onClick={this.handleClick}>Send message</button>
            </div>
          </form>
        );
    }
}
export default Form;