// login page에만 특화된 function 정의

async function loginAccount(event) {
    event.preventDefault();

    const userid = document.getElementById('userid').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/auth/login/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userid, password }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data.message);
            // 로그인 성공 시 메인 페이지로 이동
            window.location.href = '/';
        } else {
            const errorData = await response.json();
            console.error('Login failed:', errorData.message);
            alert('로그인에 실패했습니다. 다시 시도해주세요.');
        }
    } catch (error) {
        console.error('Error occurred during login:', error);
        alert('로그인 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
}
