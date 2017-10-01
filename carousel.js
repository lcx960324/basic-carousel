function carousel () {
    const container = document.getElementById('carousel-container')
    const image = document.getElementById('image')
    console.log(container.clientWidth)
    for(let i = -image.clientWidth; i < container.clientWidth; i++) {
        setTimeout(function () {
            image.style.left = i + 'px'
            if (i === container.clientWidth - 1) carousel()
        }, (i + image.clientWidth) * 4)
        // if (i === container.clientWidth - 1) i = -image.clientWidth
        console.log(123)
    }
}