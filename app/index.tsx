import NameForm from "@/components/NameForm";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 50 }}>
        <Text style={styles.heading}>What's your full name?</Text>
        <Text style={styles.subHeading}>People use real names on Club</Text>
      </View>
      <NameForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 25,
    fontFamily: "Inter_900Black",
  },
  subHeading: {
    textAlign: "center",
    fontFamily: "Inter_300Light",
  },
});
