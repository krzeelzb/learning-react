import React, { Component } from "react";
import { connect } from "react-redux";

import { selectBook } from "../actions/index";
import { bindActionCreators } from "redux";

//glue between react and redux
//container wil l rerender when the state of app  is changed
class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li
          onClick={() => this.props.selectBook(book)}
          key={book.title}
          className="list-group-item"
        >
          {book.title}
        </li>
      );
    });
  }
  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

function mapStateToProps(state) {
  //whatevcer is returned will show up as props
  //insdie of bookList
  return {
    books: state.books
    //object that will be available in props
  };
}
// anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  //whenever selectBook is called, the results should
  //be passed to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//function and component and returns container
//making the values available as props
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);
