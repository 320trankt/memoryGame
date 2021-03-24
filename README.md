# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Kevin Tran**

Time spent: **5** hours spent in total

Link to project: https://glitch.com/edit/#!/well-abaft-budget

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](http://g.recordit.co/47XWiYXEva.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

      https://www.w3schools.com/jsref/jsref_length_array.asp - Used to refresh use of the length property of an array in javascript.
      
      https://www.color-hex.com/ - Used to get hex codes for custom colors.
      
      https://www.w3schools.com/jsref/jsref_random.asp - Used for the random() function in pattern randomizer.
      
      https://www.codespeedy.com/fixed-div-element-position-to-the-top-right-in-css/ - Used to place fixed display of attempts in top right corner.
      
      https://www.w3schools.com/jsref/prop_node_innertext.asp - Used to dynamically adjust attempts display.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 


      My initial implementation of the guess() function included a while loop that would run while gamePlayed was true, which was intended as a way to ensure the game kept progressing until the player won or lost.
      This mistake occurred because I had failed to grasp that the guess() function was called on every single press of each button, and that therefore each call to guess() should continue the 
      progress of the game manually by either calling for the next clue sequence or allowing for the continuation of the current guess. I realized this was the issue thanks to the console logs
      which indicated that a guess() call would result in an infinite loop, and overcame it by tracking down each instance where guess() was actually called in order to better understand the intended flow of the program.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

      After completing my submission I'm curious as to how larger, more complex sites are made to be easily accessed in-browser if their implementation clearly must require large files and complex
      inheritance schemes. What role does the browser play in allowing these large and complex website code bases to be displayed quickly and easily in-browser to the user? Are there limitations
      to memory usage, processor usage, etc. that a web developer has to keep in mind when dealing with different web browsers? Where exactly are the base html, js, and css files for regular public websites
      stored? How should a web developer test for and handle site crashing?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

      If I had a few more hours to work on this project, I would add different levels of difficulty, with increasing difficulty resulting in
      more buttons, longer patterns, and faster clue sequences. I would also add custom short tunes that would play on losing and on winning.
      I would also add a winning "animation" which would just consist of lighting up all the buttons in quick succession in an interesting pattern
      until the player closes the alert. I would also add code to ensure that the player cannot press buttons while the code sequence is being played, 
      as that is an easy way to break the program.



## License

    Copyright Kevin Tran

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.