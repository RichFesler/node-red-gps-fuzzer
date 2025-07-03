//
// Name: gps_randomizer.js
//
// Description: Adds random error to GPS data for privacy or simulation.
//              Applies small offsets to latitude, longitude, and altitude.
//
// Input:
//   msg.payload.lat       - number: latitude (degrees)
//   msg.payload.lon       - number: longitude (degrees)
//   msg.payload.altitude  - number: altitude (feet)
//
// Output:
//   msg.payload.lat       - number: modified latitude
//   msg.payload.lon       - number: modified longitude
//   msg.payload.altitude  - number: modified altitude
//
// REVISIONS:
// 03JUL2025 - Initial version, Rich Fesler <rfesler@gmail.com>
//

// Default to 0 if values are not set
msg.payload.lat = msg.payload.lat || 0;
msg.payload.lon = msg.payload.lon || 0;
msg.payload.altitude = msg.payload.altitude || 0;

// CONFIGURABLE: Adjust as needed
const maxDistanceMiles = 15;   // Max horizontal range (miles)
const maxAltitudeFt = 100;     // Max vertical range (feet)

// Earth radius in miles
const r = 3960;

// Convert 1 mile to degrees at current latitude
const degreesPerMile = (1 / (r * Math.cos(Math.PI / 180 * msg.payload.lat))) * (180 / Math.PI);

// Random bearing in degrees
const theta = Math.random() * 360;

// Random distance within radius
const distance = Math.random() * maxDistanceMiles;

// Calculate offset
const latOffset = distance * Math.sin(Math.PI / 180 * theta) * degreesPerMile;
const lonOffset = distance * Math.cos(Math.PI / 180 * theta) * degreesPerMile;
const altitudeOffsetFt = (Math.random() * 2 - 1) * maxAltitudeFt;

// Apply offset
msg.payload.lat += latOffset;
msg.payload.lon += lonOffset;
msg.payload.altitude += altitudeOffsetFt;

return msg;
