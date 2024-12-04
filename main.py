def showLeft():
    basic.show_leds("""
        # # . . .
        # # . . .
        # # . . .
        # # . . .
        # # . . .
        """)
    basic.pause(250)
    basic.clear_screen()

def on_button_pressed_a():
    showLeft()
input.on_button_pressed(Button.A, on_button_pressed_a)

def showRight():
    basic.show_leds("""
        . . . # #
        . . . # #
        . . . # #
        . . . # #
        . . . # #
        """)
    basic.pause(250)
    basic.clear_screen()

def on_button_pressed_b():
    showRight()
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    pass
basic.forever(on_forever)
