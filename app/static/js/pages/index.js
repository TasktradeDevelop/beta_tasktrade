// index.html에 한정되어 직접 관련된 모든 js function

// start on loading time
// works for supports section elements
// index.js - Handles modals for support-related content
document.addEventListener("DOMContentLoaded", function () {
    const userGuide = document.getElementById("user-guide");
    const faqInquiry = document.getElementById("faq-inquiry");

    async function loadSupportContent(type) {
        try {
            if (type === "customer-center") {
                userGuide.classList.remove("hidden");
                faqInquiry.classList.remove("hidden");
                modalUtils.openModal("고객센터", "고객센터 정보를 확인하세요.");
            } else {
                userGuide.classList.add("hidden");
                faqInquiry.classList.add("hidden");

                const response = await fetch(`/static/supports/${type}.txt`);
                if (!response.ok) throw new Error("File not found");
                const text = await response.text();
                modalUtils.openModal(getTitle(type), text);
            }
        } catch (error) {
            modalUtils.openModal("Error", "지원 내용을 불러오지 못했습니다.");
        }
    }

    function getTitle(type) {
        const titles = {
            "terms": "이용 약관",
            "personal-info": "개인정보 보호정책",
            "company-info": "회사 정보",
            "customer-center": "고객센터"
        };
        return titles[type] || "지원 문서";
    }

    document.querySelectorAll("#support-links li").forEach((item) => {
        item.addEventListener("click", function () {
            const type = item.getAttribute("data-type");
            loadSupportContent(type);
        });
    });

    // External Support Links Handling
    function handleSupportClick(endpoint) {
        fetch(`/supports/${endpoint}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            window.location.href = `/supports/${endpoint}`;
        })
        .catch(error => {
            console.error(`Error occurred while navigating to ${endpoint}:`, error);
            alert(`Failed to navigate to ${endpoint}. Please try again.`);
        });
    }

    document.getElementById("user-guide").addEventListener("click", () => handleSupportClick('user-guide'));
    document.getElementById("faq-inquiry").addEventListener("click", () => handleSupportClick('faq-n-inquiry'));
    document.getElementById("notice-section").addEventListener("click", () => handleSupportClick('notice-section'));
    document.getElementById("inquiry-section").addEventListener("click", () => handleSupportClick('faq-n-inquiry'));
});


// link to my-profile.html
function toMyProfile() {
    fetch('/users/profile', {
        method: 'GET', // or 'POST', depending on your endpoint
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Navigate to the profile page
        window.location.href = '/users/profile';
    })
    .catch(error => {
        console.error('Error occurred while navigating to profile:', error);
        alert('Failed to navigate to profile. Please try again.');
    });
}

function toExcWith() {
    fetch('/coin', {
        method: 'GET', // or 'POST', depending on your endpoint
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Navigate to the profile page
        window.location.href = '/coin';
    })
    .catch(error => {
        console.error('Error occurred while navigating to exchange-withdrawal:', error);
        alert('Failed to navigate to exchange-withdrawal page. Please try again.');
    });
}

function login() {
    fetch('/auth/login', {
        method: 'GET', // or 'POST', depending on your endpoint
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Navigate to the profile page
        window.location.href = '/auth/login';
    })
    .catch(error => {
        console.error('Error occurred while navigating to login page:', error);
        alert('Failed to navigate to login page. Please try again.');
    });
}

function signup() {
    fetch('/auth/signup', {
        method: 'GET', // or 'POST', depending on your endpoint
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Navigate to the profile page
        window.location.href = '/auth/signup';
    })
    .catch(error => {
        console.error('Error occurred while navigating to signup page:', error);
        alert('Failed to navigate to signup page. Please try again.');
    });
}

function toMissionUpload() {
    fetch('/mission/upload', {
        method: 'GET', // or 'POST', depending on your endpoint
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Navigate to the profile page
        window.location.href = '/mission/upload';
    })
    .catch(error => {
        console.error('Error occurred while navigating to mission-upload page:', error);
        alert('Failed to navigate to mission-upload page. Please try again.');
    });
}

function toMyMission() {
    fetch('/mission/my', {
        method: 'GET', // or 'POST', depending on your endpoint
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Navigate to the profile page
        window.location.href = '/mission/my';
    })
    .catch(error => {
        console.error('Error occurred while navigating to my-mission page:', error);
        alert('Failed to navigate to my-mission page. Please try again.');
    });
}

function missionsMain() {
    fetch('/mission', {
        method: 'GET', // or 'POST', depending on your endpoint
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Navigate to the profile page
        window.location.href = '/mission';
    })
    .catch(error => {
        console.error('Error occurred while navigating to main-mission page:', error);
        alert('Failed to navigate to main-mission page. Please try again.');
    });
}

function toSearchAuth() {
    fetch('/auth/search', {
        method: 'GET', // or 'POST', depending on your endpoint
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Navigate to the profile page
        window.location.href = '/auth/search';
    })
    .catch(error => {
        console.error('Error occurred while navigating to search-auth page:', error);
        alert('Failed to navigate to search-auth page. Please try again.');
    });
}
