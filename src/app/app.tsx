"use client";

import React from "react";
import HeaderComponent from "@/app/_components/header/header";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container } from "react-bootstrap";
// import StoreProvider, { useAppSelector } from "./redux";

const AppLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
      <main>
        <HeaderComponent />
        {children}
      </main>
    </div>
  );
};

// const AppLayoutWrapper = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <StoreProvider>
//       <AuthProvider>
//         <DashboardLayout>{children}</DashboardLayout>
//       </AuthProvider>
//     </StoreProvider>
//   );
// };

export default AppLayout;
