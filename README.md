#### Instructions:

This task should be implemented client side only, using Javascript(ES6), HTML, CSS and React Framework. You can load React from CDN or use any of build systems you prefer. You are free to use any React state container if you need one, What we’re looking for in your code is readability and easy maintenance. We want to see code that reveals its intent to the reader and follows best practices. To accomplish this you can use any paradigm you want.

You also have to make sure the code really works and use any tool or technique you need to accomplish this.

#### The Problem:

1. You should start with a two-dimensional grid of 50x50 square cells and each of these cells are either alive or dead. You can grid as a <div> or <td> with white background showing dead cells (we use 0 for example) and living cells using <div> or <td> with black background (we use 1). The initial configuration of living cells in this grid is arbitrary and should be random for every page refresh

2. This grid is subject to changes on what is called a tick. When a grid “ticks”, these are the rules to determine the next state of the grid:

Any live cell with fewer than two live neighbours dies (underpopulation).

Any live cell with two or three live neighbours lives on to the next generation.

Any live cell with more than three live neighbours dies (overcrowding).

Any dead cell with exactly three live neighbours becomes a live cell (reproduction).

#### Launch

1. type yarn / npm install
2. type yarn start / npm run start to see result

#### Build

1. yarn build / npm run build
