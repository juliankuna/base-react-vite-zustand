import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ExamplePage } from "../pages/ExamplePage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { ProtectedRoute } from "./components/ProtectedRoute";
import HomePage from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/login" element={<LoginPage />} />
        <Route path="/" element={<LoginPage />} />

        {/* Protected routes (need login) */}
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<HomePage />} />

        </Route>

        {/* Not found route*/}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
