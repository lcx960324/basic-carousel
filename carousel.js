function carousel (container, image, duration, items) {
    for (var i = 0; i < items.length; i++) {
        image.appendChild(items[i].cloneNode(true)) // 防止由于 DOM 已经被添加而不会重复添加
        if (i === items.length -1 && image.clientWidth < container.clientWidth) i = -1
    }
    roll(container, image, duration)
}
function roll (container, image, duration) {
    image.style.width = image.scrollWidth + 'px' // 设定宽度防止运动到 container 尾部时因为空间不足导致 div 掉下去。
    image.style.left = '-100%'
    for(let i = -image.clientWidth; i < container.clientWidth; i++) {
        setTimeout(function () {
            image.style.left = i + 'px'
            if (i === container.clientWidth - 1) roll(container, image, duration)
        }, (i + image.clientWidth) * duration)
        // if (i === container.clientWidth - 1) i = -image.clientWidth。
    }
}