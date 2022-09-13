function browseData() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const hour = today.getHours();
  const minute = today.getMinutes();
  return {
    year: year,
    month: month,
    date: date,
    fulldate: `${year}${String(month).padStart(2, 0)}${String(date).padStart(2, 0)}`,
    fulltime: `${String(hour).padStart(2, 0)}${String(minute).padStart(2, 0)}`,
    sharpTime: `${String(hour).padStart(2, 0).padEnd(4, 0)}`,
  };
}

export default browseData;
