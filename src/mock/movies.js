const mockMovies = [
  {
    "id": "0",
    "comments": ['1', '2', '3'],
    "film_info": {
      "actors": ['Morgan Freeman ', 'Edward Norton', 'Al Pacino', 'Michael Caine', 'Matt Damon', 'Brad Pitt', 'Robert De Niro', 'Cillian Murphy', 'Gary Oldman'],
      "age_rating": 18,
      "alternative_title": "Friends In The Room",
      "description": "Oscar-winning film, a film about a journey that heroes are about to make in finding themselves, with the best fight scenes since Bruce Lee.",
      "director": "Brad Bird",
      "duration": 142,
      "genre": ['Sci-Fi', 'Thriller'],
      "poster": "images/posters/popeye-meets-sinbad.png",
      "release": {
        "date": "2002-06-12T01:51:20.898Z",
        "release_country": "China"
      },
      "title": "A Little Pony In The Carpet",
      "total_rating": 9.9,
      "writers": ['Quentin Tarantino', 'Stephen King'],
    },
    "user_details": {
      "already_watched": false,
      "favorite": false,
      "watching_date": "2023-02-17T11:13:45.609Z",
      "watchlist": false,
    }
  },
  {
    "id": "1",
    "comments": ['4', '5', '6', '7', '8'],
    "film_info": {
      "actors": ['Gary Oldman', 'Brad Pitt', 'Matt Damon', 'Edward Norton', 'Michael Caine', 'Takeshi Kitano'],
      "age_rating": 6,
      "alternative_title": "A Shark Without The Carpet",
      "description": "a film about a journey that heroes are about to make in finding themselves, with the best fight scenes since Bruce Lee.",
      "director": "Clint Eastwood",
      "duration": 127,
      "genre": ['Drama', 'Horror', 'Sci-Fi'],
      "poster": "images/posters/the-dance-of-life.jpg",
      "release": {
        "date": "2014-11-14T05:15:28.304Z",
        "release_country": "Russia"
      },
      "title": "A Little Pony Who Stole The Void",
      "total_rating": 7,
      "writers": ['Brad Bird', 'Martin Scorsese', 'Robert Zemeckis', 'Stephen King', 'Robert Rodrigues'],
    },
    "user_details": {
      "already_watched": false,
      "favorite": true,
      "watching_date": "2022-08-06T11:13:45.609Z",
      "watchlist": true,
    }
  },
  {
    "id": "2",
    "comments": ['9', '10', '11'],
    "film_info": {
      "actors": ['Edward Norton', 'Ralph Fiennes', 'Cillian Murphy', 'Michael Caine', 'Harrison Ford', 'Tom Hanks', 'Takeshi Kitano', 'Matt Damon'],
      "age_rating": 18,
      "alternative_title": "A Man Of Themselves",
      "description": ".",
      "director": "Akira Kurosawa",
      "duration": 96,
      "genre": ['Action', 'Horror'],
      "poster": "images/posters/sagebrush-trail.jpg",
      "release": {
        "date": "2013-06-25T02:57:37.298Z",
        "release_country": "Russia"
      },
      "title": "Laziness Who Bought The Darkness",
      "total_rating": 8.2,
      "writers": ['Quentin Tarantino', 'Takeshi Kitano', 'Martin Scorsese', 'Stephen King'],
    },
    "user_details": {
      "already_watched": false,
      "favorite": false,
      "watching_date": null,
      "watchlist": false,
    }
  },
  {
    "id": "3",
    "comments": ['12', '13', '14', '15'],
    "film_info": {
      "actors": ['Al Pacino'],
      "age_rating": 18,
      "alternative_title": "Raiders In The Floor",
      "description": "Oscar-winning film, true masterpiece where love and death are closer to heroes than their family, a film about a journey that heroes are about to make in finding themselves, with",
      "director": "Quentin Tarantino",
      "duration": 63,
      "genre": ['Thriller', 'Animation', 'Action'],
      "poster": "images/posters/the-dance-of-life.jpg",
      "release": {
        "date": "2023-08-14T21:41:14.311Z",
        "release_country": "Japan"
      },
      "title": "Family In The Storm",
      "total_rating": 8.5,
      "writers": ['Robert Zemeckis', 'Stephen King', 'Stephen Spielberg'],
    },
    "user_details": {
      "already_watched": true,
      "favorite": false,
      "watching_date": "2022-06-14T11:13:45.609Z",
      "watchlist": false,
    }
  },
  {
    "id": "4",
    "comments": ['16', '17', '18', '19'],
    "film_info": {
      "actors": ['Michael Caine', 'Al Pacino', 'Matt Damon', 'Ralph Fiennes', 'Edward Norton', 'Christian Bale'],
      "age_rating": 18,
      "alternative_title": "A Man Of The Wall",
      "description": "true masterpiece where love and death are closer to heroes than their family, a film about a journey that heroes are about to make in finding themselves.",
      "director": "Chrostopher Nolan",
      "duration": 91,
      "genre": ['Comedy', 'Thriller'],
      "poster": "images/posters/made-for-each-other.png",
      "release": {
        "date": "2008-04-07T20:35:34.917Z",
        "release_country": "China"
      },
      "title": "Raiders Who Sold Himself",
      "total_rating": 4.1,
      "writers": ['Robert Zemeckis', 'Quentin Tarantino', 'Stephen King'],
    },
    "user_details": {
      "already_watched": true,
      "favorite": false,
      "watching_date": "2023-02-18T11:13:45.609Z",
      "watchlist": false,
    }
  },
  {
    "id": "5",
    "comments": ['20', '21', '22'],
    "film_info": {
      "actors": ['Leonardo DiCaprio', 'Al Pacino', 'Matt Damon', 'Cillian Murphy', 'Ralph Fiennes'],
      "age_rating": 6,
      "alternative_title": "A Little Pony Of The Floor",
      "description": "a war drama about two young people, from the creators of timeless classic \"Nu, Pogodi!\" and \"Alice in Wonderland\", with the best fight scenes since Bruce Lee.",
      "director": "Chrostopher Nolan",
      "duration": 90,
      "genre": ['Comedy', 'Adventure', 'Horror', 'Drama', 'Family'],
      "poster": "images/posters/the-dance-of-life.jpg",
      "release": {
        "date": "2004-12-23T11:40:35.709Z",
        "release_country": "Finland"
      },
      "title": "A Man Of The Storm",
      "total_rating": 9.8,
      "writers": ['Robert Rodrigues', 'Quentin Tarantino', 'Stephen Spielberg'],
    },
    "user_details": {
      "already_watched": true,
      "favorite": false,
      "watching_date": "2022-07-22T11:13:45.609Z",
      "watchlist": true,
    }
  },
  {
    "id": "6",
    "comments": ['23', '24', '25', '26', '27', '28'],
    "film_info": {
      "actors": ['Leonardo DiCaprio'],
      "age_rating": 18,
      "alternative_title": "Friends Within Themselves",
      "description": "Oscar-winning film, a war drama about two young people, true masterpiece where love and death are closer to heroes than their family, from the creators of timeless classic",
      "director": "Akira Kurosawa",
      "duration": 149,
      "genre": ['Drama'],
      "poster": "images/posters/the-man-with-the-golden-arm.jpg",
      "release": {
        "date": "2017-08-12T14:07:40.549Z",
        "release_country": "Spain"
      },
      "title": "A Tale Of A Little Bird Who Sold The Room",
      "total_rating": 8.5,
      "writers": ['Quentin Tarantino'],
    },
    "user_details": {
      "already_watched": true,
      "favorite": false,
      "watching_date": "2022-09-15T11:13:45.609Z",
      "watchlist": true,
    }
  },
  {
    "id": "7",
    "comments": ['29', '30', '31', '32', '33'],
    "film_info": {
      "actors": ['Matt Damon', 'Takeshi Kitano', 'Morgan Freeman ', 'Tom Hanks', 'Al Pacino'],
      "age_rating": 0,
      "alternative_title": "Guest Who Saw The Room",
      "description": "Oscar-winning film, from the creators of timeless classic \"Nu, Pogodi!\" and \"Alice in Wonderland\", a film about a journey that heroes are about to make in finding themselves.",
      "director": "James Cameron",
      "duration": 173,
      "genre": ['Comedy', 'Action', 'Sci-Fi', 'Adventure', 'Horror', 'Animation'],
      "poster": "images/posters/sagebrush-trail.jpg",
      "release": {
        "date": "2004-06-15T16:56:12.449Z",
        "release_country": "Germany"
      },
      "title": "Raiders Who Stole The Darkness",
      "total_rating": 4.2,
      "writers": ['Robert Rodrigues', 'Hayao Miazaki', 'Martin Scorsese'],
    },
    "user_details": {
      "already_watched": true,
      "favorite": false,
      "watching_date": "2022-08-15T11:13:45.609Z",
      "watchlist": false,
    }
  },
  {
    "id": "8",
    "comments": ['34', '35', '36', '37', '38'],
    "film_info": {
      "actors": ['Harrison Ford', 'Cillian Murphy', 'Morgan Freeman ', 'Matt Damon', 'Ralph Fiennes', 'Al Pacino'],
      "age_rating": 0,
      "alternative_title": "Pioneers Who The Storm",
      "description": "Oscar-winning film, from the creators of timeless classic \"Nu, Pogodi!\" and \"Alice in Wonderland\", a film about a journey that heroes are about to make in finding themselves.",
      "director": "Alejandro Gonsales Inarritu",
      "duration": 94,
      "genre": ['Thriller'],
      "poster": "images/posters/sagebrush-trail.jpg",
      "release": {
        "date": "1999-11-16T19:41:08.230Z",
        "release_country": "Germany"
      },
      "title": "A Tale Of A Little Bird On Us",
      "total_rating": 6.4,
      "writers": ['Stephen King', 'Quentin Tarantino', 'Robert Zemeckis', 'Takeshi Kitano', 'Robert Rodrigues'],
    },
    "user_details": {
      "already_watched": true,
      "favorite": false,
      "watching_date": "2022-05-02T11:13:45.609Z",
      "watchlist": false,
    }
  },
  {
    "id": "9",
    "comments": ['39', '40', '41', '42', '43'],
    "film_info": {
      "actors": ['Brad Pitt', 'Robert De Niro', 'Takeshi Kitano', 'Christian Bale'],
      "age_rating": 6,
      "alternative_title": "Friends Who Stole Themselves",
      "description": "true masterpiece where love and death are closer to heroes than their family, a film about a journey that heroes are about to make in finding themselves, with the best",
      "director": "Brad Bird",
      "duration": 109,
      "genre": ['Drama', 'Adventure', 'Animation', 'Family', 'Sci-Fi', 'Horror'],
      "poster": "images/posters/the-great-flamarion.jpg",
      "release": {
        "date": "1999-02-02T03:33:00.180Z",
        "release_country": "Japan"
      },
      "title": "A Little Pony In The Room",
      "total_rating": 4.1,
      "writers": ['Martin Scorsese', 'Brad Bird', 'Takeshi Kitano', 'Quentin Tarantino'],
    },
    "user_details": {
      "already_watched": true,
      "favorite": false,
      "watching_date": "2022-12-03T11:13:45.609Z",
      "watchlist": false,
    }
  },
];

export {mockMovies};
