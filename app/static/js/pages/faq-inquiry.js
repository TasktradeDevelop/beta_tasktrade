// faq 및 inquiry에 대한 js function

// Start on loading time
document.addEventListener("DOMContentLoaded", function () {
    const inquiryButton = document.getElementById('inquiry-button');
    const membershipButton = document.getElementById('membership-button');
    const overlay = document.getElementById('overlay');

    inquiryButton.addEventListener('click', () => {
        document.getElementById('inquiry-side').classList.add('open');
        overlay.classList.add('show');
    });

    membershipButton.addEventListener('click', () => {
        document.getElementById('membership-side').classList.add('open');
        overlay.classList.add('show');
    });

    overlay.addEventListener('click', () => {
        document.querySelectorAll('.side-container').forEach(container => container.classList.remove('open'));
        overlay.classList.remove('show');
        document.getElementById('membership-description').textContent = "멤버쉽을 선택하면 설명이 여기에 나타납니다.";
    });
});

function showDescription(text) {
    document.getElementById('membership-description').textContent = text;
}
