/*
  Components: <About />
  File: Project.js
*/

/* Core components */
import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

/* Data controller */
import { Data } from './../controllers/data.js'

/* Contact component */
export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Name',
      email: 'Email',
      message: 'Message',
      confirmation: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleClick(event) {
    event.target.value = ''
  }

  handleBlur(event) {
    event.target.value = this.state[event.target.name]
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('A form has been submitted.');
    event.preventDefault();

    Data.database().ref('contact').push().set({
      name: this.state.name,
      email: this.state.email,
      message : this.state.message
    });

    this.setState({confirmation: 'Your message has been delivered. Thank you.'})
  }

  render() {
    const title = "Michael L. Castilla · Contact";
    const confirmation = this.state.confirmation
    return (
      <div className="content">
        <Helmet>
          <title>{title}</title>
          <link rel="shortcut icon" href="/img/notepad.png"/>
          <body className="contact" />
        </Helmet>
        <div className="row">
          <div className="column">
            <form onSubmit={this.handleSubmit} className="content contact">
              <h2>Contact</h2>
              <p>Looking to get in touch? Please reach out.</p><br/>
              <input type="text" name="name" value={this.state.name} onChange={this.handleChange} onClick={this.handleClick} onBlur={this.handleBlur} />
              <br/>
              <input type="text" name="email" value={this.state.email} onChange={this.handleChange} onClick={this.handleClick} onBlur={this.handleBlur} />
              <br/>
              <textarea name="message" value={this.state.message} onChange={this.handleChange} onClick={this.handleClick} onBlur={this.handleBlur} />
              <br/>
              <input type="submit" value="Submit" />
              <p className="confirmation">{confirmation}</p>
            </form>
          </div>
        </div>
      </div>

    );
  }
}
