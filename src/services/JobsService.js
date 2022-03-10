import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class JobsService {
  async getAll() {
    const res = await api.get('api/jobs')
    logger.log('get all jobs', res.data)
    AppState.jobs = res.data
  }
  async getById(id) {
    const res = await api.get('/api/jobs/' + id)
    logger.log('get job by id', res.data)
    AppState.activeJob = res.data
  }
  async createJob(jobData) {
    const res = await api.post('api/jobs', jobData)
    logger.log('create job', res.data)
    AppState.jobs.push(res.data)
    return res.data
  }
}

export const jobsService = new JobsService()