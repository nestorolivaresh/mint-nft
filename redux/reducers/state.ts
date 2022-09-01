import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
  nftPool: {},
  user: {
    walletId: '',
    network: null
  }
}

export type StateType = {
  nftPool: {
    [key: string]: any;
  },
  user: {
    walletId: string;
    network?: string;
  }
}

const stateSlice = createSlice({
  name: 'state',
  initialState,
  reducers: {
    setUser: (state, action) => {
      return {
        ...state,
        user: {
          ...state.user,
          walletId: action.payload.walletId,
          network: action.payload.network
        }
      }
    },
    addNftToPool: (state, action) => {
      const { nftId, ...rest } = action.payload;
      return {
        ...state,
        nftPool: {
          ...state.nftPool,
          [nftId]: {
            ...rest
          }
        }
      }
    }
  },
});

export const mintNfts = createAsyncThunk(
  "mintNfts",
  async (data, thunkAPI) => {
    try {
      const { state }: any = thunkAPI.getState();
      const nftPool = state.nftPool;
      const nfts = Object.values(nftPool);
      console.log({
        walletId: state.user.walletId,
        network: 1,
        assets: nfts
      })
      const res = await axios.post('https://mintnfts.free.beeceptor.com', {
        walletId: state.user.walletId,
        network: 1,
        assets: nfts
      });
      console.log({ res })
    } catch (err) {
      console.log('mintNfts err', err)
    }
  }
);

export const {
  addNftToPool,
  setUser,
} = stateSlice.actions;



export default stateSlice.reducer;
