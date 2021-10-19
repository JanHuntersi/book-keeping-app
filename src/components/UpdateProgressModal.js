export default function UpdateProgressModal({ show, handleClose,handleInputChange,handleSubmit }) {
 
    return (

        <div className="modal" style={{ display: show ? 'block' : 'none' }}>

            <div class="modal-content">
                <span onClick={handleClose} class="close">&times;</span>
                <form id="form" onSubmit={handleSubmit}>
                
                <h1>Update Chapter</h1>
                <p>New chapter:</p>
                <input
                type="text"
                name="currentChapter"
                onChange={handleInputChange}
               >
                </input>
                <input type="submit"value="submit" style={{display:"inline-block",padding:"10px 20px",backgroundColor:"blue",
         border:"none",textDecoration:"none",color:"white"}} >
        </input>
        </form>
            </div>
        </div>
    )
}

//Add functionality to update chapter