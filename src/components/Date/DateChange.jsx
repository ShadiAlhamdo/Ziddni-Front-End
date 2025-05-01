const DateChange = ({ date }) => {
  const formatDate = (date) => {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0'); // الشهر يبدأ من 0
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <div className="date-info">
      {formatDate(date)}
    </div>
  );
};
  
  export default DateChange;
  