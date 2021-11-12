basic.forever(function () {
    basic.showNumber(input.compassHeading())
    if (input.compassHeading() < 45 || input.compassHeading() > 315) {
        soundExpression.hello.play()
    } else {
        music.stopMelody(MelodyStopOptions.All)
    }
})
