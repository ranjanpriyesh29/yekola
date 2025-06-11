import { addDays, format, isSameDay } from "date-fns";
import { twMerge } from "tailwind-merge";
import React, { useState } from "react";

const TOTAL_DAYS = 13;
const CENTER_INDEX = Math.floor(TOTAL_DAYS / 2);

const HeaderCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const days = Array.from({ length: TOTAL_DAYS }, (_, i) =>
    addDays(new Date(), i - CENTER_INDEX)
  );

  const getBaseStyle = (distance) => {
    if (distance === 0) return "bg-black text-white";
    if (distance <= 2) return "bg-white text-black";
    return "bg-gray-200 text-gray-500";
  };

  const getOpacity = (distance) => {
    if (distance === 0) return "opacity-100";
    if (distance <= 2) return "opacity-90";
    return "opacity-50";
  };

  const getWeekdayTextClass = (distance, sameDay) => {
    if (sameDay) return "after:active-after-border font-bold";
    return distance <= 2 ? "text-black" : "text-gray-300";
  };

  return (
    <div className="flex flex-col gap-5">
      <p className="px-3 text-sm font-bold">
        {format(new Date(), "dd LLL yyyy")}
      </p>
      <div className="flex overflow-x-auto space-x-2 pb-4">
        {days.map((day, index) => {
          const distance = Math.abs(index - CENTER_INDEX);
          const sameDay = isSameDay(day, selectedDate);

          const dateBaseClass =
            "bg-gray-100 px-2 py-2 rounded-full flex items-center justify-center hover:bg-gray-200 cursor-pointer transition text-sm";
          const dateStyleClass = sameDay
            ? "bg-black text-white hover:bg-black"
            : `${getBaseStyle(distance)} ${getOpacity(distance)}`;

          const dateClass = twMerge(dateBaseClass, dateStyleClass);
          const weekClass = twMerge(
            "relative text-sm",
            getWeekdayTextClass(distance, sameDay)
          );

          return (
            <button
              key={day.toISOString()}
              onClick={() => setSelectedDate(day)}
              className="flex flex-col items-center px-3 py-3 min-w-[60px] font-medium"
            >
              <span className={dateClass}>{format(day, "dd")}</span>
              <span className={weekClass}>{format(day, "EEE")}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default HeaderCalendar;
