import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOptionText = ({id}) => (
  <div className={styles.component}>

    <input 
      type='text'
      key={id}
      placeholder={'enter data here...'}
    />

  </div>
);

OrderOptionText.propTypes ={
  id: PropTypes.string,
};

export default OrderOptionText;