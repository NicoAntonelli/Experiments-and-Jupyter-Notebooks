#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
Made By: Nico Antonelli, October 2019
"""

from tkinter import Tk, Canvas
import time

# Define Principal Variables
iterations = 7
window_title = "Cantor Set (Fractal Geometry)"
width_max = 1200
height_max = width_max * (2/5)
x_start = 10
y_start = 20
y_step = 60
color_bkg = "red"
color_line = "white"
width_line = 5
delay = 0.2


# Line Drawing Function
def draw_line(x1, x2, y):
    canvas.create_line(x1, y, x2, y, fill=color_line, width=width_line)
    canvas.update()  # Draws the Lines Step by Step


# Recursive Function for Fractal Drawing
def cantor(x1, x2, y, iteration):
    if iteration > 0:
        time.sleep(delay)
        draw_line(x1, x2, y)
        point1 = x1 + (x2-x1) * (1/3)
        point2 = x1 + (x2-x1) * (2/3)
        y2 = y + y_step
        cantor(x1, point1, y2, iteration-1)
        cantor(point2, x2, y2, iteration-1)


# Main Function
if __name__ == "__main__":
    # Main Window
    window = Tk()
    window.title(window_title)

    # Define Canvas
    canvas = Canvas(window, width=width_max, height=height_max, background=color_bkg)
    canvas.grid()

    # Call Recursive Function and Display Canvas
    cantor(x_start, width_max - x_start, y_start, iterations)

    # Don't Close the Canvas at the End
    canvas.mainloop()
