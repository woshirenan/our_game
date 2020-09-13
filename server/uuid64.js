const UUID = require('uuid')
const maxint = 2000000000
let oldTime = 0, count = 1000000000
module.exports = {
  createUUID64: ()=>{
    const newTime = Date.now()
    if (newTime == oldTime && count < maxint){
      ++count
    }
    else{
      count = 1000000000
    }
    oldTime = newTime
    // Add -64 to make it 64 bytes and more complicated
    return Date.now() + '-' + count + '-' + UUID.v4() + '-64' 
  }
}
