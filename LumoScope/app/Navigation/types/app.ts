import { NavigatorScreenParams } from "@react-navigation/native";

export type AppRoutes = {
  ClientStack: NavigatorScreenParams<ClientRoutes>;
};
export type ClientRoutes = {
  Dashboard: undefined;
};
