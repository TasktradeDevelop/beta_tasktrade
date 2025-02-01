// modal 관련 export functions

document.addEventListener("DOMContentLoaded", function () {
    const modalOverlay = document.getElementById("modal-overlay");
    const modalContent = document.getElementById("modal-content");
    const modalTitle = document.querySelector("#modal-content h2");
    const modalText = document.querySelector("#modal-content p");
    const userGuide = document.getElementById("user-guide");
    const faqInquiry = document.getElementById("faq-inquiry");
    const closeModalButton = document.getElementById("close-modal");

    // Function to open the modal and load content
    async function openModal(type) {
        modalOverlay.classList.remove("hidden");

        // Fetch the content from the corresponding text file
        try {
            if (type == "customer-center") {
                userGuide.classList.remove("hidden");
                faqInquiry.classList.remove("hidden");
                modalText.classList.add("hidden");
            }
            else {
                userGuide.classList.add("hidden");
                faqInquiry.classList.add("hidden");
                modalText.classList.remove("hidden");

                const response = await fetch(`/static/supports/${type}.txt`);
                if (!response.ok) throw new Error("File not found");
                const text = await response.text();
                modalText.textContent = text;
            }
            modalTitle.textContent = getTitle(type);
        } catch (error) {
            modalTitle.textContent = "Error";
            modalText.textContent = "지원 내용을 불러오지 못했습니다.";
        }
    }

    // Function to generate proper title based on data-type
    function getTitle(type) {
        const titles = {
            "terms": "이용 약관",
            "personal-info": "개인정보 보호정책",
            "company-info": "회사 정보",
            "customer-center": "고객센터"
        };
        return titles[type] || "지원 문서";
    }

    // Function to close the modal
    function closeModal() {
        modalOverlay.classList.add("hidden");
    }

    // Attach event listeners to support links
    document.querySelectorAll("#support-links li").forEach((item) => {
        item.addEventListener("click", function () {
            const type = item.getAttribute("data-type");
            openModal(type);
        });
    });

    // Close modal when clicking outside or on close button
    closeModalButton.addEventListener("click", closeModal);
    modalOverlay.addEventListener("click", function (event) {
        if (event.target === modalOverlay) {
            closeModal();
        }
    });
});
