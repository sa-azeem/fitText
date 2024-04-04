# fitText
`fitText()` is a function to make text strings fit in a given box (rectangle) in `p5.js` libraray.

How To Add This To Your p5js Sketch:
1. You can just copy paste the `fitText.js` and paste it in your p5.js sketch.
2. You can add this in your html file: https://cdn.jsdelivr.net/gh/sa-azeem/fitText@latest/fitText.js to reference `fitText.js` without copy-pasting the whole function.

How to call it:

`fitText()` takes 5 arguments in this sequence:
1. A string which you want to show on canvas (string)
2. `x` position of the box (number)
3. `y` position of the box (number)
4. `width` of the box (number)
5. `height` of the box (number)

Depending on your `rectMode()`, it then draws the text on your screen.
It also return `[fontSize, lines]` which is the `textSize()` used and `lines` is just your string, but broken into lines so that it can fit inside the box.

Demo: https://editor.p5js.org/Abdul_Azeem/sketches/FNiQiPrvu
