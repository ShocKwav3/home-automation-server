import moment from 'moment';


const constructString = (method, location, concernedString, targetString) => {
    let resultString = ''

    if(method==='remove'){
        if(location==='end'){
            resultString = targetString.substring(0, targetString.length - concernedString.length);
        }
    }

    return resultString;
}

export const getDateString = (date) => {
    const options = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    };

    return new Date(date).toLocaleDateString('en-US', options);
}

export const getTimeString = (date) => {
    const options = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    };

    return new Date(date).toLocaleDateString('en-US', options).split(', ')[1];
}

export const getHoursDifference = (firsDate, secondDate) => {
  const firstMoment = moment(firsDate);
  const secondMoment = moment(secondDate);
  const duration = moment.duration(secondMoment.diff(firstMoment));

  return Math.floor(duration.asHours());
}

export const addHoursToDate = (date, hours) => new Date(date+1000*60*60*hours).toISOString();

const getTimeNow = () => new Date().toISOString();

const getEpochToIsoDate = (epochTimestamp) => new Date(0).setUTCSeconds(epochTimestamp).toISOString();

export default {
    constructString,
    getDateString,
    getTimeString,
    getHoursDifference,
    addHoursToDate,
    getTimeNow,
    getEpochToIsoDate,
}
