function carousel (container, image, duration) {
    image.style.width = image.scrollWidth + 'px' // 设定宽度防止运动到 container 尾部时因为空间不足导致 div 掉下去。
    image.style.left = '-100%'
    for(let i = -image.clientWidth; i < container.clientWidth; i++) {
        setTimeout(function () {
            image.style.left = i + 'px'
            if (i === container.clientWidth - 1) carousel(container, image, duration)
        }, (i + image.clientWidth) * duration)
        // if (i === container.clientWidth - 1) i = -image.clientWidth
    }
}