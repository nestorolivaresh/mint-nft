import React from 'react'
import { ButtonsContainer, FormButton, FormContainer, Input, InputContainer, InputLabel } from './MintForm.styles'
import {useSelector, useDispatch} from 'react-redux';
import { addNftToPool, mintNfts } from '../../redux/reducers/state';
import { useForm } from 'react-hook-form';
import { NftFormType } from '../../common/types';
import { generateId } from '../../common/utils/generateId';
import { AppDispatch, RootState } from '../../redux/store';
export function MintForm() {
  const dispatch = useDispatch<AppDispatch>();
  const { register, getValues } = useForm<NftFormType>({ shouldUseNativeValidation: true });
  const {state: {user: {walletId}, nftPool}} = useSelector((state: RootState) => state);

  function handleFormSubmit(event: React.MouseEvent, mint?: boolean) {
    event.preventDefault();
    const data = getValues();
    dispatch(addNftToPool({nftId: generateId(), ...data}));
    if(mint){
      dispatch(mintNfts());
    }
  }

  return (
    <FormContainer>
      <InputContainer>
        <InputLabel>Name</InputLabel>
        <Input  {...register("name", { required: "Please enter NFT name" })} placeholder="Enter your NFT name"/>
      </InputContainer>
      <InputContainer>
        <InputLabel>Picture</InputLabel>
        <Input {...register("picture", { required: "Please enter NFT picture" })} placeholder="Enter your NFT picture"/>
      </InputContainer>
      <InputContainer>
        <InputLabel>External URL</InputLabel>
        <Input {...register("externalURL", { required: "Please enter NFT external URL." })} placeholder="Enter your NFT external URL"/>
      </InputContainer>
      <InputContainer>
        <InputLabel>Description</InputLabel>
        <Input {...register("description", { required: "Please enter NFT description." })} placeholder="Enter your NFT description"/>
      </InputContainer>
      <InputContainer>
        <InputLabel>Collection Name</InputLabel>
        <Input {...register("collection", { required: "Please enter NFT collection name." })} placeholder="Enter your NFT collection name"/>
      </InputContainer>
      <InputContainer>
        <InputLabel>Supply</InputLabel>
        <Input {...register("supply", { required: "Please enter NFT supply." })} type='number' placeholder="Enter your NFT supply amount"/>
      </InputContainer>
      <InputContainer>
        <InputLabel>Royalties</InputLabel>
        <Input {...register("royalties", { required: "Please enter NFT royalties." })} type='number' placeholder="Enter your NFT royalties amount"/>
      </InputContainer>
      <ButtonsContainer>
        <ButtonsContainer>
          <FormButton onClick={handleFormSubmit}>Add Another NFT</FormButton>
          <FormButton onClick={(event: React.MouseEvent) => handleFormSubmit(event, true)} disabled={!walletId}>Mint</FormButton>
        </ButtonsContainer>
      </ButtonsContainer>
    </FormContainer>
  )
}
