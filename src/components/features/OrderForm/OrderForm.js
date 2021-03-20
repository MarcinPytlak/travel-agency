import React from 'react';
import PropTypes from 'prop-types';
//import styles from './OrderForm.scss';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import Button from '../../common/Button/Button';
import settings from '../../../data/settings';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';


const sendOrder = (options, tripCost, tripName, tripId, countryCode) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    tripName: tripName,
    tripId: tripId,
    countryCode: countryCode,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };
  console.log(options);
  if(options.name == '' || options.contact ==''){
    return alert('please fill neccesary options( name or contact');
  }
  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};

const OrderForm = ({tripCost, options, setOrderOption, tripName, tripId, countryCode}) => (
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
    <Button onClick={() => sendOrder(options, tripCost, tripName, tripId, countryCode)}>Order now!</Button>
  </Row>

);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  tripName: PropTypes.string,
  tripId: PropTypes.string,
  countryCode: PropTypes.string,
};

export default OrderForm;