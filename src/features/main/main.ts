import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserData} from '../../types/user.types';
import { ExcursionApi } from '../../types/excursions.types';


export interface MainState {
    isMobile: boolean,
}

const initialState: MainState = {
   isMobile: false,
};

export const Main = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setIsMobile: (state, action) => {
            state.isMobile = action.payload
        }
    },
});

export const {
    setIsMobile
} = Main.actions
export const mainReducer = Main.reducer;
