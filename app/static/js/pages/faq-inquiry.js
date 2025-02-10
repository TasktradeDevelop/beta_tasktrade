// faq 및 inquiry에 대한 js function

// Start on loading time
document.addEventListener("DOMContentLoaded", function () {
    const inquiryButton = document.getElementById('inquiryButton');
    const inquiryContainer = document.getElementById('inquiryContainer');

    const membershipButton = document.getElementById('membershipButton');
    const membershipContainer = document.getElementById('membershipContainer');
    const overlay = document.getElementById('overlay');

    inquiryButton.addEventListener('click', () => {
        inquiryContainer.classList.add('open');
        overlay.classList.add('show');
    });

    overlay.addEventListener('click', () => {
        inquiryContainer.classList.remove('open');
        overlay.classList.remove('show');
    });



});
