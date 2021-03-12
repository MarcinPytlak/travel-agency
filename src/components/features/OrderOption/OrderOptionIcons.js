import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import Icon from '../../common/Icon/Icon';
import {formatPrice} from '../../../utils/formatPrice';

const OrderOptionIcons = ({values, setOptionValue, required }) => (
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
        className={styles.icon}
        key={value.id}
        onClick={event => setOptionValue(event.currentTarget.id)} >
        <Icon name={value.icon} /> 
        <option key={value.id} value={value.id}>{value.name} ({formatPrice(value.price)})</option>
        
      </ div>
    ))}
  </div>
);

OrderOptionIcons.propTypes ={
  values: PropTypes.array,
  setOptionValue: PropTypes.func,
  required: PropTypes.bool,
};

export default OrderOptionIcons;