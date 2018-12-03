import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { createPost } from "../actions";
import { connect } from "react-redux";

class PostsNew extends Component {
  renderField(field) {
    const {
      meta: { touched, error }
    } = field;
    //instead of field.meta.touched  or field.meta.error
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          //all the props of field.input shoud be
          //value,change,blur
          //comunicated as props to input tag
          // onChange={field.input.onChange}
          // onFocus={field.input.onFocus}
          type="text"
          {...field.input}
        />
        <div className="text-help">{touched ? error : ""}</div>
      </div>
    );
  }
  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push("/"); //redirect to index page
    });
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field name="title" label="Title" component={this.renderField} />
        <Field
          name="categories"
          label="Categories"
          component={this.renderField}
        />
        <Field
          name="content"
          label="Post Conetent"
          component={this.renderField}
        />
        {/* reference */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  //validate the inputs from 'values
  if (!values.title || values.title.length < 3) {
    errors.title = "Enter a title taht is at least 3 characters";
  }
  if (!values.categories) {
    errors.categories = "Enter some categories!";
  }

  if (!values.content) {
    errors.content = "Enter content!";
  }

  //if errorrs is empty the form is fine to submit
  return errors;
}

export default reduxForm({
  validate,
  form: "PostsNewForm" //name of the form
})(
  connect(
    null,
    { createPost }
  )(PostsNew)
);
