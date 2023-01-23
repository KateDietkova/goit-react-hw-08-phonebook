import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      toast.error(`Something went wrong :(`);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkApi) => {
    try {
      const response = await axios.post('/contacts', contact);
      toast.success(`Successful added contact`);
      return response.data;
    } catch (error) {
      toast.error(`Something went wrong :(`);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkApi) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      toast.success(`You deleted contact`);
      return response.data;
    } catch (error) {
      toast.error(`Something went wrong :(`);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);


export const updateContact = createAsyncThunk(
  'contact/update',
  async ({id, name, number}, thunkApi) => {
    try {
      const {data}= await axios.patch(`/contacts/${id}`, { name, number });
      return data;
    } catch (error) {
      toast.error(`Something went wrong in update contact:(`);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
