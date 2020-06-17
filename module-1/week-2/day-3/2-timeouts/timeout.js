// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout

// timeout a delay, expressed in milliseconds
const delay = 5000; // in ms => 1sec

const timeoutID = setTimeout(() => {
    // this callback will only be executed ONCE, after the delay 
    console.log("hello i'm a message from the past");
}, delay);

// clearTimeout(timeoutID); // here with clearTimeout, one can cancel the callback execution

