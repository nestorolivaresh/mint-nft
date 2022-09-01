import { Topbar } from '../components/Topbar/Topbar'
import { Mint } from '../containers/Mint/Mint';
import {useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { ethers } from 'ethers';
import { setUser } from '../redux/reducers/state';

function Home() {
  const dispatch = useDispatch();
  async function checkIfWalletIsConnected() {
      try {
        const provider = new ethers.providers.Web3Provider((window as any).ethereum, "any");
        const signer = provider.getSigner();
        const walletId = await signer.getAddress();
        const { name } = await provider.getNetwork();
        dispatch(setUser({walletId, network: name}));
      } catch (err) {
        console.log("checkIfWalletIsConnected err: ", err);
      }
  }

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <div>
      <Topbar />
      <Mint />
    </div>
  )
}

export default Home
