import OrderForm from './OrderForm';
import {connect} from 'react-redux';
import {getOrderOptions} from '../../../redux/orderRedux';
import {setOrderOption} from '../../../redux/orderRedux';

const mapStateToProps = state => ({
  options: getOrderOptions(state),
});

const mapDispatchToProps = dispatch => ({
  setOrderOption: () =>dispatch(setOrderOption()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
