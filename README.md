# Carbon React Challenge

> 👋 Please read this document first to get started!

There are two parts to this coding challenge. You are to complete them both.

Part 1 is based on problems we often encounter in our support Slack channels. It revolves around the use of one of our core components: `MultiSelect`.

Part 2 builds on part 1 by requiring the use of a utility function and React hook to create new UI elements which leverage the data from the `MultiSelect` component in part 1.

## The goal 🏆

Take the information given in the prompts, and deliver working code that fulfills all the acceptance criteria below.

This challenge will roughly take between 1 and 3 hours.

Your final solution should be submitted back to IBM within 24 hours of starting.

## Part 1 🚀

Pretend you’re working on a React-based software product that uses the Carbon Design System via `@carbon/react`. You’ve been requested to develop a new “Select All” feature using the `MultiSelect` component. The `MultiSelect` component does not have this feature by default, but it can be built using the existing API/props.

### Acceptance Criteria ✅

The following requirements must be satisfied:

- The user is provided information about the purpose of the multi-select element.
- The user can select and deselect individual toppings/items.
- The user can select all items in the list by selecting “Select all”.
- After selecting “Select all”, the user can deselect individual toppings/items.
  - The “Select all” item should automatically be deselected as well since not all items are selected anymore.
- The user can not select disabled items and disabled items are not selected when "Select all" is selected.
- The `MultiSelect` is styled in the following ways:
  - Centered on the page.
  - Given a vertical margin of `$spacing-09`.
  - Does not expand to be greater than `300px` in width.
- The order of items in the `MultiSelect` should be fixed; they should not reorder in response to items being selected/de-selected.

### Additional notes 📝

- There is a predefined array of properly formatted `items` in `topping-data.js`. Use this list of items for the `MultiSelect`.

### Bonus 🌟

This challenge does not satisfy every use case of “Select all” functionality. You can take notes of how you might like to improve the functionality beyond what's expected.

Here's a demo video of the expected solution to part 1:

![Select all demo](https://github.com/carbon-design-system/carbon/assets/3360588/1d6e2043-e709-45ba-9e4b-e861dfb7d5fe)

## Part 2 🚀

A function called `applyToppings()` has been provided in `topping-utils.js`. Call this function each time the selection set from the `MultiSelect` in part 1 is updated, passing it the currently selected set of toppings. This will simulate submitting topping selections to a remote server.

Note: `applyToppings` is asynchronous and has a 1 in 3 chance of throwing an `Error` when called. This `Error` should be handled by indicating to the user that their request to apply the toppings failed and that they should try again. You can design the user interface for this message however you'd like.

A `useToppings` hook is available in `topping-utils.js` and provides a way to access topping data from an imaginary remote server. It is updated periodically with the latest selected topping data.

Use this hook and create one or more React components which render the toppings as a set of topping "categories". Each category should have a header displaying the category name and one or more toppings listed underneath it.

Note: The `category` of each topping can be obtained from the `category` key found in each entry returned by the `useToppings` hook. Not all toppings may have a `category` defined.

### Acceptance criteria

- A set of topping categories should show up under the `MultiSelect` indicating the selected toppings.
- No empty topping categories should show up on the UI.
- Categories should be alphabetized on the UI.
- Toppings should be alphabetized within their respective categories.
- Elements should not expand to be greater than `300px` in width.
- Elements should have a margin between them of `$spacing-09`.
- When `applyToppings` fails, an error should be shown.
- When `applyToppings` succeeds, no error should be shown to the user.

Here's a demo video of the expected solution to part 2:

![Part 2 challenge demo](https://github.com/carbon-design-system/carbon/assets/51208233/c1c6c817-42e9-4af5-abb5-679e774ee2d7)

### Bonus 🌟

- Use Carbon components to style the error message.
- Use Carbon components to style the toppings categories.

## Resources 🔗

- Developer documentation for `@carbon/react` components can be found in [the storybook](https://react.carbondesignsystem.com/).
- Documentation for Carbon Design System as a whole can be found on [our website](https://carbondesignsystem.com).

## Running locally 👩‍💻

1. Download the project `.zip` file and extract it.
2. Run `npm install` to install all project dependencies.
3. Run `npm run dev` to start the Vite development server.
4. Open `http://localhost:5173/` in your browser to view the web app.
5. Develop your solution.

## Wrapping up 🏁

Once you've finished the challenge, congratulations! 🎉 We're looking forward to seeing the solution you came up with.

During your interview you'll be expected to talk through how you approached the challenge, walk through your solution, and discuss problems you ran into. We'll also talk through additional questions about how the solution could be enhanced. Here are some example questions:

- If the `items` array was updated to include 100 items, would it present any new user experience (UX) concerns? If so, how could we solve then?
- If the `items` array was updated to include a new "Sausage" topping, would this impact the user experience in any way? If so, what might need to change?
- Given your solution, how could we reduce the number of re-renders that occur?
