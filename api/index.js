import axios from '~/plugins/axios'

export const detectCode = data => axios.post('/programming_language_detect', data)
