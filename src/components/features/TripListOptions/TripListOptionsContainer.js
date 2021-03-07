import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import 
{getAllFilters, changeSearchPhrase, addTagPhrase, removeTagPhrase, changeFilter} 
  from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
  addTagPhrase: tag => dispatch(addTagPhrase(tag)),
  removeTagPhrase: tag => dispatch(removeTagPhrase(tag)),
  changeFilter: type => dispatch(changeFilter({type})),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
