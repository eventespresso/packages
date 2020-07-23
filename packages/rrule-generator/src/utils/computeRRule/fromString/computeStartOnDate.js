const computeStartOnDate = (data, rruleObj) => {
  if (!rruleObj.dtstart) {
    return data?.start?.date;
  }

  return rruleObj.dtstart;
};
export default computeStartOnDate;
