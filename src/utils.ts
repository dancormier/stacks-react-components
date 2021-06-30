import * as dayjs from 'dayjs';

const getDaysInWeeksArr = ({
  daysInMonth,
  startDayOfWeek,
}: {
  daysInMonth: number;
  startDayOfWeek: number;
}): any => {
  const daysArr = [...Array(daysInMonth).keys()].map(i => i + 1);
  let weeksArr: any[] = [];

  // eslint-disable-next-line array-callback-return
  daysArr.map((day: number) => {
    const week = Math.floor((day + startDayOfWeek) / 7);
    const weekExists = weeksArr.length >= week + 1;
    if (weekExists) {
      weeksArr[week].push(day);
    } else {
      weeksArr = [...weeksArr, [day]];
    }
  });

  return weeksArr;
};

const getDateInfo = (
  date: string | number | Date | dayjs.Dayjs,
): {
  date: string | number | Date | dayjs.Dayjs;
  year: number;
  month: number;
  day: number;
  daysInMonth: number;
  datesInWeeks: any[];
  startDayOfWeek: number;
} => {
  const d = dayjs(date);
  const year = d.year();
  const month = d.month() + 1;
  const day = d.date();
  const daysInMonth = d.daysInMonth();
  const startDayOfWeek = dayjs(`${year}-${month}`).day();
  const datesInWeeks = getDaysInWeeksArr({ daysInMonth, startDayOfWeek });

  return {
    date: dayjs(date),
    year,
    month,
    day,
    daysInMonth,
    datesInWeeks,
    startDayOfWeek,
  };
};

const isDateSelected = ({
  selectedDate,
  date,
}: {
  selectedDate: any;
  date: any;
}): boolean => {
  const monthMatch = selectedDate.month === date.month;
  const yearMatch = selectedDate.year === date.year;
  const dayMatch = selectedDate.day === date.day;
  return monthMatch && yearMatch && dayMatch;
};

export { getDateInfo, getDaysInWeeksArr, isDateSelected };
