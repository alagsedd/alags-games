import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/Global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
import { ChakraProvider } from "@chakra-ui/react";

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
      <ChakraProvider>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
