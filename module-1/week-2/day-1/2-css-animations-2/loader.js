function spinLoaders() {
  const btn = document.getElementById("btn-spin");
  const loaders = document.querySelectorAll(".loader");

  // option 1
  btn.onclick = () =>
    loaders.forEach(loader => loader.classList.toggle("is-spinning"));
}

spinLoaders();
