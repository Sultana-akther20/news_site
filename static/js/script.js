/*document.addEventListener("DOMContentLoaded", function() {
    console.log("Document is ready!");
    
    // Debug: Check what elements exist on the page
    console.log("All elements with 'Modal' in id:");
    const allElements = document.querySelectorAll('[id*="modal"], [id*="Modal"]');
    allElements.forEach(el => console.log("Found element:", el.id, el));
    
    // Debug: Check if modal HTML exists anywhere
    const modalCheck = document.querySelector('.modal');
    console.log("Found any modal element:", modalCheck);
    
    // Debug: Check delete buttons
    const deleteButtons = document.getElementsByClassName("btn-delete");
    console.log("Delete buttons found:", deleteButtons.length);
    
    // Getting the elements from the post_detail.html
    const editButtons = document.getElementsByClassName("btn-edit");
    const commentText = document.getElementById("id_body");
    const commentForm = document.getElementById("commentForm");
    const submitButton = document.getElementById("submitButton");
    
    console.log("Edit buttons:", editButtons.length);
    console.log("Comment text field:", commentText);
    console.log("Comment form:", commentForm);
    console.log("Submit button:", submitButton);
    
    // Check if bootstrap is available
    if (typeof bootstrap === 'undefined') {
        console.error("Bootstrap is not loaded!");
        return;
    }
    console.log("Bootstrap is loaded successfully");
    
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
        
        // Let's create the modal dynamically as a workaround
        const modalHTML = `
        <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="deleteModalLabel">Delete comment?</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        Are you sure you want to delete your comment?
                        This action cannot be undone.
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <a id="deleteConfirm" href="#" class="btn btn-danger">Delete</a>
                    </div>
                </div>
            </div>
        </div>`;
        
        // Add modal to body
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        // Try to create modal again
        const newModalElement = document.getElementById("deleteModal");
        if (newModalElement) {
            try {
                deleteModal = new bootstrap.Modal(newModalElement);
                console.log("Modal created dynamically and initialized successfully");
            } catch (error) {
                console.error("Error creating dynamic modal:", error);
            }
        }
    }
    
    const deleteConfirm = document.getElementById("deleteConfirm");
    console.log("Delete confirm button:", deleteConfirm);
    
    // Extract the slug from the current URL path
    const slug = window.location.pathname.split('/')[2];
    console.log("Current slug:", slug);
    
    // Edit button functionality
    for (let button of editButtons) {
        button.addEventListener("click", (e) => {
            let commentId = e.target.getAttribute("comment_id");
            let commentContent = document.getElementById(`comment${commentId}`).innerText;
            commentText.value = commentContent;
            submitButton.innerText = "Update";
            //commentForm.setAttribute("action", `edit_comment/${commentId}`);
            commentForm.setAttribute("action", `/${slug}/edit_comment/${commentId}`);
        });
    }*/

       
       
       
        /*for (let button of editButtons) {
        button.addEventListener("click", (e) => {
            console.log("=== EDIT BUTTON CLICKED ===");
            
            let commentId = e.target.getAttribute("comment_id");
            console.log("Comment ID:", commentId);
            
            let commentContent = document.getElementById(`comment${commentId}`).innerText;
            console.log("Comment content:", commentContent);
            
            if (commentText) {
                commentText.value = commentContent;
                console.log("Comment text field updated");
            } else {
                console.error("Comment text field not found!");
            }
            
            if (submitButton) {
                submitButton.innerText = "Update";
                console.log("Submit button text changed to 'Update'");
            } else {
                console.error("Submit button not found!");
            }
            
            if (commentForm) {
                const newAction = `/${slug}/edit_comment/${commentId}`;
                commentForm.setAttribute("action", newAction);
                console.log("Form action set to:", newAction);
                console.log("Form action attribute now:", commentForm.getAttribute("action"));
            } else {
                console.error("Comment form not found!");
            }
            
            console.log("=== EDIT SETUP COMPLETE ===");
        });
    }
    
    
    // Delete button functionality
    for (let button of deleteButtons) {
        button.addEventListener("click", (e) => {
            let commentId = e.target.getAttribute("comment_id");
            console.log("Delete button clicked for comment:", commentId);
            
            // Get deleteConfirm again (in case it was created dynamically)
            const deleteConfirmBtn = document.getElementById("deleteConfirm");
            if (deleteConfirmBtn) {
                deleteConfirmBtn.href = `/${slug}/delete_comment/${commentId}/`;
                console.log("Delete link set to:", deleteConfirmBtn.href);
            }
            
            if (deleteModal) {
                console.log("Showing modal");
                deleteModal.show();
            } else {
                console.error("Modal not available, using fallback");
                if (confirm("Are you sure you want to delete this comment? This action cannot be undone.")) {
                    window.location.href = `/${slug}/delete_comment/${commentId}/`;
                }
            }
        });
    }
    
    console.log("Script initialization complete");
});*/




/*document.addEventListener("DOMContentLoaded", function () {
    console.log("Document is ready!");

    // Getting the elements
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

    // Extract the slug from the URL path
    const slug = window.location.pathname.split('/')[2];

    // Edit button functionality
    for (let button of editButtons) {
        button.addEventListener("click", (e) => {
            let commentId = e.target.getAttribute("comment_id");
            let commentContent = document.getElementById(`comment${commentId}`).innerText;
            commentText.value = commentContent;
            submitButton.innerText = "Update";
            commentForm.setAttribute("action", `/edit_comment/${commentId}`);
        });
    }

    // Delete button functionality
    for (let button of deleteButtons) {
        button.addEventListener("click", (e) => {
            let commentId = e.target.getAttribute("comment_id");
            deleteConfirm.href = `/${slug}/delete_comment/${commentId}`;
            deleteModal.show();
        });
    }
});*/



document.addEventListener("DOMContentLoaded", function() {
    console.log("Document is ready!");
    
// Getting the elements from the HTML DOM (Document Object Model)

// Get all elements with class "btn-edit" and store them in a HTMLCollection
// These are the edit buttons for comments
const editButtons = document.getElementsByClassName("btn-edit");

// Get the element with ID "id_body" which is the comment textarea field
// This is where users type their comments
const commentText = document.getElementById("id_body");

// Get the element with ID "commentForm" which is the form container
// This is the entire form that wraps the comment submission
const commentForm = document.getElementById("commentForm");

// Get the element with ID "submitButton" which is the form submit button
// This button submits the comment form
const submitButton = document.getElementById("submitButton");

// Create a new Bootstrap Modal instance for the delete confirmation dialog
// Gets the element with ID "deleteModal" and initializes it as a Bootstrap modal
const deleteModal = new bootstrap.Modal(document.getElementById("deleteModal"));

// Get all elements with class "btn-delete" and store them in a HTMLCollection
// These are the delete buttons for comments
const deleteButtons = document.getElementsByClassName("btn-delete");

// Get the element with ID "deleteConfirm" which is the final delete confirmation link
// This is the link that actually performs the deletion when clicked
const deleteConfirm = document.getElementById("deleteConfirm");

// Extract the slug from the current URL path
// window.location.pathname gets the path part of URL (e.g., "/news/my-article-slug/")
// .split('/') splits the path into an array using '/' as delimiter
// [2] gets the third element (index 2) which should be the slug
const slug = window.location.pathname.split('/')[2];

// Edit button functionality - loop through all edit buttons and add event listeners
// This section handles editing existing comments
for (let button of editButtons) {
  // Add a click event listener to each edit button
  button.addEventListener("click", (e) => {
    
    // Get the comment ID from the button's custom attribute "comment_id"
    // e.target refers to the button that was clicked
    let commentId = e.target.getAttribute("comment_id");
    
    // Find the comment content by constructing the ID "comment" + commentId
    // Get the text content of that element (the actual comment text)
    let commentContent = document.getElementById(`comment${commentId}`).innerText;
    
    // Put the existing comment text into the comment textarea
    // This pre-fills the form with the current comment for editing
    commentText.value = commentContent;
    
    // Change the submit button text from "Submit" to "Update"
    // This gives visual feedback that we're in edit mode
    submitButton.innerText = "Update";
    
    // Change the form's action attribute to point to the edit endpoint
    // This makes the form submit to the edit URL instead of create new comment
    //commentForm.setAttribute("action", `edit_comment/${commentId}`);
    commentForm.setAttribute("action", `/post/${slug}/edit_comment/${commentId}/`);

    // Note: There's a commented out line that would do the same thing
    // Form.setAttribute("action", `edit_comment/${commentId}`);
    
  });
}

// Delete button functionality - loop through all delete buttons and add event listeners
// This section handles deleting existing comments
for (let button of deleteButtons) {
  // Add a click event listener to each delete button
  button.addEventListener("click", (e) => {
    
    // Get the comment ID from the button's custom attribute "comment_id"
    // e.target refers to the delete button that was clicked
    let commentId = e.target.getAttribute("comment_id");
    
    // Set the href attribute of the delete confirmation link
    // This constructs the URL: /slug/delete_comment/commentId
    // When user confirms, this link will be followed to actually delete the comment
    deleteConfirm.href = `/${slug}/delete_comment/${commentId}`;
    
    // Show the Bootstrap modal dialog for delete confirmation
    // This displays the "Are you sure?" popup to the user
    deleteModal.show();
    
  });
}
});