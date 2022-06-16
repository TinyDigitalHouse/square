input.onButtonPressed(Button.A, function () {
    turtle.pen(TurtlePenMode.Down)
    for (let index = 0; index <= 3; index++) {
        turtle.forward(2)
        turtle.turnRight()
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
