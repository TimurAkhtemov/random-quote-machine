import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  quote: '',
  author: '',
};

const quoteSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {
    setQuote: (state, action) => {
      state.quote = action.payload.quote;
      state.author = action.payload.author;
    }
  }
});

export const { setQuote } = quoteSlice.actions;

const store = configureStore({
  reducer: quoteSlice.reducer
});

export const fetchQuote = () => async (dispatch) => {
  const response = await fetch('https://quote-garden.onrender.com/api/v3/quotes/random');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  const quote = data.data[0].quoteText;
  const author = data.data[0].quoteAuthor;
  dispatch(setQuote({ quote, author }));
};

export default store;
