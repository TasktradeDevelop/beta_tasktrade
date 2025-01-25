// index.html에 한정되어 직접 관련된 모든 js function

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
