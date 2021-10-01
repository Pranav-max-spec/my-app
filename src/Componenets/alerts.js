import React from "react"

function Alert() {
    return(
        <div>
            <div class="alert alert-info alert-dismissible fade show" role="alert">
               <strong>Welcome to LearnHTML<br /></strong><p>Here you will learn HTML much better</p>
               <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
    )
}

export default Alert