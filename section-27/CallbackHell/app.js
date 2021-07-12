// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'purple';
//         }, 1000)
//     }, 1000)
// }, 1000)

const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout( () => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay)
}

// Changes background each second
delayedColorChange('red', 1000, () => {
    delayedColorChange('orange', 1000, () => {
        delayedColorChange('yellow', 1000, () => {
            delayedColorChange('green', 1000, () => {
                delayedColorChange('blue', 1000)
            })
        })
    })
})