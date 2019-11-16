export const getTimeString = () => {
  let timeStringArray = new Date().toLocaleTimeString().split(' ');
  let [hour, min] = timeStringArray[0].split(':');
  return  hour + ':' + min + ' ';
}

export const getDateString = () => {
  let dateString = new Date().toDateString().split(' ').reduce((acc, current, index) => {
    if (index !== 3) {
      acc += current + ' ';
    }
    return acc;
  },'')

  return dateString;
}

export const isMobile = () => {
  return window.innerWidth <= 500 ? true : false;
}