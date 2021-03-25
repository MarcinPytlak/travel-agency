import React from 'react';
import PropTypes from 'prop-types';
import styles from './HappyHourAd.scss';

class HappyHourAd extends React.Component {
  constructor(){
    super();
      
    /* run this.forceUpdate() every second */

    setInterval(() => {
      this.forceUpdate();}, 1000);
  }


  getCountdownTime(){
    const currentTime = new Date();
    const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));
    
    if(currentTime.getUTCHours() >= 12){
      nextNoon.setUTCDate(currentTime.getUTCDate()+1);
    }
    return Math.round((nextNoon.getTime() - currentTime.getTime())/1000);
  }
  getTimeForPromotion() {
    if(this.getCountdownTime() > 23 * 60 * 60){
      return this.props.promoDescription;
    } else {
      return null;
    }
  }
  render () {
    const {headerText} = this.props;
    const time = this.getCountdownTime();

    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{headerText}</h3>
        <div className={styles.promoDescription}>{this.getTimeForPromotion(time) 
        || 
        this.getCountdownTime()}

        </div>
      </div>
    );
  }
}

HappyHourAd.propTypes = {
  headerText: PropTypes.string,
  promoDescription : PropTypes.any,
};

export default HappyHourAd;