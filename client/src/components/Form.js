import React, { Component } from 'react';
import InputText from './InputText';

class Form extends Component {
  state = {
    search  : '',
    start   : '',
    end     : '',
  };

  updateState (name, event) {
    // const name  = event.target.name;
    const value = event.target.value;

    this.setState({
      [name] : value
    });
  };

  isValidDate (value) {
    const pattern = /^(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|1\d|2\d|3[01])$/;
    return pattern.test(value);
  }

  clearAll (event) {
    event.preventDefault();
    this.setState({
      search  : '',
      start   : '',
      end     : '',
    })
  };

  hasValue(value) {
    return typeof value !== 'undefined' && value.trim() !== '';
  };

  handleSubmit(event) {
    event.preventDefault();
    let query = `&q=${this.state.search}`;
    query += (this.hasValue(this.state.start) && this.isValidDate(this.state.start) ? `&begin_date=${this.state.start}` : '');
    query += (this.hasValue(this.state.end) && this.isValidDate(this.state.end) ? `&end_date=${this.state.end}` : '');
    
    console.log('diu in Form', query);

    this.props.doSubmit(query);
  }

  render () {
    return (
      <form className="search-form"
            onSubmit={(event) => this.handleSubmit(event)}>
        <InputText 
          setFormState={ (event) => this.updateState('search', event) }
          id="search-term"
          value={this.state.search}
          labelText="Search Term"
          inputName="search-term"
        />

        <InputText 
          setFormState={ (event) => this.updateState('start', event) }
          id="start-year"
          value={this.state.start}
          labelText="Start Year (Optional)"
          inputName="start-year"
        />

        <InputText 
          setFormState={ (event) => this.updateState('end', event) }
          id="end-year"
          value={this.state.end}
          labelText="End Year (Optional)"
          inputName="end-year"
        />
        <input type="submit" value="Search" />
        <button className="clearBtn" onClick={(event) => this.clearAll(event)}>Clear Results</button>
      </form>
    );
  }
}


export default Form;