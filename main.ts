serial.redirectToUSB()
basic.forever(function () {
    serial.writeValue("x", input.acceleration(Dimension.X))
    basic.pause(100)
})
basic.forever(function () {
    serial.writeValue("y", input.acceleration(Dimension.Y))
    basic.pause(100)
})
basic.forever(function () {
    serial.writeValue("z", input.acceleration(Dimension.Z))
    basic.pause(100)
})
