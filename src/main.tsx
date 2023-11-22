import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/Global.css";
import HomePage from "./pages/HomePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000,
      keepPreviousData: true,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {" "}
      <HomePage />
    </QueryClientProvider>
  </React.StrictMode>
);
