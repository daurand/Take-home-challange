# Take-home-challange

## Instructions

We are given a top-secret algorithm to optimize which driver delivers to which location, by finding the highest suitability score(SS). This algorithm runs in the command line and takes two text files as input

To use this algorithm clone this repository. Navigate to the clone in your command line using "cd". Then run this command

```bash
node topSecret.js <location_file> <driver_file>
```

Replace <location_file> and <driver_file> with the respective paths to the .txt files you wish to pass in as arguments. For example, if the two files are named "destinations.txt" and "drivers.txt", the command would be

```bash
node topSecret.js destinations.txt drivers.txt.
```

This algorithm will output the total suitability score(SS) as well as the location/driver matches in the terminal.

## Testing

Also included is a test file that runs unit tests. To run this file navigate to the directory and run this command in the terminal

```bash
npm install -g jest
```

This will install jest test library globally. Then run

```bash
jest topSecret.test.js
```
