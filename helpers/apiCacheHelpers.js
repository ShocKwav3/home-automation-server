import redis from 'redis'


const connect = (port=6379, host='127.0.0.1') => (
  redis.createClient(port, host)
)


export default {
  connect,
}