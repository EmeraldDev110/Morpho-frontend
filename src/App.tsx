import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import Indexfile from './components/Indexfile';


export function App() {
  // const { isConnected } = useAccount();

  return (
    <div className=''>
      <Indexfile/>
      {/* <h1>wagmi + RainbowKit + Vite</h1>
      <ConnectButton /> */}

    </div>
  );
}
