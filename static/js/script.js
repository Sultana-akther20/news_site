//getting the elements from the html
const editButtons = document.getElementsByClassName("btn-edit");
const commentText = document.getElementById("id_body");
const commentForm = document.getElementById("commentForm");
const submitButton = document.getElementById("submitButton");
const deleteModal = new bootstrap.Modal(document.getElementById("deleteModal"));
const deleteButtons = document.getElementsByClassName("btn-delete");
const deleteConfirm = document.getElementById("deleteConfirm");
const slug = window.location.pathname.split('/')[2];


//edit button for edit a comment and a update button to show after editing to update the comment 
for (let button of editButtons) {
  button.addEventListener("click", (e) => {
    let commentId = e.target.getAttribute("comment_id");
    let commentContent = document.getElementById(`comment${commentId}`).innerText;
    commentText.value = commentContent;
    submitButton.innerText = "Update";
    commentFormForm.setAttribute("action", `edit_comment/${commentId}`);

   // Form.setAttribute("action", `edit_comment/${commentId}`);
    
  });
}


// delete button for delete a comment and a will ask for confirmation of deletion
for (let button of deleteButtons) {
  button.addEventListener("click", (e) => {
    let commentId = e.target.getAttribute("comment_id");
    deleteConfirm.href = `/${slug}/delete_comment/${commentId}`;
    deleteModal.show();
  });
}