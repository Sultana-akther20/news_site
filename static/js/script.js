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
        deleteConfirm.href = `delete_comment/${commentId}/`;
        deleteModal.show();
    });
}

// Edit functionality
const editButtons = document.getElementsByClassName("btn-edit");
const editModal = new bootstrap.Modal(document.getElementById("editModal"));
const editForm = document.getElementById("editForm");
const editTextarea = document.getElementById("editTextarea");

for (let button of editButtons) {
    button.addEventListener("click", (e) => {
        let commentId = e.target.getAttribute("comment_id");
        let commentText = e.target.getAttribute("comment_text");
        
        // Set the form action URL
        editForm.action = `edit_comment/${commentId}/`;
        
        // Pre-populate the textarea with current comment text
        editTextarea.value = commentText;
        
        editModal.show();
    });
}



