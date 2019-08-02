const crypto = require('crypto')
const hmac = crypto.createHmac('sha256', 'key')

const hash = crypto.createHash('md5')


hash.update('')
// hmac.update('')


console.log(hash.digest('hex'))
console.log(hmac.digest('hex'))