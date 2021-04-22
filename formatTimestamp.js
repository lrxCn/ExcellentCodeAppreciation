/**
 * 时间戳转换
 * @param {*} timesamp 时间戳
 * @param {*} fomrat YYYY-MM-DD hh:mm:ss
 * @param {*} sign {YYYY:yyyy}
 */
const formatTimestamp = (timesamp, fomrat, sign) => {
  const { YYYY = 'YYYY', MM = 'MM', DD = 'DD', hh = 'hh', mm = 'mm', ss = 'ss' } = sign || {};
  const date = new Date(timesamp);

  const source = [
    { origin: YYYY, value: date.getFullYear(), num: 4 },
    { origin: MM, value: date.getMonth() + 1, num: 2 },
    { origin: DD, value: date.getDate(), num: 2 },
    { origin: hh, value: date.getHours(), num: 2 },
    { origin: mm, value: date.getMinutes(), num: 2 },
    { origin: ss, value: date.getSeconds(), num: 2 },
  ];

  return source.reduce((total, { origin, value, num }) => total.replace(
    origin,
    `${value}`.padStart(num, '0')
  ), fomrat);
};



/* =====================test===================== */
console.log(
  formatTimestamp(Date.now(), 'YYYY-MM-DD,DFASFJASIOFOJO,hh:mm:ss', null),
  formatTimestamp(Date.now(), 'yyyy-MM-DD,DFASFJASIOFOJO,hh:mm:ss', { YYYY: 'yyyy' })
);
