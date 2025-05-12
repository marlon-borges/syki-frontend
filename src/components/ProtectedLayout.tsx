import { Outlet } from "react-router";

export function ProtectedLayout() {
   return (
      <div>
         <header>Rotas protegidas</header>
         <main>
            <Outlet />
         </main>
      </div>
   );
}
