/**
 * Blockly Games: Turtle Graphics Answers
 *
 * Copyright 2013 Google Inc.
 * https://github.com/google/blockly-games
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Sample answers for Turtle levels. Used for prompts and marking.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Turtle.Answers');


/**
 * Sample solutions for each level.
 * To create an answer, just solve the level in Blockly, then paste the
 * resulting JavaScript here, moving any functions to the beginning of
 * this function.
 */
Turtle.answer = function() {
  // Helper functions.
  function drawStar(length) {
    for (var count = 0; count < 5; count++) {
      Turtle.move(length);
      Turtle.turn(144);
    }
  }
  function drawPoly (sides, len) {
    for (var count = 0; count < sides; count++) {
      Turtle.move(len);
      Turtle.turn(360 / sides);
    }
  }

  switch (BlocklyGames.LEVEL) {
    case 1:
      // Square.
      for (var count = 0; count < 4; count++) {
        Turtle.move(100);
        Turtle.turn(90);
      }
      break;
    case 2:
      // Pentagon.
      for (var count = 0; count < 5; count++) {
        Turtle.move(100);
        Turtle.turn(72);
      }
      break;
    case 3:
      // Ten Sides. Variable
      var sides_3 =10;
      for (var count = 0; count < sides_3; count++) {
        Turtle.move(50);
        Turtle.turn(360/sides_3);
      }

      break;
    case 4:
      //setup
      drawPoly(10,50);
      drawPoly(5,50);
      drawPoly(3,50);
      break;
    case 5:
      // method
      drawPoly(10,50);
      drawPoly(5,50);
      drawPoly(3,50);
      break;
    case 6:
      // add a second parameter
      drawPoly(4,50);
      drawPoly(4,100);
      drawPoly(3,100);
      break;
    case 7:
      // circle
      drawPoly(50,10);
      break;
    case 8:
      // Draw yellow a star
      Turtle.penColour('#ffff00');
      drawStar(50);
      break;
    case 9:
      // Three yellow stars
      Turtle.penColour('#ffff00');
      drawStar(25);
      Turtle.penDown(false);
      Turtle.move(100);
      Turtle.penDown(true);
      drawStar(50);
      Turtle.penDown(false);
      Turtle.turn(90);
      Turtle.move(100);
      Turtle.penDown(true);
      drawStar(150);
      break;
  }
};

/**
 * Validate whether the user's answer is correct.
 * @param {number} pixelErrors Number of pixels that are wrong.
 * @return {boolean} True if the level is solved, false otherwise.
 */
Turtle.isCorrect = function(pixelErrors) {
  console.log("I changed this");
  if (BlocklyGames.LEVEL == BlocklyGames.MAX_LEVEL) {
    // Any non-null answer is correct.
    return Blockly.mainWorkspace.getAllBlocks().length > 1;
  }
  console.log('Pixel errors: ' + pixelErrors);
  if (pixelErrors > 100) {
    // Too many errors.
    return false;
  }
  //@blake number of blocks
  if ((BlocklyGames.LEVEL == 1 && Blockly.mainWorkspace.getAllBlocks().length > 6)
   || (BlocklyGames.LEVEL == 2 && Blockly.mainWorkspace.getAllBlocks().length > 8)
   || (BlocklyGames.LEVEL == 5 && Blockly.mainWorkspace.getAllBlocks().length > 15)

      ) {
    // Use a loop, dummy.
    var content = document.getElementById('helpUseLoop');
    var style = {
      'width': '30%',
      'left': '35%',
      'top': '12em'
    };
    BlocklyDialogs.showDialog(content, null, false, true, style,
        BlocklyDialogs.stopDialogKeyDown);
    BlocklyDialogs.startDialogKeyDown();
    return false;
  }
  return true;
};
