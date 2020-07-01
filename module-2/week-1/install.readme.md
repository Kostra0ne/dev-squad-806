# starting in any shell :)
$ mkdir new-projet-folder
$ cd new-project-folder
$ code .
# open then vs code terminal 
$ npm init -y
$ npm install express hbs dotenv
# modify package.json with a dev script : nodemon app.js -e .hbs,.js
$ touch app.js
$ touch .env
$ touch .gitignore
# @ .gitignore : exclude at least node_modules/ and the .env file
$ mkdir public public/js public/img public/css
$ mkdir views views/partials
$ touch views/layout.hbs views/home.hbs
$ touch views/partials/navMain.hbs
$ touch public/css/index.css
# do the app's base config : https://expressjs.com/fr/starter/hello-world.html
$ npm run dev

## dependecies 
# https://www.npmjs.com/package/express
# https://www.npmjs.com/package/dotenv