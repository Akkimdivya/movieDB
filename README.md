# MovieDB Web Panel

## Introduction

This project is a single-page web panel consisting of four different pages and a global search in the Navbar. The pages include:

- Home Page / Popular Movie Page
- Top Rated Page
- Upcoming Movie Page
- Single Movie Detail Page
- Searched Movie Page (UI will be the same as Home Page)
API Details
Generate your own API key by visiting The Movie DB API.

# Endpoints
## Get all popular movies:
- https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1
# Get movie details: 
- https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US
# Get movie cast details: 
- https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US
# Get upcoming movies:
-https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1
# Get top-rated movies:
- https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1
# Get search results:
- https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${movie_name}&page=1
# Image Path
For images, you need to add a base domain:
- https://image.tmdb.org/t/p/w500
## Example:
- https://image.tmdb.org/t/p/w500/bcCBq9N1EMo3daNIjWJ8kYvrQm6.jpg
