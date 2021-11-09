import React, {useState} from "react";
import {styles} from "../styles";
import {categories} from "../files/categories"
export default function Input({addBook,books}){

    const [state, setState] = useState(null)
   
   let  newBook = {
        bookName:"",
        bookAuthor:"",
        category:"",
        id:0,
        comment:"",
        currentChapter:""
    }

    function handleInputChange(e){
        const {name, value} = e.target
        setState({
            ...state,
            [name]:value,
        });
    
      };

    function handleSubmit(e){
        e.preventDefault();
        document.getElementById("myform").reset();  
        newBook.bookName = state.bookName;
        newBook.bookAuthor = state.bookAuthor; 
        newBook.category = state.category;
        newBook.comment = state.comment
        newBook.currentChapter = state.currentChapter
        
        if(books.length===0){newBook.id=1}
       
        else{
        let lastBook=books[books.length-1].book  
        newBook.id = lastBook.id+1                 //setting Book.id
        }
       // console.log(newBook.bookName+", id: "+ newBook.id)

        if(newBook.bookName && newBook.bookAuthor !== "" && newBook.category!=="Category" && newBook.category!==""){
        addBook(newBook);
    }else{
        alert('Please fill out all options correctly')
    }
    }
    return(
        <form id="myform" onSubmit={handleSubmit} style={styles.FormWrapper}>
        <a style={{display:"inline-block"}}>Book Name: </a>
        <input
        style={{width:"30%",lineHeight:"34px" }}
        type="text"
        name="bookName"
        onChange={handleInputChange}>
        </input>
        <a style={{display:"inline-block"}}>Book Author: </a>
        <input
        style={{width:"30%",lineHeight:"34px"}}
        type="text"
        name="bookAuthor"
        onChange={handleInputChange}>
        </input>
        <select
        name="category"
        onChange={handleInputChange}>
            {categories.map((option) => (
                <option value={option}>{option}</option>
            ))}
        </select>
        <a style={{display:"inline-block"}}>Comment: </a>
        <input
        style={{width:"30%",lineHeight:"34px"}}
        type="text"
        name="comment"
        onChange={handleInputChange}>
        </input>

        <a style={{display:"inline-block"}}>Current Chapter: </a>
        <input
        style={{width:"30%",lineHeight:"34px"}}
        type="text"
        name="currentChapter"
        onChange={handleInputChange}>

        </input>
        <input type="submit"value="submit" style={{display:"inline-block",padding:"10px 20px",backgroundColor:"white",
         border:"none",textDecoration:"none",color:"blue"}} >
        </input>
    </form>
    );
}
