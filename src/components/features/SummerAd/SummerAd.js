import React from 'react';
import PropTypes from 'prop-types';
import styles from './SummerAd.scss';

class SummerAd extends React.Component {
  constructor(){
    super();
    setInterval(() => {
      this.forceUpdate();}, 100000);
  }

  calculateTime(value, currentDate) {
    let nextVacation;
    if(value){
      nextVacation = new Date(Date.UTC(currentDate.getFullYear(), 5 , 21));
    } else {
      nextVacation = new Date(Date.UTC(currentDate.getFullYear() + 1, 5 , 21));
    }
    const distance = nextVacation - currentDate;
    return distance;
  }  

  getCountdownTime(){
    const date = new Date();
    const currentDate = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes()));
    const beforeVacation = Math.floor((this.calculateTime(true, currentDate) / (1000 * 60 * 60 * 24)));
    const afterVacation = Math.floor((this.calculateTime(false, currentDate) / (1000 * 60 * 60 * 24)));
    const daysTillVacation = (currentDate.getUTCMonth()+1 == 9 && currentDate.getUTCDate() > 23) ? 
      afterVacation
      : 
      beforeVacation
  ;

    if(currentDate.getUTCMonth()+1 < 6  
    ||
    currentDate.getUTCMonth()+1 > 9
    ){
      return daysTillVacation;
    } else if(currentDate.getUTCMonth()+1 == 6 && currentDate.getUTCDate() < 21
    ||
    currentDate.getUTCMonth()+1 == 9 && currentDate.getUTCDate() > 23) {
     
      return daysTillVacation;
    } else {
      return null;
    }
  }

  render() {
    const {headerText} = this.props;
    const description = this.getCountdownTime() && (this.getCountdownTime() == 1 ? this.getCountdownTime() + ' day' + headerText: this.getCountdownTime() + ' days' + headerText);
    return (
        
      <div className={styles.component}>
        <h3 className={styles.title}>{description}</h3>
      </div>
    );
  }
}
SummerAd.propTypes = {
  headerText: PropTypes.string,
};
export default SummerAd;