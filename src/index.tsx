import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Mainnet, DAppProvider, Config, Goerli } from "@usedapp/core";
import { getDefaultProvider } from "ethers";

import "./index.css";
import HomePage from "./pages/HomePage/HomePage";
import PersonalInfo from "./pages/PersonalInfo/PersonalInfo";
import Modal from "./components/UI/Modal/Modal";

const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: getDefaultProvider("mainnet"),
    [Goerli.chainId]: getDefaultProvider("goerli"),
  },
};

const container = document.getElementById("root")!;
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/user/:id",
    element: <PersonalInfo />,
  },
]);

root.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <Provider store={store}>
        <RouterProvider router={router} />
        <Modal />
      </Provider>
    </DAppProvider>
  </React.StrictMode>
);
