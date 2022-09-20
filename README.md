# Qwixxboard! (using React)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It also uses the Redux template.

## What is Qwixx?

Qwixx is a dice-rolling game my family and friends like to play. Unfortunately, the scoreboards that came with the game get permanent marks too easily, and the only app I could find on Google Play is in another language. So, here I am making a version in English!

## The end-goal

The end-product will need to look something like this:

![Qwixx board](board.jpg)

Eventually, it would be fun to add "advanced" versions of the board, like this:

![Qwixx alternate board](board-alt-1.jpg)

## The rules

Basically, as dice get rolled, the player has the option to click squares, which then get marked "X" and add to score depending on how many "X"s there are in each row.

The detailed rules can be found [here](https://www.ultraboardgames.com/qwixx/deluxe.php).

## React Components

With the above images in mind, this is a list of components used:

- The background/board as a whole
- Rows for each color
- Boxes to be filled with numbers, then covered with an "X"
- The "lock" circle for the end of each row (or possibly just use the same or similar component as the numbers)
- An extra row to summarize scoring (no functionality required--this could just be an image possibly)
- Boxes for totals
- Boxes for "penalties"

## Game logic

Essentially, every time a player marks off a box with an "X" (in our case, clicking a box), it should make every box to the left of that "X" unclickable. Each row will need a counter to stand for "How many boxes have an 'X' in this row".

The second part of the game logic is that the box all the way on the right is not allowed to be clicked on until there are at least 5 other "X"s in the row. If someone is able to mark the last box, the "lock" symbol at the very end also gets an "X" and counts for scoring.

## Scoring

For each row, every new mark lets you add the current number of marks to the score for that row. For example, if you have 5 marks, your score for the row will be 5+4+3+2+1.

This is accomplished nicely in the following function in the score script:
```javascript
function scorerow(numberofmarks) {
    let score = 0;
    while (numberofmarks > 0) {
        score += numberofmarks;
        numberofmarks--;
    };
    return score
}
```

## Undo

Since this project uses Redux, and redux technically sets a brand new state with every change, you would think it shouldn't be hard to implement an undo function--and you'd be right!

In fact, the documentation for Redux indicates that there is a library called "redux-undo" that sets up this functionality fairly easily.

The score state is kept in the store as "score". Without an undo function, it would be set in the Redux store by labeling it as follows:
```
export const store = configureStore({
  reducer: {
    score: scoreReducer,
  }
});
```


By importing the "undoable" library in the store and wrapping the scoreReducer, it makes everything in that slice of logic undoable:

```
...

import undoable from 'redux-undo';

export const store = configureStore({
  reducer: {
    score: undoable(scoreReducer),
  }
});
```

Then we just need to call the right function on a button:

```
...

import { ActionCreators } from 'redux-undo';

...

<div onClick={() => dispatch(ActionCreators.undo())}>
    <Button>Undo</Button>
</div>

<div onClick={() => dispatch(ActionCreators.redo())}>
    <Button>Redo</Button>
</div>

```

Voila! Undo/redo functionality without having to write complex code that keeps track of exactly what actions were taken in what order.