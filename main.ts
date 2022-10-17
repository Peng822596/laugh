input.onButtonPressed(Button.A, function () {
    music.playMelody("E B C5 A B G A F ", 120)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.mysterious), SoundExpressionPlayMode.InBackground)
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 100000000000000000; index++) {
        basic.showLeds(`
            # # . # #
            . . . . .
            . # # # .
            # . . . #
            # . . . #
            `)
        basic.showLeds(`
            # # . # #
            . . . . .
            # . . . #
            # . . . #
            . # # # .
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showArrow(ArrowNames.North)
    basic.showArrow(input.compassHeading())
    basic.showArrow(input.lightLevel())
    basic.showArrow(input.temperature())
    music.playMelody("C D E F G A B C5 ", 120)
})
input.onButtonPressed(Button.B, function () {
	
})
for (let index = 0; index < 100000000; index++) {
    basic.showLeds(`
        # # . # #
        . . . . .
        . # . # .
        # . # . #
        # . . . #
        `)
    basic.showLeds(`
        # # . # #
        . . . . .
        # . . . #
        # . # . #
        . # . # .
        `)
}
