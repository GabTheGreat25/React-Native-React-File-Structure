import { StyleSheet } from "react-native";

export const createStyles = ({ windowHeight, windowWidth }) =>
  StyleSheet.create({
    card: {
      ...Platform.select({
        ios: {
          shadowOffset: { width: 2, height: 2 },
          shadowColor: "#333",
          shadowOpacity: 0.3,
          shadowRadius: 4,
        },
        android: {
          elevation: 5,
        },
      }),
    },
  });
