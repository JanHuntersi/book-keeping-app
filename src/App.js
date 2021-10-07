import Navbar from './components/Navbar'
import Input from './components/Input'
import Book from './components/Book'
import ShowBooks from './components/ShowBooks'
import Heading from './components/Heading'
import BookDetails from './components/BookDetails'

import React from "react"
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import {styles} from "../src/styles"


function App() {

const [books, setBooks] = useState(() =>{
  const savedBooks = localStorage.getItem("books");
  if(savedBooks){
    return JSON.parse(savedBooks)
  } else{
    return []
  }
});


//when array books is changed, new value of books are saved to 
//localstorage
useEffect(() =>{
localStorage.setItem("books",JSON.stringify(books));
},[books])


function removeBook(index) {
  console.log("remove this book")
  const newBooks= [...books];
  newBooks.splice(index,1);
  setBooks(newBooks);
} 

const addBook = book =>{
  console.log("Function add new book was called")
  const newBooks =[...books, {book}];
  setBooks(newBooks)
  alert("New Book added!")
}



  return (
    <Router>
      <div>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
              <Heading name="All Books" ></Heading>
              {
                books.length ==0
                ?  <div className="bookWrapper"><p>List is Empty</p></div>
                :null
              }
            {books.map((book, index) => (
                <Book 
                book={book.book}
                index={index}
                removeBook={removeBook}></Book> 
            ))}
          </Route>
          <Route exact path="/showbooks">
            <ShowBooks books={books}
            removeBook={removeBook}></ShowBooks>
          </Route>
          <Route exact path="/newbook">
          <Heading name="Add a new book" ></Heading>
            <Input addBook={addBook}
            books={books}></Input>
          </Route>
          <Route path="/books/:id">
               <BookDetails books={books}></BookDetails> 
          </Route>
        </Switch>
            
      </div>
    </Router> 
);
}

export default App;
