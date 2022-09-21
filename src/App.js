import "./App.css";

import LoadingBar from "react-top-loading-bar";
import React from "react";
import Navbar from "./component/Navbar";
import News from "./component/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NOT_SECRET_CODE;

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <LoadingBar color="#f11946" height={3} progress={progress} />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                pageSize={pageSize}
                country="in"
                category="general"
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                pageSize={pageSize}
                country="in"
                category="business"
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                pageSize={pageSize}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            path="/general"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                pageSize={pageSize}
                country="in"
                category="general"
              />
            }
          />

          <Route
            path="/health"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                pageSize={pageSize}
                country="in"
                category="health"
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                pageSize={pageSize}
                country="in"
                category="science"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                pageSize={pageSize}
                country="in"
                category="sports"
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                pageSize={pageSize}
                country="in"
                category="technology"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
