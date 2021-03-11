import React from 'react';
import styles from './OrderSummary.scss';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-flexbox-grid';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';


const OrderSummary = ({cost, options}) => (
  <Row>
    <Col xs={12}>
      <h2 className={styles.component}>Total:</h2>
      { formatPrice(calculateTotal(cost, options)) }
    </Col>
  </Row>
);
OrderSummary.propTypes = {
  cost: PropTypes.string,
  options: PropTypes.object,
};
export default OrderSummary;