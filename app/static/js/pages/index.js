// index.html에 한정되어 직접 관련된 모든 js function

// start on loading time
document.addEventListener("DOMContentLoaded", function () {
    const handleSupportClick = (endpoint) => {
        fetch(`/supports/${endpoint}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            // Navigate to the corresponding page
            window.location.href = `/supports/${endpoint}`;
        })
        .catch(error => {
            console.error(`Error occurred while navigating to ${endpoint}:`, error);
            alert(`Failed to navigate to ${endpoint}. Please try again.`);
        });
    };

    document.getElementById("user-guide").addEventListener("click", () => handleSupportClick('user-guide'));
    document.getElementById("faq-inquiry").addEventListener("click", () => handleSupportClick('faq-n-inquiry'));
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
        console.error('Error occurred while navigating to profile:', error);
        alert('Failed to navigate to profile. Please try again.');
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
        console.error('Error occurred while navigating to profile:', error);
        alert('Failed to navigate to profile. Please try again.');
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
        console.error('Error occurred while navigating to profile:', error);
        alert('Failed to navigate to profile. Please try again.');
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
        console.error('Error occurred while navigating to profile:', error);
        alert('Failed to navigate to profile. Please try again.');
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
        console.error('Error occurred while navigating to profile:', error);
        alert('Failed to navigate to profile. Please try again.');
    });
}
