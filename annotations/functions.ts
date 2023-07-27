const add = (a: number, b: number): number => {
  return a + b;
};

// Void
const logger = (message: string): void => {
  console.log(message);
};

// Never
const throwError = (message: string): never => {
  throw new Error(message);
};

//
const todayWeather = { date: new Date(), weather: "sunny" };

// fn without destructoring
// const logWeather = (forecast: { date: Date; weather: string }): void => {
//   console.log(forecast.date);
//   console.log(forecast.weather);
// };

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
};
// fn with destructoring
