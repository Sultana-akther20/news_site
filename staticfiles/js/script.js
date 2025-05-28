/* jshint esversion: 6 */
/* jshint esversion: 10 */
/* global bootstrap */
"use strict";

// Delete functionality
const deleteButtons = document.getElementsByClassName("btn-delete");
const deleteModal = new bootstrap.Modal(document.getElementById("deleteModal"));
const deleteConfirm = document.getElementById("deleteConfirm");

for (let button of deleteButtons) {
    button.addEventListener("click", (e) => {
        let commentId = e.target.getAttribute("comment_id");
        deleteConfirm.href = `delete_comment/${commentId}`;
        deleteModal.show();
    });
}

// Edit functionality
const editButtons = document.getElementsByClassName("btn-edit");
const editModal = new bootstrap.Modal(document.getElementById("editModal"));
const editForm = document.getElementById("editForm");

//for (let button of editButtons) {
   // button.addEventListener("click", (e) => {
        //let commentId = e.target.getAttribute("comment_id");
       // let commentContent = document.getElementById(`comment${commentId}`).innerText.trim();
        
        // Set the form action URL
        //editForm.action = `edit_comment/${commentId}`;
        
        // Populate the textarea with existing comment
       // document.getElementById("id_body").value = commentContent;
        
        //editModal.show();
   // });
//}

for (let button of editButtons) {
    button.addEventListener("click", (e) => {
        let commentId = e.target.getAttribute("comment_id");
        let commentDiv = document.getElementById(`comment${commentId}`);
        let commentContent = commentDiv.innerText.trim();
        
        // Set the form action URL
        editForm.action = `edit_comment/${commentId}`;
        
        // Populate the textarea with existing comment
        document.getElementById("id_body").value = commentContent;
        
        editModal.show();
    });
}