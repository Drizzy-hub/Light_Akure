// eslint-disable-next-line @nx/enforce-module-boundaries
import { injectEndpoints } from "./api";

interface APIDataResponse<D> {
  success: boolean;
  data: D;
}
interface SignupModel {
  phone: number;
  email: string;
  name: string;
}
const authenticationEndpoints = injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation<APIDataResponse<SignupModel>, SignupModel>({
      query: (body) => ({
        body,
        method: "POST",
        url: "/signup.php",
      }),
    }),

    // editProfile: builder.mutation<void, EditProfileModel>({
    //   invalidatesTags: ["GetUser"],
    //   query: (body) => ({
    //     body,
    //     method: "POST",
    //     url: "v1/auth/users/update-profile/",
    //   }),
    // }),

    // fetchUsers: builder.mutation<APIPagedResponse<User[]>, GetUserParams>({
    //   query: (arg) => ({
    //     params: { ...arg },
    //     url: "/v2/auth/users/",
    //   }),
    // }),
  }),
  overrideExisting: true,
});

export const { endpoints: authEndpoints, useSignupMutation } =
  authenticationEndpoints;
