document.addEventListener("DOMContentLoaded", function() {
    console.log("Document is ready!");
    
    // Getting the elements from the post_detail.html
    const editButtons = document.getElementsByClassName("btn-edit");
    const commentText = document.getElementById("id_body");
    const commentForm = document.getElementById("commentForm");
    const submitButton = document.getElementById("submitButton");
    
    // Check if bootstrap is available
    if (typeof bootstrap === 'undefined') {
        console.error("Bootstrap is not loaded!");
        return;
    }
    
    // Get modal element and initialize
    const deleteModalElement = document.getElementById("deleteModal");
    let deleteModal = null;
    
    if (deleteModalElement) {
        try {
            deleteModal = new bootstrap.Modal(deleteModalElement);
            console.log("Modal created successfully");
        } catch (error) {
            console.error("Error creating modal:", error);
        }
    } else {
        console.error("Delete modal element not found!");
    }
    
    const deleteButtons = document.getElementsByClassName("btn-delete");
    const deleteConfirm = document.getElementById("deleteConfirm");
    
    // Extract the slug from the current URL path
    const slug = window.location.pathname.split('/')[2];
    
    // Edit button for edit a comment and a update button to show after editing to update the comment
    for (let button of editButtons) {
        button.addEventListener("click", (e) => {
            // Get the comment Id from button custom attribute
            let commentId = e.target.getAttribute("comment_id");
            // Find the comment content by constructing the ID "comment" + commentId
            let commentContent = document.getElementById(`comment${commentId}`).innerText;
            commentText.value = commentContent;
            submitButton.innerText = "Update";
            commentForm.setAttribute("action", `edit_comment/${commentId}`);
        });
    }
    
    // Delete button for delete a comment and will ask for confirmation of deletion
    for (let button of deleteButtons) {
        button.addEventListener("click", (e) => {
            let commentId = e.target.getAttribute("comment_id");
            
            // Set the delete confirmation link
            if (deleteConfirm) {
                deleteConfirm.href = `/${slug}/delete_comment/${commentId}`;
            }
            
            // Show modal only if it was created successfully
            if (deleteModal) {
                deleteModal.show();
            } else {
                console.error("Modal not available, using fallback");
                // Fallback: use browser confirm dialog
                if (confirm("Are you sure you want to delete this comment? This action cannot be undone.")) {
                    window.location.href = `/${slug}/delete_comment/${commentId}`;
                }
            }
        });
    }
});