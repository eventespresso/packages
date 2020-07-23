const computeEndOnDate = (data, rruleObj) => {
  if (!rruleObj.until) {
    return data.end.date;
  }

  return rruleObj.until;
};

export default computeEndOnDate;
