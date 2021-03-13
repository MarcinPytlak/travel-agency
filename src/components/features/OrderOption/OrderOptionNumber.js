import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOptionNumber = ({currentValue, setOptionValue, ...limits }) => (
  <div className={styles.number}>
    <input className={styles.inputSmall} 
      type='number' 
      value={currentValue} 
      min={limits.limits.min} 
      max={limits.limits.max} 
      onChange={event => setOptionValue(event.currentTarget.value)} />
  </div>
);

OrderOptionNumber.propTypes ={
  value: PropTypes.number,
  limits: PropTypes.object,
  currentValue: PropTypes.node,
  setOptionValue: PropTypes.func,
};

export default OrderOptionNumber;