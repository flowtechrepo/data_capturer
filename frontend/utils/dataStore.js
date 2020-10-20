import axios from '@/plugins/axios'

const URLS = {
  getList: params => axios({
    method: 'GET',
    url: '/api/url/list',
    params,
    headers: {
    }
  }),
  getResultList: params => axios({
    method: 'GET',
    url: '/api/url/list/result',
    params,
    headers: {
    }
  }),
  delete: data => axios({
    method: 'POST',
    url: '/api/blog/delete',
    data,
    headers: {
    }
  }),
  add: data => axios({
    method: 'POST',
    url: '/api/url/add',
    data,
    headers: {
    }
  }),
  batchAdd: data => axios({
    method: 'POST',
    url: '/api/url/batchAdd',
    data,
    headers: {
    }
  }),
  updateResultForStartTime: data => axios({
    method: 'POST',
    url: '/api/url/updateStartTime',
    data,
    headers: {
    }
  }),
  updateResultForEndTime: data => axios({
    method: 'POST',
    url: '/api/url/updateEndTime',
    data,
    headers: {
    }
  }),
  getByShort: params => axios({
    method: 'GET',
    url: '/api/url/getByShortId',
    params,
    headers: {
    }
  })
}

const dataStore = {
  URLS
}

export default dataStore
