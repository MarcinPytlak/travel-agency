import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionDate = ({setOptionValue, currentValue}) => {

  return (
    <div className={styles.component} >
      <DatePicker placeholderText="click to select data" selected={currentValue} onChange={(date) => setOptionValue(date)} />
    </div>  
  );
};

OrderOptionDate.propTypes ={
  id: PropTypes.string,
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.any,
};

export default OrderOptionDate;