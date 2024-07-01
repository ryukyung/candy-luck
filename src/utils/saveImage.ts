import html2canvas from 'html2canvas';

const saveImage = () => {
  const target = document.getElementById('download');
  if (!target) {
    return alert('사진 저장 실패');
  }
  html2canvas(target).then((canvas) => {
    const link = document.createElement('a');
    document.body.appendChild(link);
    link.href = canvas.toDataURL('image/png');
    link.download = 'today-luck.png';
    link.click();
    document.body.removeChild(link);
  });
};

export default saveImage;
