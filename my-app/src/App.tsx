import React from 'react';
import { RouterProvider } from 'react-router-dom';
import route from './Route';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { taskSlice } from './Redux/AddTaskReducer';

const store = configureStore({
  reducer: {
    task: taskSlice.reducer
  }
})

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={route} />
    </Provider>
  );
}

export default App;
