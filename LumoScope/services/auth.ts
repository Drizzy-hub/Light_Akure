// eslint-disable-next-line @nx/enforce-module-boundaries
import { ImageRequireSource } from 'react-native/types';
import { injectEndpoints } from './api';

interface APIDataResponse<D> {
	success: boolean;
	data: D;
}
export interface APILoginResponse {
	message: string;
	success: boolean;
	token: string;
	user: {
		id: string;
		location: string;
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
export interface LightStatus {
	success: boolean;
	data: LightData[];
}

interface LightData {
	id: string;
	location: string;
	is_faulty: boolean;
	is_light: boolean;
	light_start: string;
	light_end: string;
	notification_sent?: string;
	duration: string;
	availability: string;
}
interface Barchart {
	success: boolean;
	data: BarData[];
}

export interface BarData {
	label: string;
	value: number;
}

const authenticationEndpoints = injectEndpoints({
	endpoints: (builder) => ({
		signup: builder.mutation<APIDataResponse<SignupModel>, SignupModel>({
			query: (body) => ({
				body: JSON.stringify(body),
				method: 'POST',
				url: `/signup.php?${body}`,
			}),
		}),
		login: builder.mutation<APILoginResponse, LoginModel>({
			query: (body) => ({
				body: JSON.stringify(body),
				method: 'POST',
				url: `/login.php?${body}`,
			}),
		}),
		locationMutate: builder.mutation({
			query: ({ id, location }) => ({
				url: `/user_location_update.php?id=${id}`,
				method: 'POST',
				body: { location },
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
		getTimelineById: builder.query<
			APIDataResponse<TimelineData>,
			{ id: string }
		>({
			query: ({ id }) => ({
				url: `/get_timelineby_id.php?id=${id}/`,
			}),
		}),
		getLightStatusByID: builder.query<
			APIDataResponse<LightData>,
			{ id: string }
		>({
			query: ({ id }) => ({
				url: `/get_light_status_id.php?id=${id}/`,
			}),
		}),
		getLight: builder.query<LightStatus, void>({
			query: () => ({
				url: `/get_light_status.php`,
			}),
		}),
		getChart: builder.query<Barchart, { id: string }>({
			query: ({ id }) => ({
				url: `/getChart.php?id=${id}/`,
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
	useGetLightQuery,
	useGetLightStatusByIDQuery,
	useGetChartQuery,
	useLocationMutateMutation,
} = authenticationEndpoints;
