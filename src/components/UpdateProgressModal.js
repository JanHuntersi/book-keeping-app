export default function UpdateProgressModal({ show, handleClose }) {
    return (

        <div className="modal" style={{ display: show ? 'block' : 'none' }}>

            <div class="modal-content">
                <span onClick={handleClose} class="close">&times;</span>
                <h1>Update Chapter</h1>
                <p>New chapter:</p>
                <p>test</p>
            </div>
        </div>
    )
}

//Add functionality to update chapter