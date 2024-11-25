import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ExamplePage } from "../pages/ExamplePage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { ProtectedRoute } from "./components/ProtectedRoute";
import HomePage from "../pages/HomePage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/login" element={<ExamplePage />} />
        <Route path="/" element={<HomePage />} />

        {/* Protected routes (need login) */}
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<ExamplePage />} />

        </Route>

        {/* Not found route*/}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
