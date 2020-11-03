# Instructions for how to run this code locally

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To run locally:

- Clone the repo
- Run npm install
- Run npm start
- This will open up localhost:3000 with this application running.

# Brief description of your process

I chose to implement this in React because it has a robust ecosystem, strong support, and I've used it before. I used material-ui for my component library because it is easy to use and looks good with little effort. Similarly, I chose react-router to handle client side routing because it is easy to set up and use with little configuration.

I didn't deviate much from the wireframe provided. I did implement a form that allows the adding of a new member. I would have liked to ask the design team about how they would have designed this screen and how they would like it to behave. I would also have liked to ask the design team if the "Marketplace" title in the navbar should be a link to the homescreen. I kept clicking it while testing, so I implemented that.

# Brief spec of how you would implement "Remove" and "Edit" a household member

For remove, I would add an action to the "Card" that shows the person on the home screen. Something like a "Delete" button. I would then add a function to "hooks.js:useMembers" that accepts the index of that person in the "members" array, removes the object at that index, and returns the new array.

For editing, similarly, I would add a button and a function to the custom useMembers hook. That function would take an array index of person object to change and the new values of their attributes. It would return a new array with the modification done. I would also need to make changes to the "Add.js" component/screen to accept initial values so it could also be the form used for editing.
