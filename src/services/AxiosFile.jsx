import axios from 'axios';


const BASE_URL = '';


// GET function
export const getData = async (url) => {
  try {
    const response = await axios.get(url);
    console.log('GET response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error in GET request:', error);
  }
};

// POST function
export const postData = async (newData) => {
  try {
    const response = await axios.post(BASE_URL, newData);
    console.log('POST response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error in POST request:', error);
  }
};

// PATCH function
export const patchData = async (id, updatedData) => {
  try {
    const response = await axios.patch(`${BASE_URL}/${id}`, updatedData);
    console.log('PATCH response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error in PATCH request:', error);
  }
};

// DELETE function
export const deleteData = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    console.log('DELETE response:', response.status === 200 ? 'Deleted successfully' : 'Failed');
    return response.data;
  } catch (error) {
    console.error('Error in DELETE request:', error);
  }
};
