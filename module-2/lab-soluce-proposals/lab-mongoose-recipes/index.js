const mongoose = require("mongoose");

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require("./models/Recipe.model");
// Import of the data from './data.json'
const data = require("./data");

const MONGODB_URI = "mongodb://localhost:27017/recipe-app";

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((self) => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    // Before adding any documents to the database, let's delete all previous entries
    return self.connection.dropDatabase();
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made

    console.log(`
------------------------------
starting lab
------------------------------`);

    Recipe.create({
      title: "Choux Farcis",
      level: "Amateur Chef",
      ingredients: ["foo", "bar", "baz"],
      cuisine: "French",
      dishType: "main_course",
      image:
        "https://images.media-allrecipes.com/userphotos/720x405/815964.jpg",
      duration: 40,
      creator: "Mamie Codeuse",
    })
      .then((recipe) => {
        console.log("step 1 ok => ", recipe.title);

        Recipe.create(data).then((recipes) => {
          console.log("step 2 ok => ", recipes.map((r) => r.title).toString());

          Recipe.findOneAndUpdate(
            { title: "Rigatoni alla Genovese" },
            { duration: 100 }
          ).then((updatedRecipe) => {
            console.log(
              "step 3 ok => ",
              `${updatedRecipe.title} has now a duration of ${updatedRecipe.duration}`
            );

            Recipe.deleteOne({ title: "Carrot Cake" }).then((deletedRecipe) => {
              console.log("step 4 ok => recipe removed ");

              mongoose
                .disconnect()
                .then(() => console.log("step 5 ok => connection closed !"));
            });
          });
        });
      })
      .catch((dbErr) => console.error(dbErr));
  })
  .catch((error) => console.error("Error connecting to the database", error));
