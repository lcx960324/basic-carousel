function carousel () {
    const container = document.getElementById('carousel-container')
    const image = document.getElementById('image')
    console.log(container.clientWidth)
    for(let i = -image.clientWidth; i < container.clientWidth; i++) {
        setTimeout(function () {
            image.style.left = i + 'px'
        }, (i + image.clientWidth) * 2)
    }
}
carousel()