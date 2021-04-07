var expect= require('expect');
var {generateMessage} = require('./message');

describe('generateMessage',()=>{
  it('Should return the correct message',()=>{
      var from ="John";
      var text="Do something";
      
      var message = generateMessage(from,text);
      expect(typeof message.Created_At).toBe('number');
      expect(message).toMatchObject({from, text});

  })

})