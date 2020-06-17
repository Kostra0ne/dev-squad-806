// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval

const interval = 1000;
var count = 0;

const intervalID = setInterval(() => {
  if (count === 10) clearInterval(intervalID); // cancel the callback's execution !
  console.log("timed ouuut ...", count);
  count++;
}, interval);

// the interval AND timeout are asynchronous processes ...

console.log("end of file !!!");
