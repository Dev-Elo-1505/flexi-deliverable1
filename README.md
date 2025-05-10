# 🎬 Movie Watchlist Web App - Deliverable 1

This is a simple web application built with HTML, CSS and Javascript (ES6+) that allows users to create a personal movie watchlist. Users can input the movie title, genre, duration (in hh:mm:ss format), and personal rating. The app displays the list of added movies and calculates the total watch time. All data is saved using localStorage, so your list stays even after reloading the page.

## 🚀 Features
- Add movies with title, genre, rating, and duration.
- Display the total watch time in hh:mm:ss format.
- Remove individual movies from the list.

## 📦 Technologies Used
- HTML
- CSS
- JavaScript (ES6+)

## 🧠 JavaScript Concepts & ES6 Features Used
1. let and const
- let was used for variables that may change (e.g. hours, minutes, seconds).
- const was used for variables that don’t get reassigned (e.g. references to DOM elements, fixed functions like reset and displayMovies).
2. Arrow Functions
- Used for cleaner function expressions
3. Scope
- Variables are scoped properly within functions to avoid polluting the global namespace and ensure better structure.
4. Objects
- Each movie is stored as an object
5. Arrays and Array Methods
- map() to render the movie rows
- reduce() to sum total watch time in seconds
- forEach() to attach event listeners to delete buttons
- splice() to remove a movie from the array

### It therefore delivers every outcome expected in deliverable 1.
