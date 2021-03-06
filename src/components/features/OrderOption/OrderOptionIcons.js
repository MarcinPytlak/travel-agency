import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import Icon from '../../common/Icon/Icon';
import {formatPrice} from '../../../utils/formatPrice';

const OrderOptionIcons = ({values, setOptionValue, required, currentValue }) => (
  <div className={styles.icon}>
    <div>
      {!required ? 
        <div className={styles.icon}
          onClick={() => setOptionValue('')}>
          <Icon name={'times-circle'} /> 
          <option >{'none'}</option>
        </div>
        : ''
      }
    </div> 
    {values.map(value => (
      < div
        className={value.id == currentValue ? styles.iconActive : styles.icon}
        key={value.id}
        onClick={() => setOptionValue(value.id)} >
        <Icon name={value.icon} /> 
        {value.name}  ({formatPrice(value.price)})
        
      </ div>
    ))}
  </div>
);

OrderOptionIcons.propTypes ={
  values: PropTypes.array,
  setOptionValue: PropTypes.func,
  required: PropTypes.any,
  currentValue: PropTypes.string,
};

export default OrderOptionIcons;