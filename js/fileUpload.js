document.getElementById("file").addEventListener("change", function () {
  const fileDisplay = document.querySelector(".file-display");
  if (this.files.length > 0) {
    fileDisplay.value = this.files[0].name; // 선택된 파일명 표시
  } else {
    fileDisplay.value = "선택된 파일 없음"; // 파일이 없으면 기본 메시지 표시
  }
});
