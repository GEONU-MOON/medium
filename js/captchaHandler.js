// 랜덤 문자열 생성 함수
function generateCaptcha() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; // 사용할 문자들
  let captcha = "";
  for (let i = 0; i < 6; i++) {
    // 6자리 문자열 생성
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return captcha;
}

// CAPTCHA 설정
function setCaptcha() {
  const captchaText = document.getElementById("captchaText");
  captchaText.innerText = generateCaptcha();
}

// CAPTCHA 새로고침
document
  .getElementById("refreshCaptcha")
  .addEventListener("click", function (event) {
    event.preventDefault(); // 기본 폼 제출 방지
    setCaptcha(); // 새 CAPTCHA 생성
  });

// 폼 제출 시 CAPTCHA 검증
document.querySelector("form").addEventListener("submit", function (event) {
  const captchaText = document.getElementById("captchaText").innerText;
  const captchaInput = document.getElementById("captchaInput").value;

  if (captchaText !== captchaInput) {
    event.preventDefault(); // 폼 제출 방지
    alert("자동등록방지 문자가 일치하지 않습니다.");
  }
});

// 페이지 로드 시 초기 CAPTCHA 설정
window.onload = setCaptcha;
