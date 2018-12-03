// key to global app state book

import { combineReducers } from "redux";
import BooksReducer from "./reducer_book";
import ActiveBook from "./reducer_active_book";

const rootReducer = combineReducers({
  books: BooksReducer, //global state book
  activeBook: ActiveBook
});

export default rootReducer;
