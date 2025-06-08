/* jshint esversion: 6 */
/* jshint esversion: 10 */
/* global bootstrap */
"use strict";
console.log("Script loaded successfully!");


// Get the current post slug from the URL
const currentPath = window.location.pathname;
const postSlug = currentPath.split('/')[2]; // Extract slug from /post/slug-here/

// Delete functionality - only if modal exists
const deleteModalElement = document.getElementById("deleteModal");
if (deleteModalElement) {
    const deleteModal = new bootstrap.Modal(deleteModalElement);
    const deleteConfirm = document.getElementById("deleteConfirm");
    const deleteButtons = document.getElementsByClassName("btn-delete");
    
    for (let button of deleteButtons) {
        button.addEventListener("click", (e) => {
            let commentId = e.target.getAttribute("comment_id");
            // Use the correct URL pattern with post slug
            deleteConfirm.href = `/post/${postSlug}/delete_comment/${commentId}`;
            deleteModal.show();
        });
    }
}



// Edit functionality - only if modal exists
const editModalElement = document.getElementById("editModal");
if (editModalElement) {
    const editModal = new bootstrap.Modal(editModalElement);
    const editForm = document.getElementById("editForm");
    const editTextarea = document.getElementById("editTextarea");
    const editButtons = document.getElementsByClassName("btn-edit");
    
    for (let button of editButtons) {
        button.addEventListener("click", (e) => {
            let commentId = e.target.getAttribute("comment_id");
            let commentText = e.target.getAttribute("comment_text");
            
            // Set the form action URL with post slug
            editForm.action = `/post/${postSlug}/edit_comment/${commentId}/`;
            
            // Pre-populate the textarea with current comment text
            if (editTextarea && commentText) {
                editTextarea.value = commentText;
            }
            
            editModal.show();
        });
    }
}






