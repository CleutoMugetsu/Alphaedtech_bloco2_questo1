input.onButtonPressed(Button.A, function () {
    Player1 = Player1 + 1
    basic.showNumber(Player1)
    basic.pause(200)
})
input.onButtonPressed(Button.AB, function () {
    Player2 = randint(0, 3)
    if (Aposta == Player2) {
        basic.showNumber(Player2)
        basic.pause(5000)
        basic.showIcon(IconNames.Happy)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
        basic.showNumber(Player2)
        basic.pause(5000)
        basic.showIcon(IconNames.Sad)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    Player1 = 0
    Aposta = 0
    Player2 = 0
})
input.onButtonPressed(Button.B, function () {
    Aposta = Aposta + 1
    basic.showNumber(Aposta)
    basic.pause(200)
})
let Player2 = 0
let Aposta = 0
let Player1 = 0
Player1 = 0
Aposta = 0
Player2 = 0
