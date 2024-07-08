import html2canvas from 'html2canvas';
import { makeDateFormat } from './getToday';

const saveImage = () => {
  const target = document.getElementById('download');
  if (!target)
    return alert('사진 저장에 실패하였습니다. 다시 시도하여 주시기 바랍니다.');

  html2canvas(target).then((canvas) => {
    const link = document.createElement('a');
    const todayDate = makeDateFormat();
    document.body.appendChild(link);
    link.href = canvas.toDataURL('image/png');
    link.download = `candy-luck_${todayDate}.png`;
    link.click();
    document.body.removeChild(link);
  });
};

export default saveImage;
