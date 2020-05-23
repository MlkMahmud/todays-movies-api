# todays-movies-api

## About
An API service for movies currently showing and coming soon to cinemas across Nigeria. This API provides detailed information about each movie, including showtimes, release_date, trailers and more.

## Endpoints
- GET [/api/v1/movies](https://todays-movies.herokuapp.com/api/v1/movies)

Response Body
```json
[
    {
        "_id":"5d9efa884ccf7c0004f440df",
        "starring":"Joaquin Phoenix, Robert De Niro, Zazie Beetz, Frances Conroy, Marc Maron, Bill Camp, Glenn Fleshler, Shea Whigham, Brett Cullen, Douglas Hodge, Josh Pais",
        "synopsis":"Failed comedian Arthur Fleck encounters violent thugs while wandering the streets of Gotham City dressed as a clown. Disregarded by society, Fleck begins a slow dissent into madness as he transforms into the criminal mastermind known as the Joker.",
        "genre":["Crime"],
        "rating":"TBC",
        "poster":"https://vivacinemas.com/wp-content/uploads/2019/01/Joker-movie-poster-2019.jpg",
        "trailer":"https://www.youtube.com/watch?v=t433PEQGErc",
        "release_date":"Oct 14",
        "runtime":"2h 0m",
        "showtimes":[{"cinema":"Viva Cinemas, Ibadan","time":["12:40 pm","5:35 pm"]},{"cinema":"Viva Cinemas, Ilorin","time":["1:40 pm"," 4:00 pm"," 8:30 pm"]}],
        "now_showing": true,
        "title": "Joker"
    },
    
    {
        "_id":"5d9efa914ccf7c0004f440fd",
        "starring":"Broda Shaggi, Desmond Elliot, JIDE KOSOKO, Ken Erics, Nairamarley, Regina Daniels, Rita Daniels, Sola Sobowale., Tana Adelana, Wolu Arole",
        "synopsis":"Billionaire Anthony Adewale dies under suspicious circumstance, every member of his family scramble for his wealth! Who is the enemy within? Let’s find out at the cinemas!.",
        "genre":["Coming Soon"],
        "rating":"TBC",
        "poster":"https://silverbirdcinemas.com/wp-content/uploads/2019/09/eneposter.jpg",
        "trailer":"https://www.youtube.com/embed/r5vHSAQC_j8",
        "release_date":"Oct 11",
        "runtime":"1h 35m",
        "showtimes":[],
        "now_showing":false,
        "title":"The Enemy I Know"
    }
    ...
]
```
 - GET [/api/v1/movies/nowshowing](https://todays-movies.herokuapp.com/api/v1/movies/nowshowing) 
 - GET [/api/v1/movies/comingsoon](https://todays-movies.herokuapp.com/api/v1/movies/comingsoon)
 
**Note:** Coming soon and now showing endpoints return the same objects as above, the difference being, that the former's "now_showing" field is false, while the latter's is true. 

## Dependencies
 - [Mongodb](http://mongodb.github.io/node-mongodb-native)
 - [Express](https://expressjs.com)
 
## License
[MIT](./LICENSE)
