import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
galleryItems.forEach((elem) => {
  //console.log(elem);
  const elemEl = document.createElement("div");
  elemEl.classList.add("gallery__item");

  const ahref = document.createElement("a");
  ahref.classList.add("gallery__item");
  ahref.setAttribute("href", elem.original);
  elemEl.append(ahref);

  const img = document.createElement("img");
  img.classList.add("gallery__image");
  img.setAttribute("src", elem.preview);
  img.setAttribute("alt", elem.description);
  ahref.append(img);

  galleryEl.append(elemEl);
});
var lightbox = new SimpleLightbox(".gallery a", {});
