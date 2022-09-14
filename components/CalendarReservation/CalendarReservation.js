import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { scheduleState } from '../../states/schedule';
import FormContainer from '../FormContainer/FormContainer';

const CalendarReservation = ({ className }) => {
  const [active, setActive] = useState();
  const [schedule, setSchedule] = useRecoilState(scheduleState);

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

  const handleSelectDate = (index) => {
    setActive(index);
    setSchedule({
      date: availDateAndTime[index].date,
      time: availDateAndTime[index].time[0],
    });
  };

  const handleSelectTime = (e) => {
    setSchedule({
      ...schedule,
      time: e.target.value,
    });
  };
  console.log('schedule', schedule);
  return (
    <FormContainer className={className}>
      <p className="text-left font-bold text:lg md:text-xl uppercase mb-2">
        Choose Delivery Date
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-4">
        {availDateAndTime.map((avail, index) => (
          <div
            key={`avail-${avail.date}-${avail.time}`}
            className={`p-2 bg-slate-100 shadow-lg cursor-pointer ${
              active !== index ? 'hover:bg-teal-100' : ''
            }  ${active === index ? 'bg-teal-100' : ''}`}
            onClick={() => handleSelectDate(index)}
          >
            <div className="text-left font-bold text-lg uppercase">
              {avail.date}
            </div>
            <div className="text-left text-sm uppercase">{avail.day}</div>
            <div className="text-left text-sm">
              <select
                onChange={handleSelectTime}
                className="rounded-md text-sm  text-left px-3 py-2 border-2 border-gray-200 w-8/12"
              >
                {avail.time.map((time) => (
                  <option key={`time-${time}`} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
            <div className="text-xs text-left p-2 text-red-400">
              slots remaining: {avail.slots}
            </div>
          </div>
        ))}
      </div>
    </FormContainer>
  );
};

export default CalendarReservation;
