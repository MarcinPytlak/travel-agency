import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import {formatPrice} from '../../../utils/formatPrice';

const newValueSet = (currentValue, id, checked) => {
  console.log(currentValue, 'id:', id);
  if(checked){
    return [
      ...currentValue,
      id,
    ];
  } else {
    return currentValue.filter(value => value != id);
  }
};

const OrderOptionCheckboxes = ({values, setOptionValue, currentValue}) => (
  <div className={styles.checkboxes}>
    {values.map(value => (
      < label
        key={value.name}
      >
        <input type='checkbox' 
          value={value.id} 
          checked={currentValue.indexOf(value.id) > -1} 
          onChange={event => setOptionValue(newValueSet(currentValue, value.id, event.currentTarget.checked))}
        />
        {value.name}  ({formatPrice(value.price)})        
      </ label>
    ))}
  </div>
);

OrderOptionCheckboxes.propTypes ={
  values: PropTypes.array,
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.array,
};

export default OrderOptionCheckboxes;