import gallery from './gallery.js'

const galleryRef = document.querySelector('.js-gallery')//отриали link на list
const lightBoxModalRef = document.querySelector('.lightbox')//link на модальне вікно
const btnCloseModal = document.querySelector('button[data-action="close-lightbox"]')//link на кнопку закрття модалки
const lightBoxImg = document.querySelector('.lightbox__image')//link на img який буде відкриватися в модальному вікні
const overlayRef = document.querySelector('.lightbox__overlay')//link на overlay

galleryRef.addEventListener('click', onGalleryClick)//по кліку відкривається модалка
btnCloseModal.addEventListener('click', onBtnCloseModal)//по клікку на btn закривається модалка





//////////РОЗМІТКА////////////////////////////
galleryRef.innerHTML = createGalleryListMarkup(gallery)//рендиремо розмітку

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
}////////////////////////////////////////////////////////


////////////Ф-ЦІЯ ВІДКРИТТЯ МОДАЛКИ///////////////////////////////
function onGalleryClick(e) {
    if(e.target.nodeName !== 'IMG') return//перевіряємо щоб клік був саме по картинках
    e.preventDefault()
    lightBoxModalRef.classList.add('is-open')//ВІШАЄМО КЛАС ДЛЯ ВІДКРИТТЯ МОДАЛКИ
  
    addImgModal(e)
    onCloseClickModalOverlay()
    onCloseBtnModalOverlay()
}

////////Ф-ЦІЯ ДОДАВАННЯ КАРТИНКИ У МОДАЛЦІ/////////////
function addImgModal(e) {
    lightBoxImg.src = e.target.dataset.source//передаємо модальній картинці src галереї
}

/////////// Ф-ЦІЯ ЗАКРИТТЯ МОДАЛКИ ////////////////////
function onBtnCloseModal() {
    lightBoxModalRef.classList.remove('is-open')

    lightBoxImg.src = ""//очищаємо src модальної картинки
}

///////////Ф-ЦІЯ ЗАКРИТТЯ МОДАЛКИ ПО КЛІКУ В ОВЕРЛЕЙ ///
function onCloseClickModalOverlay() {
    overlayRef.addEventListener('click', () => {
        onBtnCloseModal()
    })
}

///////////Ф-ЦІЯ ЗАКРИТТЯ МОДАЛКИ ПО КНОПЦІ ESC //////////
function onCloseBtnModalOverlay() {
    document.addEventListener('keydown', (e) => {
        if(e.code === "Escape")
        onBtnCloseModal()
    })
}
