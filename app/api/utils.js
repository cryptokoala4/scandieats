import reqwest from 'reqwest'
import configs from './config'

const envConfig = configs[process.env.NODE_ENV]

export function request(conf, token = null) {
  console.log(conf);
  if(token) {
    if(!conf['headers']) {
      conf['headers'] = {}
    }
    conf['headers']['Authorization'] =  `${token}`
  }
  return reqwest(conf)
}

export function url(url) {
  return envConfig['servicesHost'] + url
}
