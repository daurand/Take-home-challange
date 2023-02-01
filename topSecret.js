const fs = require('fs');

// function finds base SS for driver and location passed in.
// takes a 2 strings, returns a number.
function findSS(location, driver) {
  const vowels = 'aeiouAEIOU';
  let baseSS = 0;

  for (const char of driver) { // finds all vowels in driver.
    if (vowels.includes(char)) {
      baseSS++;
    }
  }

  if (location.length % 2 === 0) { // if even.
    baseSS *= 1.5;
  } else { // if odd.
    baseSS = 1 * (driver.length - baseSS);
  }

  if (location.length % driver.length === 0 || driver.length % location.length === 0) { // if common factor.
    baseSS *= 1.5;
  }

  return baseSS;
}

// function reads files, iterates through them, and finds best SS.
// takes 2 files, console logs total SS and driver/location matches.
function main(locationFile, driverFile) {

    // store data in an array.
  const locations = fs.readFileSync(locationFile, 'utf-8').split('\n');
  const drivers = fs.readFileSync(driverFile, 'utf-8').split('\n');
  const matches = {};
  let totalSS = 0;

    // iterate through locations.
  for (let i = 0; i < locations.length; i++) {
    // reset variables for each location
    let bestDriver = null;
    let bestSS = -Infinity;

    //iterate through drivers.
    for (let j = 0; j < drivers.length; j++) {
        // check if driver has a location already.
      if (!matches[drivers[j]]) {
        const ss = findSS(locations[i], drivers[j]);
        // find best SS.
        if (ss > bestSS) {
          bestDriver = drivers[j];
          bestSS = ss;
        }
      }
    }
    // save best driver with location,  add to total SS.
    if (bestDriver) {
      matches[bestDriver] = locations[i];
      totalSS += bestSS;
    }
  }
  // return results to the terminal.
  console.log('Total Suitability Score:', totalSS);
  console.log('Matches:', matches);
}

// invoc main()
main(process.argv[2], process.argv[3]);
