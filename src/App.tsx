import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppWrapper from "./AppWrapper";
import Home from "./pages/Home";
import TokenSwap from "./pages/TokenSwap";

//WEB3 MODAL IMPORTS
// import { createWeb3Modal } from "@web3modal/wagmi/react";
// import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";

// import { WagmiProvider } from "wagmi";
// import { arbitrum, mainnet } from "wagmi/chains";

//FUEL WALLET IMPORTS
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { FuelProvider } from "@fuels/react";
import { defaultConnectors } from "@fuels/connectors";

const queryClient = new QueryClient();

// const projectId = "72e3576a5459f1784e32223a4e33ea29";

// const metadata = {
//   name: "Moon-Launch",
//   description: "A token launcher on the fuel network",
//   url: "https://web3modal.com", // origin must match your domain & subdomain
//   icons: ["/Images/logo.png"],
// };

// const chains = [mainnet, arbitrum] as const;
// const config = defaultWagmiConfig({
//   chains,
//   projectId,
//   metadata,
// });

// 3. Create modal
// createWeb3Modal({
//   metadata,
//   wagmiConfig: config,
//   projectId,
//   enableAnalytics: true, // Optional - defaults to your Cloud configuration
// });
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppWrapper />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "swap",
        element: <TokenSwap />,
      },
    ],
  },
]);
const App = () => {
  return (
    <div className="bg-[#101010] scrollBehaviour ">
      <QueryClientProvider client={queryClient}>
        <FuelProvider
          fuelConfig={{ connectors: defaultConnectors({ devMode: true }) }}
        >
          <RouterProvider router={router} />
        </FuelProvider>
      </QueryClientProvider>
    </div>
  );
};

export default App;
