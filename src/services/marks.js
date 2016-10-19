import request from '../utils/request';
import qs from 'qs'

export async function query(params) {
  // return request(`/api/users?${qs.stringify(params)}`)
  return request(`mark?${qs.stringify(params)}`)
}

export async function create(params) {
  return request('mark', {
    method: 'post',
    // mode: "no-cors",
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json"
    },
    body: JSON.stringify(params)
  })
}

export async function remove(params) {
  return request(`mark?${qs.stringify(params)}`, {
    method: 'delete'
  })
}
