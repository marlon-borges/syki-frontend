import { jwtDecode } from "jwt-decode";
import React, { createContext, useContext } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";

export interface AuthContextProps {
   user: UserProps;
   isLoading: boolean;
   login: (token: string) => void;
   logout: () => void;
   token: string;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export interface AuthContextProviderProps {
   children: React.ReactNode;
}

export interface UserProps {
   role: string;
   name: string;
   email: string;
}

export function AuthProvider({ children }: AuthContextProviderProps) {
   const [user, setUser] = React.useState<UserProps>({
      role: "",
      name: "",
      email: "",
   });
   const [isLoading, setIsLoading] = React.useState<boolean>(false);
   const [cookies, setCookie, removeCookie] = useCookies<"AccessToken">([
      "AccessToken",
   ]);
   const navigate = useNavigate();

   const isTokenExpired = () => {
      try {
         const decodedJWT = jwtDecode(cookies.AccessToken);
         const currentTime = Date.now() / 1000;
         return decodedJWT?.exp ? decodedJWT.exp < currentTime : true;
      } catch (err: any) {
         console.log("Não foi possível decodificar o token: " + err.message);
         return true;
      }
   };

   React.useEffect(() => {
      setIsLoading(true);
      if (!cookies.AccessToken || isTokenExpired()) {
         removeCookie("AccessToken");
         navigate("/login");
         setIsLoading(false);
         return;
      }
      try {
         const decodedJWT = jwtDecode(cookies.AccessToken) as UserProps;
         const role = decodedJWT?.role;
         setUser({
            email: decodedJWT?.email,
            name: decodedJWT?.name,
            role,
         });
         const currentPath = window.location.pathname;
         if (!currentPath.startsWith(`/${role.toLowerCase()}`)) {
            navigate(`/${role.toLowerCase()}`);
         }
      } catch (err: any) {
         throw new Error("Erro ao carregar as informações: " + err.message);
      } finally {
         setIsLoading(false);
      }
   }, [cookies.AccessToken, navigate]);

   const login = (token: string) => {
      try {
         const decodedJWT = jwtDecode(token) as UserProps;
         setCookie(
            "AccessToken",
            token,
            // {httpOnly: true}
            // {secure: true}
         );
         setUser({
            email: decodedJWT?.email,
            name: decodedJWT?.name,
            role: decodedJWT?.role,
         });
      } catch (err: any) {
         throw new Error("Erro ao fazer o login: " + err.message);
      }
   };

   const logout = () => {
      removeCookie("AccessToken");
      navigate("/login");
   };

   return (
      <AuthContext.Provider
         value={{ user, isLoading, login, logout, token: cookies.AccessToken }}
      >
         {children}
      </AuthContext.Provider>
   );
}

export function useAuth(): AuthContextProps {
   const context = useContext(AuthContext);
   if (!context) {
      throw new Error("useAuth deve ser usado dentro de um AuthProvider");
   }
   return context;
}
