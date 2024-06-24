# Movie Watchlist App 🎬

## Overview
The Movie Watchlist application is a web-based tool that allows users to manage a list of movies they want to watch. Users can add, edit, and delete movies from their watchlist, mark movies as watched or unwatched, and rate and review movies. State management is handled using Redux to ensure efficient and predictable state updates.

## Deployed App 🖊️
#### Frontend:https://invact-movie-app.vercel.app/
#### Backend: https://invact-movie-app-b8hz.onrender.com/


## Features
- **Add Movies:** Users can add movies to their watchlist by providing details such as the movie title, description, release year, genre, rating, and review.
- **Edit Movies:** Users can edit the details of movies already in their watchlist.
- **Delete Movies:** Users can delete movies from their watchlist.
- **Mark Movies as Watched/Unwatched:** Users can toggle the status of a movie between watched and unwatched.
- **Rate and Review Movies:** Users can rate movies on a scale of 1 to 10 and provide a text review for each movie.
- **State Management with Redux:** All state changes (adding, editing, deleting movies, marking as watched/unwatched, rating, and reviewing) are managed using Redux.

## Technologies Used ✍️

- **Frontend:** 
  - React.js for building the user interface.
  - Redux for state management.
  - Bootstrap for styling and UI components.
  - React-Bootstrap for integration with Bootstrap.
  - React-Toastify for notifications.

- **Backend:** 
  - Mock API using JSON server or a similar tool for the initial implementation.
  - Optionally, a Node.js/Express server if a custom backend is needed later.

- **Database:** 
  - MongoDB Atlas for storing movie data in the initial phase.
  -  MongoDB Atlas for maintaining various CRUD opearions of App.


## Video Demonstration📽️


https://github.com/MayankBelwal05/Invact-Movie-app/assets/147751671/30974f01-490a-4e62-8bcd-aaafbcdfb89d



## Sample Design 🖊️
Below are some sample designs for the Movie Watchlist app. Feel free to enhance the UI as you see fit.

### MovieList

![12](https://github.com/MayankBelwal05/Invact-Movie-app/assets/147751671/548b29ef-13d7-4907-8873-db1a2b2e4072)

### AddMovie

![12345](https://github.com/MayankBelwal05/Invact-Movie-app/assets/147751671/5e2470c2-d562-43fd-ada6-a873c858956e)

### Watched

![123](https://github.com/MayankBelwal05/Invact-Movie-app/assets/147751671/b06a4643-9e9c-421a-8c6f-f6247d1432a0)

### Unwatched

![1234](https://github.com/MayankBelwal05/Invact-Movie-app/assets/147751671/e203e1ab-28ad-4c3a-8f74-0aabcc0ead2d)



## Setup and Installation
1. **Clone the repository:**
    ```sh
    git clone https://github.com/MayankBelwal05/Invact-Movie-app.git
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Start the development server:**
    ```
    cd backend
    npm run server
    ```

     ```
     cd frontend
    npm run dev
    ```

## Usage

1. **Add Movie:** Use the form to add a new movie to your watchlist.
2. **Edit Movie:** Edit movie details by clicking on the edit button.
3. **Delete Movie:** Remove a movie from your watchlist by clicking on the delete button.
4. **Mark as Watched/Unwatched:** Toggle the watched status of a movie.
5. **Rate and Review Movie:** Provide a rating and review for a movie.

## API
This app utilizes a mock API or MongoDB preloaded data for fetching and manipulating movie data.

## Responsive Design
The app is designed to be responsive and provides an optimal viewing experience across a wide range of devices.

- **Desktop:** Full-featured view with detailed movie information.
- **Tablet:** Adjusted layout for medium-sized screens.
- **Mobile:** Simplified and touch-friendly interface.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## Thank You! 🎉
