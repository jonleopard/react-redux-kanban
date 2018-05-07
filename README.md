# Snips Challenge Overview

Objective: Create a kanban like board where users can add, remove, and organize both columns and word definitions.

A single column will have a name. A column will also contain a list of definitions. A definition will be contained inside of a Card component. Both the title, and Card component can be modified. Each column can be arranged within the Container component, and each Card can be arranged inside of the column.

An add column component will display to the right of an existing column. By clicking on 'add column', a new column will render and the user will need to give a title to that column.

By clicking on a certain area of the Card component (I have not yet decided where this will be), the breadcrumb path will update with the corresponding card that was clicked on, and a new column container will render (with new columns, if any, that were added). According to the project, the json can be infinitively deep.

### Tasks

* [x] Create a project overview to get an idea of how the React components should be structured.
* [x] Start to build UI
* [x] Think about state and how we are going to handle state.
* [ ] Think about how to handle routing once a user starts nesting data.
* [ ] Add interactivity to the app.

### Challenges

* State management

In order to implement any interactivity, we must first structure and organize our state. I chose Redux to tackle this issue as its the most commonly used state manager. I am still wrapping my head around this, and am also still working on properly use reducers, action dispatchers, etc. I'm using Redux with [Redux-Thunk](https://github.com/gaearon/redux-thunk) at the moment.

* Routing

React router will most likely be used here. This will help us handle which components will render, and will give us history props for both the URL, and breadcrumbs. No further thoughts on this until project matures.

### What I've Learned

I was not very familiar with Redux prior to this project. Normally I use setState, but due to the nature of this project, I feel it is better to use Redux.

### What I'm Currently Working On

1.  Implementing [Redux](https://redux.js.org/) for state
2.  Adding interactivity with [react-dnd](https://github.com/react-dnd/react-dnd)
3.  Improving the UI/UX as the project matures
4.  If needed, improving/refactoring component naming
5.  Indicating to the user that a card and column are movable.

### Closing Notes

As mentioned to Jonas, the project is not yet finished. My deadline was today (one week from last Monday). I've included a diagram that I've been building on as the project matures.

That said, I have thoroughly enjoyed tackling this challenge, and will continue to try my hardest to implement the interactivity of the app. Any thoughts or input the team may have for me would be great!

### Project Diagram

<img src="screenshot.png" width="888">
