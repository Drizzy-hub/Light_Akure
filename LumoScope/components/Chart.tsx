import React from 'react';
import { BarChart, LineChart, PieChart, PopulationPyramid } from "react-native-gifted-charts"
import { Rect } from 'react-native-svg';
import { Bar, CartesianChart } from 'victory-native';
import { Icons } from '../assets/Icons';
import colors from '../constants/Colors';
import moment from 'moment';
import { useGetChartQuery } from '../services/auth';
// import { VictoryBar, VictoryChart, VictoryTheme } from 'victory-native';




interface Props {
  id: string
}
const StackedBarChart = ({ id }: Props) => {

  const { data, isLoading } = useGetChartQuery({ id });

  return (
    // Example data for the stacked bar chart
    <BarChart xAxisLabelTextStyle={{ fontWeight: 400, colors: colors.textColor, fontSize: 12, fontFamily: 'Montserrat-Light' }} yAxisTextStyle={{ colors: colors.textColor, fontSize: 12, fontFamily: 'Montserrat-Light' }} sideWidth={0} isThreeD topColor={colors.primaryBlue} barBorderRadius={8} frontColor={colors.primaryBtn} xAxisColor={'transparent'} yAxisColor={'transparent'} dashGap={0} spacing={15} initialSpacing={18} barWidth={24} stepValue={4} maxValue={24} data={data?.data ?? []} />


  )
};

export default StackedBarChart;
