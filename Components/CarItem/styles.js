import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "blue",
  },
  header: {
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  headerTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundimage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  batterysection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  batteryimage: {
    height: 26,
    width: 70,
    marginRight: 12,
  },
  batterytext: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
  },
  status: {
    color: "white",
    alignItems: "center",
  },
  statusText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  controls: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 200,
  },
  controlsButtons: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 50,
    padding: 18,
    marginLeft: 25,
  },
});
export default styles;
