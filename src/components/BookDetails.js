import { useState } from "react";
import { useParams } from "react-router-dom";
import Heading from "./Heading";

export default function BookDetails({books}){

    const { id }= useParams();
  
    const headingText=`Book details - ${id}`

    function filterBooks(books){
        var found=false
        var foundBook
        books.filter((book)=> {
            if(book.book.id==id){
                console.log("nasel knjigo")
                found=true;
                foundBook= book.book;
            }
        })
        if( found){return foundBook}
        else{return null}
    }


    const[book,setBook] = useState(()=>{
        console.log( filterBooks(books))
        return filterBooks(books)
    })
    

    return(
        <div>
           <Heading name={headingText}> </Heading> 
        
        {
            book==null
            ?<p  className="bookWrapper">Book with id doesn't exist</p>
            :<div className="bookDetailsWrapper">
                <p> <a className="bookDetailsHeading"> Book Name:</a> {book.bookName}</p>
                <p> <a className="bookDetailsHeading"> Book Author:</a> {book.bookAuthor}</p>
                <p> <a className="bookDetailsHeading"> Book Category:</a> {book.category}</p>
                <p> <a className="bookDetailsHeading"> Book ID:</a> {book.id}</p>
                <p> <a className="bookDetailsHeading"> Current Chapter: </a>{book.currentChapter}</p>
                <p> <a className="bookDetailsHeading"> Book Comment:</a></p>
                <div>{book.comment}</div>
                
            </div>
        }
        </div>
        );
}