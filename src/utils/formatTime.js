export const formatTime = argSeconds => {
  if(!argSeconds 
    || 
    typeof argSeconds === 'string' 
    || 
    typeof argSeconds === 'function'
    ||
    argSeconds < 0){
    return null;
  } else {
    let hour = Math.floor(argSeconds / 3600);
    let minute = (argSeconds / 60);
    let minutes = Math.floor(minute % 60);
    let seconds = Math.floor(argSeconds % 60 );
    let minutesString = minutes.toString();
    let secondsString = seconds.toString();
    let hourString = hour.toString();
    let changedMinutes = minutesString.padStart(2 , '0');
    let changeSeconds = secondsString.padStart(2, '0');
    let changedHours = hourString.padStart(2, '0');


    return changedHours + ':' + changedMinutes + ':' + changeSeconds;
  }
};

export default formatTime;