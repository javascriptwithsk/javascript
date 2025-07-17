const randomColor = function () {
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]

    }
    return color
}

let intervalId

const startChangeColor = function () {
    document.body.style.backgroundColor = randomColor()
}

const stopChangeColor = function () {

}

document.querySelector("#start").addEventListener("click", () => {
    intervalId = setInterval(startChangeColor, 2000)
})

document.querySelector("#stop").addEventListener("click", () => {
    clearInterval(intervalId)
})
