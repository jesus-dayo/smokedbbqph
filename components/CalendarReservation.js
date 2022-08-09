import { useState } from 'react';
import FormContainer from './FormContainer';

const CalendarReservation = ({ className }) => {
  const availDateAndTime = [
    {
      date: 'July 1',
      day: 'Saturday',
      time: ['7pm', '8pm'],
      slots: 2,
    },
    {
      date: 'July 2',
      day: 'Sunday',
      time: ['7pm', '8pm'],
      slots: 1,
    },
    {
      date: 'July 11',
      day: 'Saturday',
      time: ['7pm', '8pm'],
      slots: 1,
    },
    {
      date: 'July 12',
      day: 'Sunday',
      time: ['7pm', '8pm'],
      slots: 1,
    },
  ];

  return (
    <FormContainer className={className}>
      <p className="text-center font-bold text-xl uppercase mb-2">
        Choose Delivery Date
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {availDateAndTime.map((avail) => (
          <div className="p-2 bg-slate-100 shadow-lg">
            <div className="text-left font-bold text-xl uppercase">
              {avail.date}
            </div>
            <div className="text-left text-lg uppercase">{avail.day}</div>
            <select className="rounded-md text-lg px-3 py-2 mb-1 border-2 border-gray-200 w-full">
              {avail.time.map((time) => (
                <option value={time}>{time}</option>
              ))}
            </select>
            <div className="text-sm text-red-400">
              slots remaining: {avail.slots}
            </div>
          </div>
        ))}
      </div>
    </FormContainer>
  );
};

export default CalendarReservation;
