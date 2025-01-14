import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import HistoryPage from './pages/HistoryPage';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking/:id" element={<BookingPage />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
