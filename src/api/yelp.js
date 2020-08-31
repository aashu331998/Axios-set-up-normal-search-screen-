import axios from 'axios';

export default axios.create({

    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:
        'Bearer gAqTUcJPVVWWWlO1wV7-_UIlmmoKH51a2JVybtnvh2g8Rt88EimgvJd5N8ISq6WdDUGYohIb3tTvGse0WTv4jJU8SstU5_7vF-wrQF0Cd6RZBZIeEgWcvBq1MCqbXXYx'
    }
});
