const copyUrl = () => {
  const url = window.location.href;
  navigator.clipboard.writeText(url);
  alert('클립보드에 저장되었습니다.');
};
export default copyUrl;
