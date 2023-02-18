const request = require("request");

// const fetchMyIP = function(callback) {
//   request('https://api.ipify.org?format=json', (error, response, body) => {
//     if (error) return callback(error, null);

//     if (response.statusCode !== 200) {
//       callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
//       return;
//     }

//     const ip = JSON.parse(body).ip;
//     callback(null, ip);
//   });
// };
const fetchCoordsByIP = function(ip, callback) {
 request(ip, (error, response, body) => {

  // error can be set if invalid domain, user is offline, etc.
  if (error) {
    callback(error, null);
    return;
  }

  // parse the returned body so we can check its information
  const parsedBody = JSON.parse(body);
    // check if "success" is true or not
    if (!parsedBody.success) {
      const message = `Success status was ${parsedBody.success}. Server message says: ${parsedBody.message} when fetching for IP ${parsedBody.ip}`;
      callback(Error(message), null);
      return;
    }

  // if we get here, all's well and we got the data

   const { latitude, longitude } = parsedBody;

   callback(null, {latitude, longitude});
 });
};

// module.exports = { fetchMyIP };
module.exports = { fetchCoordsByIP };