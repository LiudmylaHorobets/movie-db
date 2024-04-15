import { Route, Routes } from "react-router-dom";

import Layout from "./features/Layout/Layout";
// PAGES
import HomePage from "./features/Home/HomePage";
import AboutPage from "./features/About/AboutPage";
import MoviesPage from "./features/Movies/MoviesPage";
import NotFoundPage from "./features/NotFoundPage";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};
