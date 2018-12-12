
var axios = require('axios')
var url = 'https://hq.tigerbrokers.com/fundamental/finance_calendar/getType/2017-02-26/2017-06-10';

//method 1
function myGet(url, params={}) {
    return new Promise((resolve, reject) => {
      axios.get(url, params).then(function (response) {
        resolve(response.data)
      })
      .catch(function (err) {
        reject(err)
      })
    })
}
   
myGet(url).then(
    e=>console.log(e)
).catch(
    e=>console.log(e)
)

