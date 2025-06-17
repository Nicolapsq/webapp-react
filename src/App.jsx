import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from "./layouts/DefaultLayout";

import HomePage from "./pages/HomePage";

import MovieDetailPage from "./pages/MovieDetailPage";

export default function app() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/movies/:id" element={<MovieDetailPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
