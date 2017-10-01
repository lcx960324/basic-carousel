function carousel (container, image, duration) {
    for(let i = -image.clientWidth; i < container.clientWidth; i++) {
        setTimeout(function () {
            image.style.left = i + 'px'
            if (i === container.clientWidth - 1) carousel(image, duration)
        }, (i + image.clientWidth) * duration)
        // if (i === container.clientWidth - 1) i = -image.clientWidth
    }
}