import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { APILoginResponse, authEndpoints } from "../../services/auth";

// eslint-disable-next-line @nx/enforce-module-boundaries

interface AuthState {
  onboarded: boolean;
  user?: APILoginResponse | null;
}
const initialState: AuthState = {
  onboarded: false,
  user: undefined,
};

const authSlice = createSlice({
  extraReducers: (builder) => {
    builder.addMatcher(
      authEndpoints.getLocation.matchFulfilled,
      (state, payload) => {
        console.log(state, "state");
        console.log(payload.payload, "payload");
      }
    );
  },
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
    logout: (state) => {
      return {
        ...initialState,
        onboarded: state.onboarded,
      };
    },
    setUser: (state, action: PayloadAction<APILoginResponse | null>) => {
      state.user = action.payload;
    },
  },
});

export const { setOnboarded, logout, setUser } = authSlice.actions;

export default authSlice.reducer;
