// inference type
const carMakers = ["ford", "toyota", "chevy"];

const theCar = carMakers[0];

// Map array
carMakers.map((car: string): string => {
  return car;
});

// Flexible types
const importantDates: (Date | string)[] = [new Date(), "2030-10-10"];
