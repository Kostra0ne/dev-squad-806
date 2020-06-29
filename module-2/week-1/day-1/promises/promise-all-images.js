const target = document.getElementById("images-target");
const btn = document.getElementById("btn-action-1");
const urls = ["1.jpg", "2.jpg", "3.gif"];

function loadImage(url) {
  return new Promise((res, rej) => {
    const img = new Image(); // create a new image
    img.src = "img/" + url; // associate the image source

    img.onload = (evt) => {
      res(evt.target); // when loaded, execute the resolve callback
    };
    img.onerror = (evt) => {
      rej(evt); // if an error occured, exec the reject callback
    };
  });
}

function loadImages() {
  const promise1 = loadImage(urls[0]);
  const promise2 = loadImage(urls[1]);
  const promise3 = loadImage(urls[2]);

  Promise.all([promise1, promise2, promise3]) // takes an array of promises
    .then((res) => {
      console.log("success !!!");
      console.log(res); // res is an Array exposing the results in the initial order
      // this is convenient, because the order won't be affected by the resolution's timing
      target.append(...res)
      
    })
    .catch((err) => {
      // if one (or more) promise(s) fail(s) , the catch clause will be executed
      console.error(err);
    });
}

btn.onclick = loadImages;
