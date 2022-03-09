import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class HousesService {
  async getAll() {
    const res = await api.get('api/houses')
    logger.log('get all houses', res.data)
    AppState.houses = res.data
  }

  async getById(id) {
    const res = await api.get('/api/houses/' + id)
    logger.log('get house by id', res.data)
    AppState.activeHouse = res.data
  }

  async createHouse(houseData) {
    const res = await api.post('api/houses', houseData)
    logger.log('create house', res.data)
    AppState.houses.push(res.data)
    return res.data
  }
}

export const housesService = new HousesService()