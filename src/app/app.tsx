"use client";

import React from "react";
import HeaderComponent from "@/app/_components/header/header";
import { Provider } from "jotai";
import "bootstrap/dist/css/bootstrap.min.css";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider>
      <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
        <main>
          <HeaderComponent />
          {children}
        </main>
      </div>
    </Provider>
  );
};

export default AppLayout;
