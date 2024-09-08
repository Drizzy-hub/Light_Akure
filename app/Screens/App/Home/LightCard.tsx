import {
	FlatList,
	RefreshControl,
	TouchableOpacity,
	View,
	Easing,
	Animated,
	StyleSheet,
} from 'react-native';
import React, { useRef, useState } from 'react';
import {
	ErrorInfo,
	FormInput,
	LightCard,
	Text,
	VirtualScroll,
} from '../../../../components';
import { Icons } from '../../../../assets/Icons';
import colors from '../../../../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { AppRoutes } from '../../../Navigation';
import { useStackNavigationProp } from '../../../Navigation/types/types';
import { useGetLightQuery } from '../../../../services/auth';
import { calculateTimeDifference } from '../../../../hooks/diffCalculator';

const LightStatusComp = () => {
	const [searchTerm, setSearch] = useState('');
	const { data, error, isLoading, isFetching, refetch } =
		useGetLightQuery(searchTerm);
	const navigation =
		useNavigation<useStackNavigationProp<AppRoutes, 'ClientStack'>>();
	const [isExpanded, setIsExpanded] = useState(false);
	const inputWidth = useRef(new Animated.Value(40)).current; // Start width (same as icon)
	const inputOpacity = useRef(new Animated.Value(0)).current;
	const [hide, setHide] = useState();
	const toggleSearchBox = () => {
		if (isExpanded) {
			// Shrink search box
			Animated.timing(inputWidth, {
				toValue: 40, // Back to icon size
				duration: 300,
				useNativeDriver: false,
				easing: Easing.linear,
			}).start(() => {
				setIsExpanded(false);
				Animated.timing(inputOpacity, {
					toValue: 0,
					duration: 100,
					useNativeDriver: true,
				}).start();
			});
		} else {
			// Expand search box
			setIsExpanded(true);
			Animated.timing(inputWidth, {
				toValue: 350, // Full width when expanded
				duration: 300,
				useNativeDriver: false,
				easing: Easing.linear,
			}).start(() => {
				Animated.timing(inputOpacity, {
					toValue: 1,
					duration: 200,
					useNativeDriver: true,
				}).start();
			});
		}
	};

	return (
		<>
			{isLoading ? (
				<Text>Loading..</Text>
			) : (
				<VirtualScroll
					refreshControl={
						<RefreshControl
							onRefresh={() => {
								try {
									refetch();
								} catch (error) {
									console.warn('REFETCH ERROR', error);
								}
							}}
							refreshing={isLoading || isFetching}
							tintColor={colors.primary}
							colors={[colors.primary]}
						/>
					}
				>
					<View
						style={{ flexDirection: 'row', justifyContent: 'space-between' }}
					>
						{isExpanded ? null : (
							<Text fontSize={14} style={{ marginBottom: 16 }} fontWeight="700">
								Power Status in Nearby Areas
							</Text>
						)}
						<Animated.View
							style={[styles.searchContainer, { width: inputWidth }]}
						>
							{isExpanded && (
								<Animated.View style={{ flex: 1, opacity: inputOpacity }}>
									<FormInput
										style={{ backgroundColor: colors.white }}
										value={searchTerm}
										onChangeText={(value) => setSearch(value)}
										placeholder="Search Locations"
										placeholderTextColor={colors.primaryTextColor}
										autoFocus={true}
									/>
								</Animated.View>
							)}
							<TouchableOpacity
								onPress={toggleSearchBox}
								style={styles.iconButton}
							>
								<Icons
									style={{ marginLeft: isExpanded ? 10 : 0 }}
									name="search"
									size={isExpanded ? 24 : 16}
									color={colors.textColor}
								/>
							</TouchableOpacity>
						</Animated.View>
					</View>
					{/* <>
						<FormInput
							style={{ marginTop: 24 }}
							
							placeholder="Search Locations"
							LeftComponent={
								<Icons name="search" size={16} color={colors.textColor} />
							}
						/>
					</> */}
					<FlatList
						// style={{ height: layout.window.height / 2.2 }}
						data={data?.data || []}
						keyExtractor={(_, i) => i.toString()}
						horizontal={false}
						ListEmptyComponent={
							<>
								{error ? (
									<ErrorInfo visible={true} />
								) : (
									<Text style={{ paddingLeft: 10 }}>
										Light Update not available
									</Text>
								)}
							</>
						}
						ItemSeparatorComponent={() => (
							<View
								style={{
									marginTop: 10,
									marginBottom: 10,
									borderWidth: 1,
									borderColor: colors.borderSep,
								}}
							/>
						)}
						renderItem={({ item, index }) => {
							return (
								<>
									<LightCard
										press={() => {
											navigation.navigate('ClientStack', {
												screen: 'Status',
												params: { id: item.id ?? '' },
											});
										}}
										lastSeen={calculateTimeDifference(item.light_end)}
										light={item.is_light}
										location={item.location}
										duration={item.duration}
										faulty={item.is_faulty}
									/>
								</>
							);
						}}
					/>
				</VirtualScroll>
			)}
		</>
	);
};
export default LightStatusComp;

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
	},
	searchContainer: {
		flexDirection: 'row',
		marginBottom: 15,
		alignItems: 'center',
	},
	textInput: {
		flex: 1,
		color: colors.primaryTextColor,
		paddingHorizontal: 10,
		fontSize: 16,
	},
	iconButton: {
		justifyContent: 'center',
		alignItems: 'center',
	},
});
