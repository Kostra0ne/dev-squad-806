import {setImagePreview} from "./image-preview.js";

setImagePreview("picture", "image-preview", (previewElement) => {
    previewElement.classList.remove("is-hidden")
})