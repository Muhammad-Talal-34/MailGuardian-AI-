// src/services/api.js
import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api';

export const predictSpam = async (text) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/predict/`, { text });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || 'Failed to connect to the prediction server.'
    );
  }
};