import React from 'react';
import { BarChart, LineChart, PieChart, PopulationPyramid } from "react-native-gifted-charts"
import { Rect } from 'react-native-svg';
import { Bar, CartesianChart } from 'victory-native';
import { Icons } from '../assets/Icons';
import colors from '../constants/Colors';
// import { VictoryBar, VictoryChart, VictoryTheme } from 'victory-native';
const data = [{ label: 'Sun', value: 13 }, { label: 'Mon', value: 13 }, { label: 'Tue', value: 22 }, { label: 'Wed', value: 10 }, { label: 'Thu', value: 18 }, { label: 'Fri', value: 18 }, { label: 'Sat', value: 18 }]

const StackedBarChart = () => {
  // const CustomBar = ({ x, y, width, height,}) => {
  //   return (
  //     <>
  //       {/* First color */}
  //       <Rect x={x} y={y} width={width} height={height / 2} fill={colors.primaryBlue} />
  //       {/* Second color */}
  //       <Rect x={x} y={y + height / 2} width={width} height={height / 2} fill={colors.primaryBtn} />
  //     </>
  //   );
  // };

  return (
    // Example data for the stacked bar chart
    <BarChart xAxisLabelTextStyle={{ fontWeight: 400, colors: colors.textColor, fontSize: 12, fontFamily: 'Montserrat-Light' }} yAxisTextStyle={{ colors: colors.textColor, fontSize: 12, fontFamily: 'Montserrat-Light' }} sideWidth={0} isThreeD topColor={colors.primaryBlue} barBorderRadius={8} frontColor={colors.primaryBtn} xAxisColor={'transparent'} yAxisColor={'transparent'} dashGap={0} spacing={15} initialSpacing={18} barWidth={24} stepValue={4} maxValue={24} data={data} />


  )
};

export default StackedBarChart;
