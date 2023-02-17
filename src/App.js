import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import UserBlog from "./components/pages/UserBlog";
import Users from "./components/pages/Users";
import UserPostForm from "./components/pages/UserPostForm";

import "./styles/normalize.css";
import "./styles/fontawesome.min.css";
import "./styles/main.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<UserBlog />} />
        <Route path="/users/:userId/posts/new" element={<UserPostForm />} />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
