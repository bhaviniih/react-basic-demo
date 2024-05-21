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

// EXPORTING TYPE OF THUNK DISPATCH
export type AppDispatch = typeof store.dispatch

// EXPORTING TYPE OF ROOT STATE 
export type RootState = ReturnType<typeof store.getState>

export default App;
