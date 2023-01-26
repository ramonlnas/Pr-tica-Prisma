import client from "../config/database.js";


async function getCars() {
  return await client.cars.findMany()
}

async function getCar(id: number) {
  return await client.cars.findFirst({
    where: {
      id: id
    }
  })
}

async function getCarWithLicensePlate(licensePlate: string) {
  return await client.cars.findFirst({
    where: {
      licensePlate: licensePlate
    }
  })
}

async function createCar(model: string, licensePlate: string, year: number, color: string) {
  return await client.cars.create({
    data: {
      model: model,
      licensePlate: licensePlate,
      year: year,
      color: color
    }
  })
}

async function deleteCar(id: number) {
  return await client.cars.delete({
    where: {
      id:id
    }
  })
}

const carRepository = {
  getCar,
  getCarWithLicensePlate,
  getCars,
  createCar,
  deleteCar
}

export default carRepository;