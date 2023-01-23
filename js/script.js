import gallery from './gallery.js'

const galleryRef = document.querySelector('.js-gallery')//отриали link на list
galleryRef.innerHTML = createGalleryListMarkup(gallery)

function createGalleryListMarkup(gallery) {//ф-ція створення розмітки
    return gallery.map(({preview, original, description}) => {
        return `
        <li class="gallery__item">
            <a class="gallery__link"
                href="${preview}">
                <img class="gallery__image"
                    src="${original}"
                    data-source="${original}"
                    alt="${description}"/>
             </a>
        </li>`
    }).join('')
}


