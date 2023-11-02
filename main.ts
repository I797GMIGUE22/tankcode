radio.onReceivedString(function (receivedString) {
    item = receivedString
    if (0 == item.compare("A")) {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Run)
        mbit_Robot.RGB_Car_Big(212, 219, 81)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    } else if (item.compare("B") == 0) {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Back)
        mbit_Robot.RGB_Car_Big(255, 0, 0)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . # . #
            . # . # .
            `)
    } else if (item.compare("C") == 0) {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_SpinLeft)
        mbit_Robot.RGB_Car_Big(0, 134, 255)
        basic.showLeds(`
            . . . # .
            # # # # #
            . . . # .
            # . . . #
            . # # # .
            `)
    } else if (item.compare("D") == 0) {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_SpinRight)
        mbit_Robot.RGB_Car_Big(146, 255, 0)
        basic.showLeds(`
            . # . . .
            # # # # .
            . # . . .
            # . . . #
            . # # # .
            `)
    } else if (item.compare("") == 0) {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
        mbit_Robot.RGB_Car_Big(0, 0, 0)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            . . . . .
            `)
        music.stopAllSounds()
    } else if (item.compare("E") == 0) {
        mbit_Robot.Music_Car(mbit_Robot.enMusic.birthday)
    } else if (item.compare("F") == 0) {
        music.ringTone(262)
    } else if (item.compare("G") == 0) {
        mbit_Robot.Music_Car(mbit_Robot.enMusic.funereal)
    } else if (item.compare("I") == 0) {
        mbit_Robot.RGB_Car_Big(randint(0, 255), randint(0, 255), randint(0, 255))
    }
})
let item = ""
radio.setGroup(1)
radio.setTransmitPower(7)
basic.showLeds(`
    . # . # .
    # # # # #
    # # # # #
    . # # # .
    . . # . .
    `)
