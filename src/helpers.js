export function isNumber(char) {
  return !isNaN(parseFloat(char));
}

export function getNormalDateTime() {
  const now = new Date();
  const td = (val) => ('0' + val).slice(-2);
  
  return `${td(now.getDate())}-${td(now.getMonth() + 1)}-${now.getFullYear()} ` +
    `${td(now.getHours())}:${td(now.getMinutes())}:${td(now.getSeconds())}`;
}