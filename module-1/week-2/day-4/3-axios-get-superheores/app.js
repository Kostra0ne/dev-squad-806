// let's get some superheroes

// const URL = "https://superheroapi.com/api/1501763726651451/165";

const URL_TREE = "https://opendata.paris.fr/api/records/1.0/search/?dataset=arbresremarquablesparis&q=&rows=1000&facet=genre&facet=espece&facet=stadedeveloppement&facet=varieteoucultivar&facet=dateplantation&facet=libellefrancais";

const URL_CHUCK = "https://api.chucknorris.io/jokes/random";

const URL_POKEMON = "https://pokeapi.co/api/v2/pokemon/ditto";

const URL_TRIVIA = "https://opentdb.com/api.php?amount=10";


axios.get(URL_TREE) // this asynchronous process returns a Promise
.then(res => {
    console.log(res.data)
})
.catch(err => {
    console.error(err);
})


axios.get(URL_CHUCK) // this asynchronous process returns a Promise
.then(res => {
    console.log(res.data)
})
.catch(err => {
    console.error(err);
})

axios.get(URL_POKEMON) // this asynchronous process returns a Promise
.then(res => {
    console.log(res.data)
})
.catch(err => {
    console.error(err);
})


axios.get(URL_TRIVIA) // this asynchronous process returns a Promise
.then(res => {
    console.log(res.data)
})
.catch(err => {
    console.error(err);
})