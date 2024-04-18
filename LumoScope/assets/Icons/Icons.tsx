import * as React from 'react';
import Svg, { Circle, Path, SvgProps } from 'react-native-svg';

import colors from '../../constants/Colors';
import { IconName } from './icon';



interface Props extends SvgProps {
  name: IconName;
  color?: string;
  size?: number;
  onPress?: () => void;
}

type Icon = {
  [key in IconName]: JSX.Element;
};

export default function Icon({ name, color: Color, onPress, size = 24, ...props }: Props): JSX.Element {
  const color = Color || colors.text;

  const IconMap: Icon = {
    "onboard-one": (
      <>
        <Path
          stroke="#36A629"
          strokeLinecap="round"
          strokeWidth={2.5}
          d="M27 52A25 25 0 0 1 5.166 14.823"
        />
        <Path
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth={2.5}
          d="M28.032 51.979a25.001 25.001 0 1 0-2.065-49.96 25.001 25.001 0 0 0 2.066 49.96h0Z"
          opacity={0.1}
        />
        <Circle cx={27} cy={27} r={20} fill="#fff" />
        <Path
          stroke="#15619F"
          strokeLinecap="round"
          strokeWidth={1.5}
          d="m25 22 4.859 4.859a.2.2 0 0 1 0 .282L25 32"
        />
      </>
    ),
    "onboard-two": (
      <>
        <Path
          stroke="#36A629"
          strokeLinecap="round"
          strokeWidth={2.5}
          d="M27 52A25.001 25.001 0 0 1 15.484 4.81a25 25 0 0 1 34.008 11.276"
        />
        <Path
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth={2.5}
          d="M28.032 51.979a25.001 25.001 0 1 0-2.065-49.96 25.001 25.001 0 0 0 2.066 49.96h0Z"
          opacity={0.1}
        />
        <Circle cx={27} cy={27} r={20} fill="#fff" />
        <Path
          stroke="#15619F"
          strokeLinecap="round"
          strokeWidth={1.5}
          d="m25 22 4.859 4.859a.2.2 0 0 1 0 .282L25 32"
        />
        <Path
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth={2.5}
          d="M28.032 51.979a25.001 25.001 0 1 0-2.065-49.96 25.001 25.001 0 0 0 2.066 49.96h0Z"
          opacity={0.1}
        />
        <Circle cx={27} cy={27} r={20} fill="#fff" />
        <Path
          stroke="#15619F"
          strokeLinecap="round"
          strokeWidth={1.5}
          d="m25 22 4.859 4.859a.2.2 0 0 1 0 .282L25 32"
        />
      </>
    ),
    "onboard-three": (<>
      <Path
        stroke="#36A629"
        strokeLinecap="round"
        strokeWidth={2.5}
        d="M27 52a25 25 0 1 0 0-50 25 25 0 0 0 0 50h0Z"
      />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth={2.5}
        d="M28.032 51.979a25.001 25.001 0 1 0-2.065-49.96 25.001 25.001 0 0 0 2.066 49.96h0Z"
        opacity={0.1}
      />
      <Circle cx={27} cy={27} r={20} fill="#fff" />
      <Path
        stroke="#15619F"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m25 22 4.859 4.859a.2.2 0 0 1 0 .282L25 32"
      />
    </>
    ),
    "angle": (
      <>
        <Path
          stroke="#15619F"
          strokeLinecap="round"
          strokeWidth={1.5}
          d="m5 3 4.859 4.859a.2.2 0 0 1 0 .282L5 13"
        />
      </>
    )

  };

  return (
    <Svg {...props} width={size} height={size}  {...{ onPress }} fill="none">
      {IconMap[name]}
    </Svg>
  );
}
