import moment from 'moment';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useAlert } from 'react-alert';
import { useRecoilState } from 'recoil';
import { orderState } from '../../states/orders';
import { scheduleState } from '../../states/schedule';
import {
  DAYS,
  isProductAvailableByDate,
  removeItemAtIndex,
} from '../../utils/util';

const CalendarReservation = ({ availabilities = [], products, className }) => {
  const [schedule, setSchedule] = useRecoilState(scheduleState);
  const [orders, setOrders] = useRecoilState(orderState);
  const alert = useAlert();

  useEffect(() => {
    if (availabilities?.length > 0 && !schedule?.date) {
      setSchedule(availabilities[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [availabilities]);

  const handleSelectDate = (index) => {
    setSchedule({
      ...availabilities[index],
    });
    // scan orders for not available on that date
    if (orders && orders.length > 0) {
      const noLongerAvailOrders = orders.filter((order) => {
        const prod = findProductByOrder(order);
        return !isProductAvailableByDate(prod, availabilities[index].date);
      });
      let newOrders = [];
      noLongerAvailOrders.forEach((order) => {
        newOrders = [
          ...removeItemAtIndex(
            orders,
            orders.findIndex((ord) => ord.label === order.label)
          ),
        ];
        alert.show(`${order.label} is Sold Out on this date.`);
      });
      setOrders(newOrders);
    }
  };

  const findProductByOrder = (order) => {
    return products.find((product) => product.name === order.label);
  };

  const getDay = (date) => {
    return DAYS[moment(date).day()];
  };

  return (
    <div className={className}>
      <p className="text-left font-semibold text:lg md:text-xl  mb-2 text-white">
        Choose Delivery Date
      </p>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        {availabilities.map((avail, index) => (
          <div
            data-cy={`test-avail-${avail?.date}-id`}
            key={`avail-${avail?.date}`}
            className={`p-2 bg-slate-400 shadow-lg cursor-pointer ${
              avail?.date !== schedule?.date ? 'hover:bg-slate-300' : ''
            }  ${avail?.date === schedule?.date ? 'bg-slate-300' : ''}`}
            onClick={() => handleSelectDate(index)}
          >
            <div className="text-center font-bold text-sm md:text-lg uppercase">
              {avail?.date}
            </div>
            <div className="text-center text-sm uppercase">
              {getDay(avail?.date)}
            </div>
            <div className="text-center text-sm">
              {avail?.range?.start}-{avail?.range?.end}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

CalendarReservation.propTypes = {
  availabilities: PropTypes.array,
  className: PropTypes.string,
  products: PropTypes.array,
};

export default CalendarReservation;
