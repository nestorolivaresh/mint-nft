import React, {useEffect} from 'react'
import { ConnectWalletButton, Container, Title, TitleContainer } from './Topbar.styles';
import { useSelector, useDispatch } from "react-redux";
import { ethers } from 'ethers';
import { RootState } from '../../redux/store';
import { setUser } from '../../redux/reducers/state';
import { formatWalletId } from '../../common/utils/formatWalletId';

export function Topbar() {
  const dispatch = useDispatch();
  const {state: {user: {walletId}}} = useSelector((state: RootState) => state);

  async function connectWalletAction() {
    try {
      const provider = new ethers.providers.Web3Provider((window as any).ethereum, "any");
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const walletId = await signer.getAddress();
      const { name } = await provider.getNetwork();
      dispatch(setUser({walletId, network: name}));
    } catch (err) {
      console.log("err", err);
    }
  }

  return (
    <Container>
      <TitleContainer>
        <Title>Welcome to the NFT minting factory!</Title>
      </TitleContainer>
      <ConnectWalletButton onClick={connectWalletAction} connected={!!walletId}>{walletId ? formatWalletId(walletId) : 'Connect your wallet'}</ConnectWalletButton>
    </Container>
  )
}
