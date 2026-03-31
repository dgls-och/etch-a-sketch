# Etch-a-Sketch
I call it Etch-or-Sketch, it is a browser version of "something between a Sketchpad and an Etch-a-Sketch." This is my solution to a The Odin Project (TOP) curriculum assignment project.  

---

## Project Goals
1. The core exercise involves having to print grid cells that can be colorised when a mouse pointer is hovered over each cell.
2. And as a bonus exercise, the colorisation prints multiple random colors progressively, from faint to bold.  

---

## Technical Challenges
The project was challenging. First it was having to print the grid. I have had to print a 8x8 grid of hashtags from a previous lesson elsewhere. So, I knew I needed two for loops -- one on the inside and another on the outside. And it would happen that I learnt that the outside loop manages the rows, while the inside loop manages the cells.

My initial solution, up to the "faint-to-bold" colorisation, was quirky. The colors became bolder as the mouse pointer hovered over the grid, not minding the cell. But this was not the expected behaviour. So, I researched to solve it.

I learnt that the issue was __"an event listener stack."__ It turned out that I had multiple events bundled on each other. So, with the help of Gemini, I leaped over the hurdle. 

The most profound lessons from dealing with this challenge were hidden somewhere between logic and structure. I would eventually learn that:
1. State must be global, and
2. Events should be added once.  

## Resolve
Going forward, I must watch for and avoid having to stack event listeners. Perhaps, I'd have some peace of mind. (lol)
