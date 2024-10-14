import React from 'react';
import {
	ScrollView,
	Linking,
	StyleSheet,
	View,
	Image,
	TouchableOpacity,
	Alert,
} from 'react-native';
import { Container, FormInput, Header, Text } from '../../../../components';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import colors from '../../../../constants/Colors';
import { logout } from '../../../../store/features/authSlice';
import { apiUtilTool } from '../../../../services/api';
import { useDeleteMutation } from '../../../../services/auth';
import { handleMutationService } from '../../../../services/config/handleService';

const Profile = () => {
	const { user, location } = useAppSelector((state) => state.authSlice);
	const dispatch = useAppDispatch();
	const [completeDelete] = useDeleteMutation();
	const phoneNumber = '+2349134452032';
	const whatsappURL = `https://wa.me/${phoneNumber}`;

	const openLink = async (url: string) => {
		try {
			const supported = await Linking.canOpenURL(url);
			if (supported) {
				await Linking.openURL(url);
			} else {
				await Linking.openURL(`https://wa.me/${phoneNumber}`);
			}
		} catch (error) {
			console.error('An error occurred', error);
		}
	};

	// Handle delete account confirmation
	const confirmDeleteAccount = () => {
		Alert.alert(
			'Delete Account',
			'Are you sure you want to delete your account 🥺 ? This action cannot be undone.',
			[
				{
					text: 'Cancel',
					onPress: () => console.log('Account deletion cancelled'),
					style: 'cancel',
				},
				{
					text: 'Yes, Delete',
					onPress: () => {
						handleMutationService({
							mutation: completeDelete({
								Phone: user?.user.phone || '',
							}),
							onSuccess(data) {
								if (data.success) {
									dispatch(logout());
									apiUtilTool.resetApiState();
								}
							},
						});
					},
					style: 'destructive', // Optional for red text on iOS
				},
			],
			{ cancelable: true }
		);
	};

	const handleLinkPress = () => openLink('mailto:support@futatab.com');
	const handleWhatsAppPress = () => openLink(whatsappURL);

	return (
		<ScrollView>
			<Container>
				<Header title="Profile" />
				<View style={{ paddingHorizontal: 24, marginTop: '30%' }}>
					<View>
						<FormInput
							label="Name"
							value={String(user?.user?.name ?? 'Not Provided')}
							style={styles.textBox}
							placeholder="Name"
						/>
						<FormInput
							label="Email"
							value={String(user?.user?.email ?? 'Not Provided')}
							placeholder="Email"
							style={styles.textBox}
						/>
						<FormInput
							label="Phone Number"
							value={String(user?.user?.phone ?? 'Not Provided')}
							placeholder="Phone Number"
							style={styles.textBox}
						/>
						<FormInput
							label="Location"
							value={String(location ?? 'select Location')}
							placeholder="Location"
							style={styles.textBox}
						/>
						<Text
							onPress={() => {
								dispatch(logout());
								apiUtilTool.resetApiState();
							}}
							style={{ color: colors.primaryBlue, marginBottom: 10 }}
						>
							Log out
						</Text>
						<Text
							onPress={confirmDeleteAccount} // Use confirmation popup
							style={{ color: colors.red, marginBottom: 10 }}
						>
							Delete Account
						</Text>
					</View>
				</View>
				<Text
					textAlign="center"
					fontWeight="700"
					style={styles.link}
					onPress={handleLinkPress}
				>
					support@futatab.com
				</Text>
				<TouchableOpacity
					onPress={handleWhatsAppPress}
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'center',
						marginTop: 10,
					}}
				>
					<Image
						style={{ width: 24, height: 24 }}
						source={require('../../../../assets/Icons/whatsapp.png')}
					/>
					<Text style={{ marginLeft: 10, fontWeight: '400' }}>Whatsapp</Text>
				</TouchableOpacity>
			</Container>
		</ScrollView>
	);
};

export default Profile;

const styles = StyleSheet.create({
	textBox: {
		marginBottom: 10,
	},
	link: {
		fontSize: 14,
		marginLeft: 4,
		textDecorationLine: 'underline',
	},
});
