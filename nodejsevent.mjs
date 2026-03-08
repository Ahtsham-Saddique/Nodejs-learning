import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();


myEmitter.on('Waterfull', () => {
  console.log('please turn off the motor!');

  setTimeout(()=>{
    console.log("A gentel reminder please turn off the motor");
  },3000);
});
myEmitter.emit('event');
console.log("While water is fulling the other code is running automaticallty");
myEmitter.emit('Waterfull');