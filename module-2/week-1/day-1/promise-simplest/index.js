const databaseConnection = {
  status: true,
};

/**
 * @returns Promise a pending promise, waiting for resolution OR rejection
 */
function fetchInfoFromDatabase() {
  // let's imagine we want to get some data stored in a database server...
  // this operation will take some time (even if in ms...)
  // that's why we call this an async process
  return new Promise((successCallback, failureCallback) => {
    if (databaseConnection.status === false)
      failureCallback("Failed to connect to database");

    // fetching the info will take ... some time (here 800ms)
    setTimeout(() => {
      // when done, you want to "escape", "get out" the scope of the Promise
      // and the only way you got is through the successCallback
      successCallback(["jill", "joe", "jim"]);
    }, 800); // 800ms
  });
}

fetchInfoFromDatabase() // you can apply the .then OR .catch only on a Promise
  .then((asyncResponse) => {
    // "syntax may seem odd, but it's pretty stright forward once you get used to it"
    console.log("1 >>>", asyncResponse);
  })
  .catch((err) => console.error(err));

async function awaitNeedsAnAsyncWrapperFunction() {
  try {
    const myResult = await fetchInfoFromDatabase();
    console.log("2 >>>", myResult);
  } catch (err) {
    console.error(err);
  }
}

awaitNeedsAnAsyncWrapperFunction();
