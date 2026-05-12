# Week 1 Learning Journal

## Day 1

- Installed Node.js, npm, Git, Cursor
- Created this repo
- Learned the difference between Git and GitHub
- Learned what Node.js and npm are

## Day 2

- Started with variable definitions and their scopes in JS
- Some are {} bound whereas some are bound by the function they are with
- Its ideal to use just let and const rather than var
- let and const are both block scoped, but let can be reassigned and const cannot
- debugged TypeErrors and ReferenceErrors

## Day 3

- Functions as a feature that stores behaviour, function declaration and calling
- Distinction between parameters and arguments
- Function expressions with variable, and arrow functions
- return vs console.log distinction
- .gitignore to let git know which file to ignore and git diff --staged to view the staged files before commiting

## Day 4

- Studied Arrays and indexes
- Started with objects, key-value pairs, dot and bracket notations
- Modifying arrays and objects, destructuring and how it differs for both the data structures
- Spread operators
- git stash for when you want to temporarily save uncommitted change. It also cleans the working directory so you can switch branch or pull without conflicts.
- git ammend to change the commit message before pushing

## Day 5

- Array methods help to modify and loop through the data, which was previously done in a traditional for loop
- .map() runs a function on every item and returns a new ARRAY of THE SAME LENGTH, map = transform
- .filter() runs a function on every item and returns a new array containing only the items where the condition was true, filter = keep / discard
- .reduce() takes an array and reduces it down to a single value, which could be a number / object or any single value.
- It has 2 components accumulator/count and item. The accumulator is the running total that updates each iteration, and item is the current item
- Practiced git branching to create a copy of the code to experiment without affecting the main branch

## Day 6

- Synchronous vs Asynchronous — sync waits for each line, async starts a task and moves on, comes back when done
- Callbacks — the old way, pass a function to run when the task finishes, gets messy with nesting
- Promises — represent a future value, three states: pending, fulfilled, rejected
- resolve / reject — resolve flips a Promise to fulfilled with a value, reject flips it to rejected with an error
- async/await — modern syntax built on Promises, reads like synchronous code, await pauses inside the function only
- try/catch — intercepts errors from rejected Promises instead of crashing, you'll wrap every Supabase call in this
- The Supabase pattern — every DB call returns { data, error }, always check error before using data