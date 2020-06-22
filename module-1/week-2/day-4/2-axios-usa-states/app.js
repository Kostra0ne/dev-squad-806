const URL =
  "https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_hash.json";

function display(states) {
  const list = document.getElementById("states-list");
  list.innerHTML = "";
  states.forEach((state) => {
    list.innerHTML += `<li>${state}</li>`;
  });
}

function filterStates(states, searchString) {
  // here we want to use array filter to return a list containing only the states matching the input's value !!!
  return states.filter((state) => {
    return state.toLowerCase().match(searchString.toLowerCase());
  });
}

function start() {
  axios
    .get(URL) // this action is asynchronous
    .then((result) => {
      // if the action is successfull, you can play with the returned data
      const statesName = Object.values(result.data);
      display(statesName);

      document.getElementById("input-filter").oninput = (evt) => {
        display(filterStates(statesName, evt.target.value));
      };
    })
    .catch((err) => {
      console.log(err);
    });
}

start();
