const chooseColor = document.querySelectorAll('.choose__color-btn')
const contentItem = document.querySelectorAll('.content-item')


chooseColor.forEach(function (element) {
   element.addEventListener('click', open)
})

function open(evt) {
   evt.target = evt.currentTarget
   
}
