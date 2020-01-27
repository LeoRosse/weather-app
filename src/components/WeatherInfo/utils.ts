export const convertTimeStampToDate = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  const hour = date.getHours();
  const minutes = '0' + date.getMinutes();
  return hour + ':' + minutes.substr(-2);
};
