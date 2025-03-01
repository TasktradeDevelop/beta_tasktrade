// modal.js - Handles modal open/close functions for reuse

document.addEventListener("DOMContentLoaded", function () {
    const modalOverlay = document.getElementById("modal-overlay");
    const modalContent = document.getElementById("modal-content");
    const modalTitle = document.querySelector("#modal-content h2");
    const modalText = document.querySelector("#modal-content p");
    const closeModalButton = document.getElementById("close-modal");

    // Function to open the modal with given title and text content
    function openModal(title, text) {
        modalTitle.textContent = title;
        modalText.textContent = text;
        modalOverlay.classList.remove("hidden");
    }

    // Function to close the modal
    function closeModal() {
        modalOverlay.classList.add("hidden");
    }

    // Close modal when clicking outside or on close button
    closeModalButton.addEventListener("click", closeModal);
    modalOverlay.addEventListener("click", function (event) {
        if (event.target === modalOverlay) {
            closeModal();
        }
    });

    // Export functions for use in other JS files
    window.modalUtils = {
        openModal,
    };
});
