var generateMessage = (from,text)=>{
    return {
        from,
        text,
        Created_At:new Date().getTime()
    }
};
module.exports ={generateMessage};