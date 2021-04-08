const moment = require('moment');

var generateMessage = (from,text)=>{
    return {
        from,
        text,
        Created_At: moment().valueOf
    }
};
module.exports ={generateMessage};