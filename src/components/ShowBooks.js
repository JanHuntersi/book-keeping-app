
import Book from "./Book";
import {useState} from 'react'
import { categories } from "../files/categories";
export default function ShowBooks({books, removeBook}){

const [choice,setChoice] = useState(null)

function handleInputChange(e){
setChoice(e.target.value)
}

function filterCategory(book){
    return book.book.category==choice;
}

    return(
        <div>
       <div className="bookWrapper">
        <h1>All Books By category</h1>
        <select
        name="category"
        onChange={handleInputChange}>
            {categories.map((option) => (
                <option value={option}>{option}</option>
            ))}
        </select>
        </div>
{books.map((book, index)=> (
    book.book.category==choice 
    ?(
<Book
    key={index}
    book={book.book}
    index={index}
    removeBook={removeBook}
    >
    </Book>
)
:null


))}
{
books.filter(filterCategory).length ==0
?  <div className="bookWrapper"><p>List is Empty</p></div>
:null

}
        </div>
    );
}