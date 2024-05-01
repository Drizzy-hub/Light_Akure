// eslint-disable-next-line @nx/enforce-module-boundaries
import { ImageRequireSource } from "react-native/types";
import { injectEndpoints } from "./api";

interface APIDataResponse<D> {
  success: boolean;
  data: D;
}
export interface APILoginResponse {
  message: string;
  success: boolean;
  token: string;
  user: {
    name: string;
    phone: string;
    email: string;
  };
}
interface SignupModel {
  Phone: string;
  Email: string;
  Name: string;
}
interface LoginModel {
  phone: string;
}
interface Location {
  success: boolean;
  data: LocationData[];
}
interface LocationData {
  id: string;
  location: string;
}
interface Timeline {
  success: boolean;
  data: TimelineData[];
}
export interface TimelineData {
  id: string;
  title: string;
  description: string;
  image_path: string;
  time_created: string;
}
// interface IdTimeline {
//   success: boolean;
//   data: TimelineData;
// }

const authenticationEndpoints = injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation<APIDataResponse<SignupModel>, SignupModel>({
      query: (body) => ({
        body: JSON.stringify(body),
        method: "POST",
        url: `/signup.php?${body}`,
      }),
    }),
    login: builder.mutation<APILoginResponse, LoginModel>({
      query: (body) => ({
        body: JSON.stringify(body),
        method: "POST",
        url: `/login.php?${body}`,
      }),
    }),
    getLocation: builder.query<Location, void>({
      query: () => ({
        url: `/get_location.php`,
      }),
    }),

    getTimeline: builder.query<Timeline, void>({
      query: () => ({
        url: `/get_timeline.php`,
      }),
    }),
    getTimelineById: builder.query<TimelineData, { id: string }>({
      query: ({ id }) => ({
        url: `/get_timelineby_id.php?id=${id}/`,
      }),
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

  overrideExisting: true,
});

export const {
  endpoints: authEndpoints,
  useSignupMutation,
  useLoginMutation,
  useGetLocationQuery,
  useGetTimelineQuery,
  useGetTimelineByIdQuery,
} = authenticationEndpoints;
