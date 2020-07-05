const mongoose = require("mongoose");

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require("./models/Recipe.model");
// Import of the data from './data.json'
const data = require("./data");

const MONGODB_URI = "mongodb://localhost:27017/recipe-app";

async function doTheLab() {
  try {
    console.log(`
------------------------------
starting lab with async/await
------------------------------`);

    const recipe = await Recipe.create({
      title: "Choux Farcis",
      level: "Amateur Chef",
      ingredients: ["foo", "bar", "baz"],
      cuisine: "French",
      dishType: "main_course",
      image:
        "https://images.media-allrecipes.com/userphotos/720x405/815964.jpg",
      duration: 40,
      creator: "Mamie Codeuse",
    });

    console.log("step 1 ok => ", recipe.title);

    const recipes = await Recipe.create(data);

    console.log("step 2 ok => ", recipes.map((r) => r.title).toString());

    const updatedRecipe = await Recipe.findOneAndUpdate(
      { title: "Rigatoni alla Genovese" },
      { duration: 100 }
    );

    console.log(
      "step 3 ok => ",
      `${updatedRecipe.title} has now a duration of ${updatedRecipe.duration}`
    );

    await Recipe.deleteOne({ title: "Carrot Cake" });

    console.log("step 4 ok => recipe removed ");

    await mongoose.disconnect();

    console.log("step 5 ok => connection closed !");
  } catch (err) {
    console.error(err);
  }
}

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
  .then(doTheLab)
  .catch((error) => console.error("Error connecting to the database", error));
