
# Mastermind-FE

### Description
- The nextjs frontend for the mastermind project. A user can play a guess game with easy(4 numbers), medium(5 numbers),
  hard(6 numbers), and legendary(7 numbers) difficulty settings. To play, from the Home menu, click `New Game`. In the 
  next page, type in your name and the difficulty from the options mentioned. You have up to 10 attempts to guess the
  right number. If you'd like a hint, click on the `Guess History` dropdown to see your past guesses and the game 
  responses. When you're done, click the `Home` button to return back to the home menu where you'll see your list of 
  active and completed games. Create a new game and play as you'd like.

### Future Improvements
- ~~Add support to give hints~~
- ~~Add a configurable “difficulty level” and adjust the number of numbers that are used~~
- Extend to multi-player - IN PROGRESS
  - Building out backend features. See backend branch `38-add-multi-player-functionality `
  - prior to creating a new game, Users could sign up and then begin a new game with their names. During the game, 
  - turns would exchange between the 2. 
- Keep track of scores
- Add a timer for the entire game, or each guess attempts
- Anything else that you come up with to make the game more fun/interesting that
demonstrates your backend potential!
- write tests

### Getting Started
1) clone project
2) `npm i` to install all dependencies
3) set .env.local variables:
   1) NEXT_PUBLIC_BACKEND_URL=http://127.0.0.1:5000/api
4) `npm run dev`


### Bug Journal
- Running frontend but getting `failed to fetch error`. Error occurred because backend was not running.
- trailing slash on route was missing and caused failed to fetch error.
- Always check the network tab in chrome when a request fails.
- w-44 in boiler plaate preventing dropdown from being full width. Always check the boiler plate.
- have a conditional checker when using `useSWR` to catch when data isLoading

### Refresh / New Topics Learned
- mutate


### Helpful Sites
- https://flowbite.com/docs/forms/radio/
- https://tailwindflex.com/prashant/tailwind-css-radio-button-cards



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

