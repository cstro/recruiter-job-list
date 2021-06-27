# Job listing

The page shows a list of matched jobs with basic information like the job title and salary, along with the information of the job's recruiter. The data comes from a local

## Design

### UI

The design was done in browser and I based it roughly on examples from a [dribbble](https://dribbble.com/) search for "results list". From this I just decided by eye what I felt looked good and displayed the relevant information.

TODO: I decided to include the basic recruiter information on results card

### Structure

TODO: talk about app folder structure

## Libraries & packages

### React

I choose to use React as the framework because I have the most experience using this and, as the most popular JS framework, it's the easiest one to find information and 3rd party packages for online.

### Tailwind

I used the css framework [tailwindcss](https://tailwindcss.com/) as I've found it's utility first design enables developers to create UI's very quickly by  taking away the decision of where or how to split styling into classes. It also works really well with modern component orientated frameworks due to naturally creating components to encapsulate styling which mitigates the need for css classes.

### Redux

TODO

## Testing approach

- Unit test on utils
- Integration style testing with testing library
- Cypress testing on UI

# Todo list / ideas

- [x] Display data in a list
- [x] Add linting
- [x] Add filtering (recruiter, status, salary range)
- [ ] Add sorting
- [] Dark mode
- [] Search bar
- [] No results message

https://dribbble.com/shots/14527906-Job-offers-board/attachments/6215154?mode=media
