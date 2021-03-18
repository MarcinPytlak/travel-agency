import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOptionText = ({id, setOptionValue}) => (
  <div className={styles.component}>

    <input 
      type='text'
      key={id}
      placeholder={'enter data here...'}
      onChange={event => setOptionValue(event.currentTarget.value)}
    />

  </div>
);

OrderOptionText.propTypes ={
  id: PropTypes.string,
  setOptionValue: PropTypes.func,
  name: PropTypes.string,
};

export default OrderOptionText;