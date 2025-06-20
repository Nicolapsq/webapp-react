import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from "./layouts/DefaultLayout";

import HomePage from "./pages/HomePage";

import MovieDetailPage from "./pages/MovieDetailPage";

import MovieCommentPage from "./pages/MovieCommentPage";
// importo da context
import { LoaderProvider } from "./context/LoaderContext";

export default function app() {
  return (
    <>
      <LoaderProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/movies/:id" element={<MovieDetailPage />}></Route>
              <Route path="/movies/:id/comment" element={<MovieCommentPage />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </LoaderProvider>
    </>
  );
}
