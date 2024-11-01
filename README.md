# Challanges Outline

The challanges should be adressing beginners. Therefore, the first week shall function as a introduction to the world of competitive programming challanges.
Additionally, there should be an optional intro for ppl, who have not used this system yet.

## Concepts of the Tutorial

- What is the goal:
  - having fun solving riddles
  - riddle presents a relation of inputs to a specific output
  - the user has to implement the solution using JS.
  - One can do this directly in the browsers (TODO: or locally using these endpoints (TODO: create a template for sending requests to the server))
- Intro to the submission system:
  - a sample riddle is displayed
    - it is explained how testcases are started:
      - some code will allways provided
      - the the first line (comment) will indicate how the test runner will start the code
      - the code should be written in JavaScript (see later)
      - the result shall be returned as the result of the function call.
    - One can select which testcase to perform or run all testcases
    - The

## Basics of the tutorial:

- test evaluation
- basic operations
  - primitve datatypes:
    - number
    - string
  - iterate over elements
- logging

## Concepts needed within the first week:

- conditions, checks
- for each loop
-

# Setup

This is project is a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli) and Node. Please setup Node first.

## Developing

Once you've cloned the repository and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

Currently, Vercel is used to deloy the website.
