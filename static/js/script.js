/* jshint esversion: 6 */
/* jshint esversion: 10 */
/* global bootstrap */
"use strict";
document.addEventListener("DOMContentLoaded", function () {
    // Wait for Bootstrap to be available before initializing the script
    function waitForBootstrap(callback, maxAttempts = 50) {
        let attempts = 0;

        function checkBootstrap() {
            attempts++;

            // If Bootstrap is loaded, proceed
            if (typeof bootstrap !== "undefined" && bootstrap.Modal) {
                callback();
            } else if (attempts < maxAttempts) {
                // Retry after a short delay
                setTimeout(checkBootstrap, 100);
            } else {
                // Proceed even if Bootstrap isn't available (fallback will be used)
                callback();
            }
        }

        checkBootstrap();
    }

    // Main script logic
    function initializeScript() {
        const currentPath = window.location.pathname;

        // Only run on post detail pages (e.g., /slug/post-title/)
        if (currentPath === '/' || !currentPath.includes('/') || currentPath.split('/').length < 3) return;

        // DOM elements
        const editButtons = document.getElementsByClassName("btn-edit");
        const commentText = document.getElementById("id_body");
        const commentForm = document.getElementById("commentForm");
        const submitButton = document.getElementById("submitButton");
        const deleteModalElement = document.getElementById("deleteModal");
        const deleteButtons = document.getElementsByClassName("btn-delete");
        const deleteConfirm = document.getElementById("deleteConfirm");
        const slug = window.location.pathname.split('/')[2]; // Extract slug from URL

        // Exit if essential form elements are missing
        if (!commentText || !commentForm || !submitButton) return;

        let deleteModal = null;

        // Initialize Bootstrap modal if available
        if (deleteModalElement && typeof bootstrap !== "undefined" && bootstrap.Modal) {
            setTimeout(() => {
                try {
                    deleteModal = new bootstrap.Modal(deleteModalElement, {
                        backdrop: "static",
                        keyboard: false,
                    });
                } catch (e) {
                    // Fallback will be used if modal setup fails
                }
            }, 100);
        }

        // Edit comment functionality
        for (let i = 0; i < editButtons.length; i++) {
            const button = editButtons[i];

            button.addEventListener("click", (e) => {
                let commentId = e.target.getAttribute("comment_id");
                if (!commentId) return;

                const commentElement = document.getElementById(`comment${commentId}`);
                if (!commentElement) return;

                // Populate form with existing comment text
                let commentContent = commentElement.innerText;
                commentText.value = commentContent;

                // Change button to 'Update'
                submitButton.innerText = "Update";

                // Set form action to the appropriate edit endpoint
                commentForm.setAttribute("action", `/${slug}/edit_comment/${commentId}`);
            });
        }

        // Delete comment functionality
        for (let i = 0; i < deleteButtons.length; i++) {
            const button = deleteButtons[i];

            button.addEventListener("click", (e) => {
                let commentId = e.target.getAttribute("comment_id");
                if (!commentId) return;

                const deleteUrl = `/${slug}/delete_comment/${commentId}`;

                // Fallback confirm dialog if modal isn't available
                function showFallbackConfirm() {
                    if (confirm("Are you sure you want to delete this comment? This action cannot be undone.")) {
                        window.location.href = deleteUrl;
                    }
                }

                // If modal is available, use it
                if (deleteConfirm && deleteModal) {
                    deleteConfirm.href = deleteUrl;

                    setTimeout(() => {
                        try {
                            deleteModal.show();
                        } catch {
                            showFallbackConfirm();
                        }
                    }, 150);
                } else {
                    showFallbackConfirm();
                }
            });
        }
    }

    // Wait for Bootstrap and then run the main logic
    waitForBootstrap(initializeScript);
});
