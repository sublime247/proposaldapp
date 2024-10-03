import { createAppKit } from '@reown/appkit/react'
import { EthersAdapter } from '@reown/appkit-adapter-ethers'
import { sepolia, arbitrum, mainnet } from '@reown/appkit/networks'


// Custome Network rewon didnot has lisksepolia to be part of their network

export const liskSepoliaNetwork = {
    id: "eip155:4202",
    chainId: 4202,
    chainNamespace: "eip155",
    name: "Lisk Sepolia",
    currency: "ETH",
    explorerUrl: import.meta.env.VITE_LISK_SEPOLIA_EXPLORER_URL,
    rpcUrl: import.meta.env.VITE_LISK_SEPOLIA_RPC_URL,
}

// list of supported network in our contract

const networks = [sepolia, arbitrum, mainnet, liskSepoliaNetwork];

// The project ID is used to identify the project in the appkit

const projectId = import.meta.env.VITE_APPKIT_PROJECT_ID;



//. Create a metadata object - optional
const metadata = {
    name: "My Website",
    description: "My Website description",
    url: "https://mywebsite.com", // origin must match your domain & subdomain
    icons: ["https://avatars.mywebsite.com/"],
};

export const appKit = createAppKit({
    adapters: [new EthersAdapter()],
    networks,
    metadata,
    projectId,
    allowUnsupportedChains: false,
    allWallets: "SHOW",
    defaultNetwork: liskSepoliaNetwork,
    enableEIP6963: true,
    features: {
      
        analytics: true, // Optional - defaults to your Cloud configuration
        allWallets: true, // Optional - defaults to true
        allNetworks: true, // Optional - defaults to true
        email: false,
        socials:[]
    }
  })