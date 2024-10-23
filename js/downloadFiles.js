function downloadFile(fileName) {
  const filePath = `../files/${encodeURIComponent(fileName)}`;
  window.location.href = filePath;
}
