input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.showLeds(`
        . # # # .
        # # # # .
        # . # . .
        # # . . .
        . . . . .
        `)
})
