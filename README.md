# Interview coding challenge
In this codebase, we have a "working" platform (a super simple platform). All you can do is click a button to automatically create a new product, and view created products. 
This platform uses ReactJS + Firebase realtime database
When clicking on "Create Product", all the code works and a product does get created. The problem is we cannot see it.
Pay attention to `src/hooks/useProducts.ts` file. we are calling `useFirebase` there, but there is nothing in the `useFirebase` hook right now.
The goal is to first update `useProducts.ts` and implement a fetching mechanism from Firebase realtime database.
After that, the platform should work and you should be able to see the list of products!
If there is enough time during the interview, lets generalize the work we did on `useProducts` into the `useFirebase` hook such that other componenets can share the logic.

# Set up guide:
Run `yarn` to install all dependencies
Run `yarn dev` to start the web server