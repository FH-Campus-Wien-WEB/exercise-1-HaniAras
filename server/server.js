const express = require('express')
const path = require('path')
const app = express()

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for data..
app.get('/movies', function (req, res) {
  const movies = [

    {
      Title: "The Bone Collector",
      Released: "1999-11-05",
      Runtime: 118,
      Genres: ["Crime", "Drama", "Mystery"],
      Directors: ["Phillip Noyce"],
      Writers: ["Jeffery Deaver", "Jeremy Iacone"],
      Actors: ["Denzel Washington", "Angelina Jolie", "Queen Latifah"],
      Plot: "A quadriplegic ex-homicide detective and his partner try to track down a serial killer who is terrorizing New York City.",
      Poster: "https://m.media-amazon.com/images/M/MV5BOWY0NjY0M2ItYmNjYy00YWZiLWE3ZjktM2Q3YmU2NWY0YmVmXkEyXkFqcGc@._V1_SX300.jpg",
      Metascore: 45,
      imdbRating: 6.7

    },
    {
      Title: "Matrix",
      Released: "1993-03-01",
      Runtime: 60,
      Genres: ["Action", "Drama", "Fantasy"],
      Directors: [],
      Writers: ["Grenville Case"],
      Actors: ["Nick Mancuso", "Phillip Jarrett", "Carrie-Anne Moss"],
      Plot: "Hitman Steven Matrix is shot, experiences afterlife, gets second chance by helping others. Wakes up, meets guides assigning cases where he aids people using unorthodox methods from past profession.",
      Poster: "https://m.media-amazon.com/images/M/MV5BM2JiZjU1NmQtNjg1Ni00NjA3LTk2MjMtNjYxMTgxODY0NjRhXkEyXkFqcGc@._V1_SX300.jpg",
      Metascore: null,
      imdbRating: 7.2
    },
    {
      Title: "Blindness",
      Released: "2008-10-03",
      Runtime: 121,
      Genres: ["Drama", "Mystery", "Thriller"],
      Directors: ["Fernando Meirelles"],
      Writers: ["José Saramago", "Don McKellar"],
      Actors: ["Julianne Moore", "Mark Ruffalo", "Gael García Bernal"],
      Plot: "A city is ravaged by an epidemic of instant white blindness.",
      Poster: "https://m.media-amazon.com/images/M/MV5BOTZmNWE5YmYtZjVlNi00YzlkLTk1MWUtNTI0ZjcwMTJiYThiXkEyXkFqcGc@._V1_SX300.jpg",
      Metascore: 45,
      imdbRating: 6.5
    }
  ]

  res.json(movies)
})

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")