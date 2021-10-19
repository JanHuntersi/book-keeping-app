import { useState } from "react";
import { Link } from "react-router-dom"
import UpdateProgressModal from "./UpdateProgressModal";



export default function Book({book,index,removeBook,updateBooks}){

    const [modal,openModal] = useState(false)

    const handleShow = () => openModal(true)
    function handleClose(){openModal(false);
    console.log("zaprl si!")}

    //Update chapter
    const [state,updateState]= useState("")

    function handleInputChange(e){
        console.log("handleInputChange")
        const  {name,value} = e.target
        updateState({
            ...state,
            [name]:value,
        });
    }
    function handleSubmit(e){
        openModal(false);
        console.log("handleSubmit")
        e.preventDefault();
        
        if(state.currentChapter!=''){

            book.currentChapter=state.currentChapter
            updateBooks();
        }
        else{
        alert('Enter chapter')
        console.log("narobe");
    }
    }

return(
    <div className="bookWrapper" >
    <div style={{width:"50%"}}>
    <h4 style={{color:"grey",fontWeight:"bold" }}>{book.category}</h4>
    <h2>{book.bookName}</h2>
    <h4 style={{color:"#70e1e1"}}>{book.bookAuthor}</h4>
    <Link to={`/books/${book.id}`}>
    <p>Details</p>
    <p>
    
    </p>
    </Link>
    
    </div>
    
       <div className="chapterAndButton" style={{width:"50%"}}>
           <div id="chapterWrapper">
           <h4 style={{color:"grey",fontWeight:"bold" }}>Current chapter</h4>
           <p>{book.currentChapter}</p>
           <button onClick={handleShow}>Update progress</button>
           <UpdateProgressModal 
           show={modal} 
           handleClose={handleClose}
           handleInputChange={handleInputChange}
           handleSubmit={handleSubmit}
           ></UpdateProgressModal>
            </div>
           <span className="removeBtn" onClick={() => removeBook(index)}>X</span></div> 
    </div>
);
}