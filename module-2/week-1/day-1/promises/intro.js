function doSomethingAsync() {
  // promises allow us to deal with asynchronicity
  // the syntax is as following
  // use the Promise contructor
  // pass a callback as argument
  // the callback receives 2 function as argument ...
  // usually we call those resolve and reject
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("yata !!! That's my first JS Promise");
    }, 1000);
  }); // note : this promise is always fullfilled
}

doSomethingAsync().then((result) => {
  console.log(result);
});


// the main problem when dealing with async is to get the desired value afterward
function makeADecisionLater() {
  var result;
  const random = Math.random();

  if (random < 0.5) result = "oh no !!!";
  else result = "oh yeah !!!";

  console.log("the result is ", result);

  setTimeout(() => {
    return result; // cannot go out the timeout's callback
  }, 3000);

  console.log("the function won't wait for the timeout...");
  // returns undefined
}

const wontWork = makeADecisionLater();

console.log("wontWork is undefined ", wontWork);

console.log("------------------------------");

// we can solve the previous problem with a callback
function makeADecisionLater2(callback) {
  var result;
  const random = Math.random();

  if (random < 0.5) result = "oh no !!!";
  else result = "oh yeah !!!";

  setTimeout(() => {
    callback(result);
  }, 3000);
}

// const stillWontWork = makeADecisionLater2(function (yayOrNay) {
//   console.log(">>>", yayOrNay);
// });

// function getResultLater(yayOrNay) {
//   console.log(">>>", yayOrNay);
// }

// makeADecisionLater2(getResultLater);

// console.log("still undefined ", stillWontWork);

console.log("------------------------------");

/* or use a Promise to handle it ! */

function makeADecisionLater3() {
  return new Promise((resolveClbk, rejectClbk) => {
    // resolve and reject are provided by the Promise itself
    setTimeout(() => {
      const random = Math.random();

      if (random > 0.5) resolveClbk("oh yeah !!!");
      else rejectClbk("oh no !!!");
    }, 4000);
  });
}

makeADecisionLater3()
  .then((success) => {
    console.log("version 3 (success with promise)", success);
  })
  .catch((failure) => {
    console.error("version 3 (error with promise)", failure);
  });

console.log("the thread continues ....");
// so promises won't avoid

// ASYNC/AWAIT pattern

async function writeStuffInOrder() {
  console.log("in the async function");
  try {
    const promiseResult = await makeADecisionLater3(); // await keywork MUST be used in a function decorated with the async keyword
    console.log("1 >>>>", promiseResult);
  } catch (err) {
    console.error("2 >>>>", err);
  }
}

writeStuffInOrder();
