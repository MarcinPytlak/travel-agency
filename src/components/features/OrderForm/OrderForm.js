import React from 'react';
import PropTypes from 'prop-types';
//import styles from './OrderForm.scss';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';

const OrderForm = ({tripCost, options, setOrderOption}) => (
  <Row>
    {pricing.map(price => (
      <Col key={price.id} md={4}>
        <OrderOption {...price} 
          currentValue={options[price.id]}
          setOrderOption={setOrderOption}
          
        />
      </Col>
    ))}
    <Col xs={12}>
      <OrderSummary 
        cost={tripCost}
        options={options} />
    </Col>
  </Row>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
};

export default OrderForm;