import React, { useState, useEffect } from "react";
import { match } from "../../utilities/utilities";
import calendar from "calendar-js";

import { StyledCalItem } from "../../components/Layout/styled-components";

const renderCalItems = calendarItems => {
  return calendarItems.map(day => {
    return (
      <StyledCalItem key={`${day.day}${day.dayName}`}>
        {day.day !== 0 ? (
          <>
            <div>{day.day}</div>
            <div>{day.dayName}</div>
          </>
        ) : null}
      </StyledCalItem>
    );
  });
};

const Calendar = () => {
  const [calendarStuff, updateCalendar] = useState([]);
  const [currentDate, updateDate] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth()
  });

  const getCalendarMap = (givenYear, givenMonth) => {
    const monthObject = calendar().of(givenYear, givenMonth);
    return monthObject.calendar
      .map((day, idx) => {
        return day.map((item, idx) => {
          return {
            day: item,
            dayName: monthObject.weekdaysAbbr[idx]
          };
        });
      })
      .flat();
  };

  const changeMonth = move => {
    let newDate = { ...currentDate };
    let { month, year } = newDate;

    const newMonth = match(move)
      .on(
        move => move === "increment",
        () => {
          match(month)
            .on(month => month === 11, () => 0)
            .otherwise(() => (month += 1));
        }
      )
      .otherwise(() => {
        match(month)
          .on(month => month === 0, () => 11)
          .otherwise(() => (month -= 1));
      });

    console.log("new month: ", newMonth);

    const newYear = match(move)
      .on(
        move => move === "increment",
        () => {
          match(month)
            .on(month => month === 11, () => (year += 1))
            .otherwise(() => year);
        }
      )
      .otherwise(() => {
        match(month)
          .on(month => month === 0, () => (year -= 1))
          .otherwise(() => year);
      });

    newDate.month = newMonth;
    newDate.year = newYear;

    console.log(newDate);

    updateDate(newDate);
  };

  useEffect(() => {
    updateCalendar(getCalendarMap(currentDate.year, currentDate.month));
  }, [currentDate.year, currentDate.month]);

  return (
    <>
      {renderCalItems(calendarStuff)}
      <div onClick={() => changeMonth("increment")}>go up</div>
    </>
  );
};

export default Calendar;
