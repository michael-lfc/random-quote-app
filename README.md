**Random Quotations App**

A React app that fetches random quotes from a public API. Users can filter quotes by tags, select multiple quotes, and search by author. Fully responsive and styled for a clean, professional look.

Live Demo: https://random-quote-app-five.vercel.app/

**Features**

Fetch available tags on app load.

Select one or multiple tags to fetch quotes dynamically.

Display multiple quotes at once (user can choose the number).

Fetch quotes by a specific author.

Handles cases when no quotes are returned for a tag or combination.

Clean, responsive UI.

**Tech Stack**

React (Hooks: useState, useEffect)

JavaScript (ES6+)

HTML & CSS

Fetch API for HTTP requests

**Getting Started**

**Clone the repository:**

git clone https://github.com/michael-lfc/quotes-app.git


**Navigate to the project folder:**

cd quotes-app


**Install dependencies:**

npm install


**Start the development server:**

npm run dev


**Open the app in your browser** 

http://localhost:5173

**API Endpoints**

**Get Available Tags
Fetch all available tags for filtering quotes.**

GET https://api.quotable.io/tags


**Example response:**

[
  { "_id": "1", "name": "inspirational", "slug": "inspirational" },
  { "_id": "2", "name": "love", "slug": "love" }
]


**Get a Quote by Tag(s)
Fetch a random quote for one or multiple comma-separated tags.**

GET https://api.quotable.io/random?tags={tag1},{tag2},...


**Example:**

GET https://api.quotable.io/random?tags=inspirational,love


**Example response:**

{
  "_id": "abc123",
  "content": "The best way to get started is to quit talking and begin doing.",
  "author": "Walt Disney",
  "tags": ["inspirational"]
}


**Get Multiple Quotes (optional challenge)
Fetch multiple quotes at once (up to 50)**.

GET https://api.quotable.io/quotes?tags={tag1},{tag2}&limit={number}


**Example:**

GET https://api.quotable.io/quotes?tags=inspirational&limit=3


**Get Quotes by Author (optional challenge)
Fetch all quotes by a specific author.**

GET https://api.quotable.io/quotes?author={authorName}


**Example:**

GET https://api.quotable.io/quotes?author=Walt Disney

**Optional Features Implemented**

Multiple tag selection

Multiple quotes display (up to 10)

Quotes by author

Handles empty results gracefully

**Notes**

This project demonstrates:

Fetching remote data using React Hooks (useEffect)

Handling dynamic user input with useState

Updating the UI dynamically based on API responses

Clean and responsive styling for a professional look
