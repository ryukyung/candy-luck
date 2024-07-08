const copyUrl = () => {
  navigator.clipboard.writeText(window.location.href);
  // FIXME: alert() -> library
  alert('클립보드에 저장되었습니다.');
};
export default copyUrl;
