// 제출 이벤트를 받는다 (이벤트 핸들링)
const form = document.getElementById("form");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // 기본 기능 차단

    // 올바른 ID로 값 가져오기
    let userId = document.getElementById("userId").value;
    let userPw1 = document.getElementById("pw1").value;
    let userPw2 = document.getElementById("pw2").value;
    let userName = document.getElementById("userName").value;
    let userPhone = document.getElementById("phone").value;
    let userGender = document.querySelector('input[name="gender"]:checked').value;
    let userEmail = document.getElementById("email").value;

    // 입력값 검증
    if (userId.length < 6) {
        alert("아이디가 너무 짧습니다. 6자 이상 입력해주세요.");
        return;
    }

    if (userPw1.length < 8) {
        alert("비밀번호가 너무 짧습니다. 8자 이상 입력해주세요.")
        return;
    }
    if (userPw1 !== userPw2) {
        alert("비밀번호가 일치하지 않습니다.");
        return;
    }
    

    // 가입 환영 인사
    alert(`<p>${userId}님 환영합니다!</p>`)
    window.location.href = "kream.html"
});
