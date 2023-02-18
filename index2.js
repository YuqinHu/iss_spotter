// const { fetchMyIP } = require('./iss_promised');
// const { fetchCoordsByIP } = require('./iss_promised');
// const { fetchISSFlyOverTimes } = require('./iss_promised');
const { nextISSTimesForMyLocation } = require('./iss_promised');

// fetchMyIP()
//   .then(fetchCoordsByIP)
//   .then(fetchISSFlyOverTimes)
//   .then(body => console.log(body));

// see index.js for printPassTimes 
// copy it from there, or better yet, moduralize and require it in both files

const passingTimeLap=function(passingTime){
  for(const pass of passingTime){
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};
nextISSTimesForMyLocation()
  .then((passingTime)=>{
      passingTimeLap(passingTime);
  })
  .catch((error)=>{
      console.log(`An error has been found :${ error.message}`);
  });