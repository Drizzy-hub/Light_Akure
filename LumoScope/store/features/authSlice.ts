import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// eslint-disable-next-line @nx/enforce-module-boundaries
interface AuthState {
  onboarded: boolean;
  user: undefined;
}
const initialState: AuthState = {
  onboarded: false,
  user: undefined,
};

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    //TODO: ADD TRIPLE CHECK FOR VERIFICATION VALUES
    // logout: (state) => {
    //   return {
    //     ...initialState,
    //     biometrics: state.biometrics,
    //     onboarded: state.onboarded,
    //     persistedDetails: state.persistedDetails,
    //   };
    // },
    setOnboarded: (state, action: PayloadAction<boolean>) => {
      state.onboarded = action.payload;
    },
  },
});

export const { setOnboarded } = authSlice.actions;

export default authSlice.reducer;
