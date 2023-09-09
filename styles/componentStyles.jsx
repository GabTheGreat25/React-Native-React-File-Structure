import { StyleSheet } from "react-native";

export const createStyles = ({ windowHeight, windowWidth }) =>
  StyleSheet.create({
    card: {
      backgroundColor: "white",
      borderRadius: 16,
      borderWidth: 2,
      padding: 16,
      margin: 16,
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
    nameContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      marginBottom: 32,
    },
    name: {
      fontSize: 30,
      fontWeight: "bold",
    },
    hp: {
      fontSize: 22,
    },
    image: {
      width: "100%",
      height: 200,
      marginBottom: 16,
    },
    typeContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 40,
    },
    badge: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 6,
      paddingHorizontal: 12,
      borderRadius: 20,
      borderWidth: 4,
    },
    typeEmoji: {
      fontSize: 30,
      marginRight: 12,
    },
    typeText: {
      fontSize: 22,
      fontWeight: "bold",
    },
    movesContainer: {
      marginBottom: 12,
    },
    movesText: {
      fontSize: 22,
      fontWeight: "bold",
    },
    weaknessContainer: {
      marginBottom: 8,
    },
    weaknessText: {
      fontSize: windowHeight > 100 && windowWidth > 100 ? 22 : 12,
      fontWeight: "bold",
    },
  });
