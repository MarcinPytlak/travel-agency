/* SELECTORS */

export const getAllTrips = ({trips}) => trips;

export const getFilteredTrips = ({trips, filters}) => {
  let output = trips;
  // eslint-disable-next-line no-unused-vars
  let from;
  // eslint-disable-next-line no-unused-vars
  let to;

  (typeof filters.duration.from === 'string') ? from = parseInt(filters.duration.from) : from = filters.duration.from; 
  (typeof filters.duration.to === 'string') ? to = parseInt(filters.duration.to) : filters.duration.to;
  // filter by search phrase
  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }
  // TODO - filter by duration
  if(from <= to) {
    output = output.filter(trip => trip.days >= from && trip.days <= to);
  }
  // TODO - filter by tags
  if(filters.tags.length >0) {
    const availableTags = filters.tags;
    output = output.filter(trip => trip.tags.includes(availableTags));
  }
  console.log(output);
  // TODO - sort by cost descending (most expensive goes first)
  output = output.sort((a, b) => parseFloat(b.cost.substr(1)) - parseFloat(a.cost.substr(1)));
  return output;
};

export const getTripById = ({trips}, tripId) => {
  
  // TODO - filter trips by tripId
  const filtered = trips.filter(trip => trip.id == tripId);
  console.log('filtering trips by tripId:', tripId, filtered);
  return filtered.length ? filtered[0] : {error: true};
};

export const getTripsForCountry = ({trips}, countryCode) => {
  const filtered = trips.filter(trip => trip.country.code == countryCode);

  // TODO - filter trips by countryCode
  console.log('filtering trips by countryCode:', countryCode, filtered);
  return filtered.length ? filtered : [{error: true}];
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */
