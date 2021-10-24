export const differenceInYearsAndMonths = (startDate: Date, endDate: Date) => {
  const sYear = startDate.getFullYear();
  const sMonth = startDate.getMonth();
  const eYear = endDate.getFullYear();
  const eMonth = endDate.getMonth();

  if (eMonth >= sMonth) {
    const yDiff = eYear - sYear;
    const mDiff = eMonth - sMonth;

    return { years: yDiff, months: mDiff };
  } else {
    const yDiff = eYear - sYear - 1;
    const mDiff = 12 + eMonth - sMonth;

    return { years: yDiff, months: mDiff };
  }
};
