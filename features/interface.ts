interface Vehicle {
  // name: string;
  // year: Date;
  // broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name} `;
  },
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Summary: ${vehicle.summary()}`);
};

//printVehicle(oldCivic);

//  interfaces are like gatekeepers to functions to make more reusable code
