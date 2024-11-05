// src/workoutService.js
const API_URL = import.meta.env.VITE_RAPID_API_URL;

const headers = {
  'X-RapidAPI-Host': import.meta.env.VITE_RAPID_API_HOST,
  'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
};

// Function to fetch body parts
export const fetchBodyParts = async () => {
  const response = await fetch(`${API_URL}/bodyPartList`, {
    method: 'GET',
    headers,
  });

  if (!response.ok) {
    throw new Error('Failed to fetch body parts');
  }

  return response.json();
};

// Function to fetch workouts by body part
export const fetchWorkoutsByBodyPart = async (bodyPart) => {
  const response = await fetch(`${API_URL}/bodyPart/${bodyPart}`, {
    method: 'GET',
    headers,
  });

  if (!response.ok) {
    throw new Error('Failed to fetch workouts for the specified body part');
  }

  return response.json();
};

// Function to fetch a single workout by ID
export const fetchWorkoutById = async (id) => {
  const response = await fetch(`${API_URL}/exercise/${id}`, {
    method: 'GET',
    headers,
  });

  if (!response.ok) {
    throw new Error('Failed to fetch workout details');
  }

  return response.json();
};
