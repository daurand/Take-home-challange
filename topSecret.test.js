const fs = require("fs");
const main = require("./topSecret.js");

describe("main", () => {
  beforeAll(() => {
    // Create the sample shipment locations file
    fs.writeFileSync(
      "shipments.txt",
      `42 Wallaby Way, Sydney
22 Elm St.
1 Happy Ave.
`
    );

    // Create the sample drivers file
    fs.writeFileSync(
      "drivers.txt",
      `John
Jane
Jim
`
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
    expect(result).toEqual(`Total Suitability Score: 5.5
Assignments:
42 Wallaby Way, Sydney => John
22 Elm St. => Jane
1 Happy Ave. => Jim
`);
  });
});
