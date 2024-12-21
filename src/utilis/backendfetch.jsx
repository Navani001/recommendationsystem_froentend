import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:5000';

export const searchMovies = async (movie) => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: { movie },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching search data:', error);
    throw error;
  }
};

export const fetchDescription = async (desc) => {
  try {
    const response = await axios.get(`${BASE_URL}/des`, {
      params: { desc },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching description data:', error);
    throw error;
  }
};

export const fetchHistoricalData = async (username, movie) => {
  console.log(username)
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: { username, movie },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching historical data:', error);
    throw error;
  }
};
