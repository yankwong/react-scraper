import React, { Component } from 'react';

class InputText extends Component {
  state = {
    input : ""
  };

  handleChange(event) {
    // this.setState({
    //   input : event.target.value
    // });

    this.props.setFormState(event);
  }

  render () {
    return (
      <div className="input-item">
        <label htmlFor={this.props.id}>{this.props.labelText}:</label>
        <input type="text"
               name={this.props.inputName}
               id={this.props.id} 
               value={this.props.value}
               onChange={ event => this.handleChange(event) } />
      </div>
    );
  }
}

export default InputText;