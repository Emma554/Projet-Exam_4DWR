import { createRoot } from "react-dom/client";
import { useState } from "react"
import Posts from "./components/Posts"
import Details from "./Details"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import SearchFields from "./components/SearchFields";
const App = () => {
  
  const [searchValue, setSearchValue] = useState("")
  return (
    <div className="container">
      <BrowserRouter>
        <Link style={{ textDecoration: "none" }} to="/">
          <h1 className="title">Liste des posts</h1>
        </Link>
        <Routes>
          <Route path="/:id" element={<Details />} />
          <Route
            path="/"
            element={
              <>
                <SearchFields searchValue={searchValue} setSearchValue={setSearchValue} />
                <Posts searchValue={searchValue} />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);