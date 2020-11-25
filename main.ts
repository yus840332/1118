input.onGesture(Gesture.LogoUp, function () {
    if (頁面 == 1) {
        radio.sendNumber(1)
    }
})
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        bitbot.go(BBDirection.Reverse, 60)
    }
    if (receivedNumber == 2) {
        bitbot.go(BBDirection.Forward, 60)
    }
    if (receivedNumber == 3) {
        bitbot.rotate(BBRobotDirection.Left, 15)
    }
    if (receivedNumber == 4) {
        bitbot.rotate(BBRobotDirection.Right, 15)
    }
    if (receivedNumber == 5) {
        bitbot.stop(BBStopMode.Brake)
        basic.showIcon(IconNames.No)
    }
    if (receivedNumber == 6) {
        for (let index = 0; index < 4; index++) {
            bitbot.buzz(true)
            basic.pause(100)
            bitbot.buzz(false)
            basic.pause(100)
        }
    }
    if (receivedNumber == 7) {
        距離循線()
    }
    if (receivedNumber == 8) {
        距離 = bitbot.sonar(BBPingUnit.Centimeters)
        basic.showNumber(距離)
        radio.sendValue("a", 距離)
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    if (頁面 == 1) {
        radio.sendNumber(3)
    }
})
input.onButtonPressed(Button.A, function () {
    if (頁面 == 1) {
        radio.sendNumber(5)
    }
    if (頁面 == 2) {
        radio.sendNumber(7)
    }
})
function 循線 () {
    // 白線上
    // 停下來
    if (bitbot.readLine(BBLineSensor.Left) == 0 && bitbot.readLine(BBLineSensor.Right) == 0) {
        bitbot.stop(BBStopMode.Brake)
        // 開始計時
        開始時間 = input.runningTime()
        // 在黑線上
        while (!((bitbot.readLine(BBLineSensor.Left) == 1 || bitbot.readLine(BBLineSensor.Right) == 1) && input.runningTime() - 開始時間 <= 400 || input.runningTime() - 開始時間 > 400)) {
            bitbot.rotate(BBRobotDirection.Right, 30)
        }
        bitbot.stop(BBStopMode.Brake)
        結束時間 = input.runningTime() - 開始時間
        if (結束時間 <= 400) {
            // 在黑線上
            while (!(bitbot.readLine(BBLineSensor.Left) == 1 && bitbot.readLine(BBLineSensor.Right) == 1)) {
                bitbot.rotate(BBRobotDirection.Right, 15)
            }
        } else {
            // 在黑線上
            while (!(bitbot.readLine(BBLineSensor.Left) == 1 && bitbot.readLine(BBLineSensor.Right) == 1)) {
                bitbot.rotate(BBRobotDirection.Left, 15)
            }
        }
    }
    // 右邊
    if (bitbot.readLine(BBLineSensor.Left) == 1 && bitbot.readLine(BBLineSensor.Right) == 0) {
        bitbot.rotate(BBRobotDirection.Left, 15)
    }
    // 左邊
    if (bitbot.readLine(BBLineSensor.Left) == 0 && bitbot.readLine(BBLineSensor.Right) == 1) {
        bitbot.rotate(BBRobotDirection.Right, 15)
    }
    // 黑線上
    if (bitbot.readLine(BBLineSensor.Left) == 1 && bitbot.readLine(BBLineSensor.Right) == 1) {
        bitbot.go(BBDirection.Forward, 60)
    }
}
input.onGesture(Gesture.Shake, function () {
    if (頁面 == 2) {
        radio.sendNumber(6)
    }
})
function 距離循線 () {
    if (bitbot.sonar(BBPingUnit.Centimeters) <= 10) {
        bitbot.stop(BBStopMode.Brake)
    } else {
        while (bitbot.sonar(BBPingUnit.Centimeters) > 10) {
            循線()
        }
        bitbot.stop(BBStopMode.Brake)
    }
}
input.onGesture(Gesture.LogoDown, function () {
    if (頁面 == 1) {
        radio.sendNumber(2)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (頁面 < 2) {
        頁面 += 1
        basic.showNumber(頁面)
    } else {
        頁面 = 1
        basic.showNumber(頁面)
    }
})
input.onButtonPressed(Button.B, function () {
    if (頁面 == 2) {
        radio.sendNumber(8)
    }
})
input.onGesture(Gesture.TiltRight, function () {
    if (頁面 == 1) {
        radio.sendNumber(4)
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "a") {
        basic.showNumber(value)
    }
})
let 結束時間 = 0
let 開始時間 = 0
let 距離 = 0
let 頁面 = 0
radio.setGroup(1)
頁面 = 1
basic.forever(function () {
	
})
