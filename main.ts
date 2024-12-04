let counter = 0
let currentSequence: number[] = []
let currentCheck = 0
function playSequence (seq: any[]) {
    for (let index = 0; index <= seq.length - 1; index++) {
        if (seq[index] == 0) {
            showLeft()
        } else {
            showRight()
        }
        basic.clearScreen()
        basic.pause(100)
    }
}
function showLeft () {
    basic.showLeds(`
        # # . . .
        # # . . .
        # # . . .
        # # . . .
        # # . . .
        `)
    basic.pause(250)
    basic.clearScreen()
}
input.onButtonPressed(Button.A, function () {
    showLeft()
    checkValue(0)
})
function showRight () {
    basic.showLeds(`
        . . . # #
        . . . # #
        . . . # #
        . . . # #
        . . . # #
        `)
    basic.pause(250)
    basic.clearScreen()
}
function initSequence () {
    counter = 0
    currentSequence = []
    currentCheck = 0
}
function addToSequence (seq: any[]) {
    currentCheck = 0
    currentSequence.push(randint(0, 1))
    counter = counter + 1
    playSequence(currentSequence)
    basic.pause(200)
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(200)
    basic.clearScreen()
}
input.onButtonPressed(Button.B, function () {
    showRight()
    checkValue(1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    initSequence()
    addToSequence(currentSequence)
})
function checkValue (value: number) {
    if (currentSequence[currentCheck] != value) {
        basic.showIcon(IconNames.Sad)
    } else {
        currentCheck = currentCheck + 1
        if (currentCheck >= counter) {
            basic.clearScreen()
            basic.pause(100)
            addToSequence(currentSequence)
        }
    }
}
basic.forever(function () {
	
})
