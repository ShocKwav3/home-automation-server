import redis from 'redis'


const connect = (host='127.0.0.1', port=6379) => (
  redis.createClient(port, host)
)


export default {
  connect,
}