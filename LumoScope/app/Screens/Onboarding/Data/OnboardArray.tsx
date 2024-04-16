import { AuthRoutes } from "../../../Navigation";
import { ImageRequireSource } from "react-native/types";

interface imagePath {
  image: ImageRequireSource;
  BigText: string,
  normal: string,
  btn1: string,
  btn2: string,
  pathOne?: keyof AuthRoutes,
  pathTwo?: keyof AuthRoutes,
}

export const images = {
  'onboarding-1': require('./Images/first.png'),
  'onboarding-2': require('./Images/second.png'),
  'onboarding-3': require('./Images/third.png'),
};

export const CarouselPaths: imagePath[] = [
  {
    image: images['onboarding-1'],
    BigText: "Welcome to Lumoscape",
    normal: "Check your areas for real-time power availability and stay informed on-the-go.",
    btn1: "Next",
    btn2: "Skip",
  },
  {
    image: images['onboarding-2'],
    BigText: "Discover Light Intelligence",
    normal: "Real-time insights into your surroundings with our advanced light monitoring feature",
    btn1: "Next",
    btn2: "Skip",
  },
  {
    image: images['onboarding-3'],
    BigText: "Your Light, Your Way",
    normal: "Tailored preferences with notifications and  settings adjustments.",
    btn1: "Get Started",
    btn2: "Button 2 text 2",
    pathOne: "Signup",
    pathTwo: "Login",
  },
];

