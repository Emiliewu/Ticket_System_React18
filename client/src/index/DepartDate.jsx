import {useMemo} from 'react';
import PropTypes from 'prop-types';
import { h0 } from '../common/fp';
import dayjs from 'dayjs';
import './DepartDate.css';

export default function DepartDate(props) {
    const { time, onClick } = props;

    const h0OfDepart = h0(time);
    const departDate = new Date(h0OfDepart);

    const departDateString = useMemo(() => {
        return dayjs(h0OfDepart).format('YYYY-MM-DD');
    }, [h0OfDepart]);

    const isToday = h0OfDepart === h0;

    const weekString = 
        'Week' + 
        ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satureday'][departDate.getDay()] +
        (isToday ? '(Today)' : '');

  return (
    <div className='depart-date' onClick={onClick}>
        <input type="hidden" name="date" value={departDateString} />
        {departDateString} <span className='depart-week'>{weekString}</span>
    </div>
  );
}

DepartDate.propTypes = {
    time: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
};