const add = (a: number, b: number): number => {
  return a + b;
};
// does not detect logic issues

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
  // can return null or undefined
};

const throwError = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }
  return message;
};
// const throwError = (message: string): void => {
//   if (!message) {
//     throw new Error(message);
//   }
// };
//  : never as well

const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};
const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
logWeather(todaysWeather);
// ES2015
// const logWeather = ({ date, weather }) => {
//   console.log(date);
//   console.log(weather);
// };
