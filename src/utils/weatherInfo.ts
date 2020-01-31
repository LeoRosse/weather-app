export const convertTimeStampToDate = (timestamp: number, timezone: number) => {
  const ItalyTimezone = 3600;
  const adjustTimezone = timestamp + timezone - ItalyTimezone;
  const date = new Date(adjustTimezone * 1000);
  const hour = date.getHours();
  const minutes = '0' + date.getMinutes();
  return hour + ':' + minutes.substr(-2);
};
