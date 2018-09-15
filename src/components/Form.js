import React, { Component } from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { connect } from "react-redux";
import { sendMail } from "../actions";

import { Container, ContainerSection, Button, Label } from './common';
class Form extends Component {

  validateText(value) {
    return value && value.length >= 2 ?  undefined : `Must be 2 characters or more`
  }

  validateEmail(value) {
    const emailRegex = /^[a-zA-Z0-9\+_\.\-]+@[a-zA-Z0-9_\.\-]+\.[a-zA-Z\.]{2,4}$/
    return value && emailRegex.test(value) ? undefined : "Invalid email address"
  }

  validatePhone(value) {
    const phoneRegex = /^[0-9]{10}$/
    return value && phoneRegex.test(value) ? undefined : "Invalid phone number"
  }

  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `formInput form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <input className="formInput form-control" {...field.input} />
        <div className="text-help">
          {touched ? error : ""}
        </div>
      </div>
    );
  }



  sendMail = (values, dispatch) => {
    const { firstName, lastName, email, phone } = values;
    const mail = {
      to: 'stavbarak@gmail.com',
      from: 'stavbarak@gmail.com',
      subject: 'New Lead',
      text: `First Name: ${firstName}
             Last Name: ${lastName}
             Mail Address: ${email}
             Phone Number: ${phone}`
    };

    const userDetails = {
      firstName, lastName, email, phone
    };

    dispatch(sendMail({mail, userDetails}));
    dispatch(reset('contact'));
  }

  onSubmit = (values, dispatch) => {
    this.sendMail(values, dispatch); 
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <Container>
        <form onSubmit={handleSubmit(this.onSubmit)}>
        <ContainerSection>
          <Label htmlFor="firstName" text ="First Name" />
          <Field
            className="formInput"
            name="firstName"
            validate={this.validateText}
            component={this.renderField}
            type="text"/>

        </ContainerSection>

        <ContainerSection>
          <Label htmlFor="lastName" text ="Last Name" />
          <Field
            className="formInput"
            name="lastName"
            validate={this.validateText}
            component={this.renderField}
            type="text"/>

        </ContainerSection>

        <ContainerSection>
          <Label htmlFor="email" text ="Mail Address" />
          <Field
            className="formInput"
            name="email"
            validate={this.validateEmail}
            component={this.renderField}
            type="email"/>
        </ContainerSection>

        <ContainerSection>
          <Label htmlFor="phone" text ="Phone Number" />
          <Field
          className="formInput"
          name="phone"
          validate={this.validatePhone}
          component={this.renderField}
          type="text"/>

        </ContainerSection>

        <ContainerSection>
          <Button
            type="submit" className="btn btn-primary">       
              Submit
          </Button>
        </ContainerSection>
        </form>
      </Container>
    );
  }
}



export default reduxForm({
  form: "contact"
})(connect()(Form));
