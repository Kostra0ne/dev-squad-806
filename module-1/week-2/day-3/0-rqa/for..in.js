const user = {
    name: "ursulle",
    age: 55,
    lovesCinema: true
};

user["lovesCinema"]

for (let key in user) {
    if (user.hasOwnProperty(key)) {
        console.log(typeof key, user[key]);
    }
}