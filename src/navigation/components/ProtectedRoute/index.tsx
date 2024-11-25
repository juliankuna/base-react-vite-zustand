import { PropsWithChildren } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Layout from "../../../pages/Layout";
import { useUserStore } from "../../../stores/userStore";

export const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const { user } = useUserStore();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Layout>{children ?? <Outlet />}</Layout>;
};
