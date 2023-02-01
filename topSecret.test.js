const fs = require("fs");
const main = require("./topSecret.js");

describe("main", () => {
  beforeAll(() => {
    // Create the sample shipment locations file
    fs.writeFileSync(
      "locations.txt",
      `820 black bear rd. telluride
PO box 3288 telluride
1 hacker way.`
    );

    // Create the sample drivers file
    fs.writeFileSync(
      "drivers.txt",
      `Daniel
Amy
Mac`
    );
  });

  afterAll(() => {
    // Remove the sample files after the tests are done
    fs.unlinkSync("shipments.txt");
    fs.unlinkSync("drivers.txt");
  });

  it("calculates the correct total suitability score and assignments", () => {
    // Call the main function with the sample files
    const result = main("shipments.txt", "drivers.txt");

    // Expect the result to match the expected output
    expect(result).toEqual(`Total Suitability Score: 9.5
Matches: {
Dan: '820 black bear rd. telluride',
'Amy': 'PO box 3288 telluride',
'Mac': '1 hacker way.'
}`);
  });
});
