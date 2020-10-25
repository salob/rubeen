input.onButtonPressed(Button.A, function () {
    basic.showString("hello reuben       shake me to sing")
})
input.onButtonPressed(Button.AB, function () {
    music.startMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.Once)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("hello sian       shake me to sing")
})
input.onGesture(Gesture.Shake, function () {
    music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
})
basic.showString("what is your name A means reuben B means sian")
