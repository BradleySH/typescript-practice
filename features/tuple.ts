const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};
// type alias
type Drink = [string, boolean, number];

const pepsi: [string, boolean, number] = ["brown", true, 40];
const sprite: Drink = ["clear", true, 40];
const tea: Drink = ["brown", false, 0];

//const pepsi: Drink = ['brown', true, 40];
//messes up our order
//pepsi[0] = 40;
//pepsi[2] = 'brown';

const carSpecs: [number, number] = [400, 3354];

//  Objects are easier to read and prefered use in TS
const carStats = {
  horsepower: 400,
  weight: 3354,
};
