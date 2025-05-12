import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import "./styles/global.css";
import { AcademicRoutes } from "@/routes/AcademicRoutes";
import { TeacherRoutes } from "@/routes/TeacherRoutes";
import { StudentRoutes } from "@/routes/StudentRoutes";
import { LoginPage } from "@/pages/public/Login/LoginPage";
import { RegisterPage } from "@/pages/public/Register/RegisterPage";
import { ResetPasswordPage } from "@/pages/public/ResetPassword/ResetPasswordPage";
import { ProtectedLayout } from "@/components/ProtectedLayout";
import { CookiesProvider } from "react-cookie";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "@/context/Auth/useAuth";

const queryClient = new QueryClient();

const rootEl = document.getElementById("root");
if (rootEl) {
   const root = ReactDOM.createRoot(rootEl);
   root.render(
      <React.StrictMode>
         <CookiesProvider>
            <QueryClientProvider client={queryClient}>
               <BrowserRouter>
                  <AuthProvider>
                     <Routes>
                        /* Public */
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route
                           path="/reset-password"
                           element={<ResetPasswordPage />}
                        />
                        /* Protected */
                        <Route path="/academic" element={<ProtectedLayout />}>
                           <Route
                              index
                              element={<Navigate to="campi" replace />}
                           />
                           {AcademicRoutes()}
                        </Route>
                        <Route path="/teacher" element={<ProtectedLayout />}>
                           <Route
                              index
                              element={<Navigate to="home" replace />}
                           />
                           {TeacherRoutes()}
                        </Route>
                        <Route path="/student" element={<ProtectedLayout />}>
                           <Route
                              index
                              element={<Navigate to="home" replace />}
                           />
                           {StudentRoutes()}
                        </Route>
                        <Route path="*" element={<h1>Não autorizado</h1>} />
                     </Routes>
                  </AuthProvider>
               </BrowserRouter>
            </QueryClientProvider>
         </CookiesProvider>
      </React.StrictMode>,
   );
}
