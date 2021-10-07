import { useState } from "react";
import { Link } from "react-router-dom"
import UpdateProgressModal from "./UpdateProgressModal";



export default function Book({book,index,removeBook}){

    const [progress,updateProgress] = useState(false)

    const handleShow = () => updateProgress(true)
    function handleClose(){updateProgress(false);
    console.log("zaprl si!")}

return(
    <div className="bookWrapper" >
    <div style={{width:"50%"}}>
    <h4 style={{color:"grey",fontWeight:"bold" }}>{book.category}</h4>
    <h2>{book.bookName}</h2>
    <h4 style={{color:"#70e1e1"}}>{book.bookAuthor}</h4>
    <Link to={`/books/${book.id}`}>
    <p>Details</p>
    </Link>
    
    </div>
    
       <div className="chapterAndButton" style={{width:"50%"}}>
           <div id="chapterWrapper">
           <h4 style={{color:"grey",fontWeight:"bold" }}>Current chapter</h4>
           <p>{book.currentChapter}</p>
           <button onClick={handleShow}>Update progress</button>
           <UpdateProgressModal 
           show={progress} 
           handleClose={handleClose}></UpdateProgressModal>
            </div>
           <span className="removeBtn" onClick={() => removeBook(index)}>X</span></div> 
    </div>
);
}