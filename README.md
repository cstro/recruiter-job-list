# Job listing

The page shows a list of matched jobs with basic information like the job title and salary, along with the information of the job's recruiter. The data comes from a local json file `src/data.json`.

Hosted through Netlify https://kind-davinci-fdb82b.netlify.app/

## Commands

`yarn`

Install the dependencies.

`yarn start`

Start the local server which runs on localhost:3000 by default.

`yarn test`

Runs the unit tests.

`yarn cypress:open`

Opens the cypress runner and allows you to start the cypress tests. This is hardcoded to point to localhost:3000 in the tests so you need to also be running the dev server.

## Design

### UI

The design was done in browser and I based it roughly on examples from a [dribbble](https://dribbble.com/) search for "results list". From this I just decided by eye what I felt looked good and displayed the relevant information.

### App structure

I followed [the guidance in the Redux best practices style guide](https://redux.js.org/style-guide/style-guide/#structure-files-as-feature-folders-with-single-file-logic) to structure the app by related functionality rather than by related types (e.g. reducers, components, actions in their own folders). This builds on the idea of component driven apps where HTML and JS live together and I found it worked quite well.

## Libraries & packages

### React

I choose to use React as the framework because I have the most experience using this and, as the most popular JS framework, it's the easiest one to find information and 3rd party packages for online. I used the create react package to set the project up quickly.

### Tailwind

I used the css framework [tailwindcss](https://tailwindcss.com/) as I've found it's utility first design enables developers to create UI's very quickly by  taking away the decision of where or how to split styling into classes. It also works really well with modern component orientated frameworks due to naturally creating components to encapsulate styling which mitigates the need for css classes.

### Redux

I used Redux for state management as the jobs and recruiters were shared across all parts of the app and, as I worked on it, I realised the list and the filters were distinct parts and would have forced me to move all the state up into `App.js` which essentially made it global state. It also allowed me to apply the filters cleanly through the use of the selector hooks.

### Craco

I used [Craco](https://github.com/gsoft-inc/craco) to allow me to extend the basic Create React App with my own configuration. This allowed me to add tailwindcss and extend the babel eslint without needing to eject the app.

## Testing approach

I used unit tests to test the utility functions within the application.

I wrote cypress integration tests to test the main functionality of the application. I attempted to apply the principle of not testing the implementation details, but rather testing the user expected functionality of the application.

## Things I'd do better

- Use proper test data for the tests. As the data.json is hardcoded there are some tests that rely on certain data being there, or data appearing in a certain order which would be brittle in a real world app.
- Extend the tests to cover more scenarios and edge cases. In this case I tried to ensure I had at least a vertical slice of tests, but what I've written definitely isn't exhaustive!
- I would add the ability to sort and search the results. I wanted to add this initially but ran out of time to implement it properly.
