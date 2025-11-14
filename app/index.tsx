import NameForm from "@/components/NameForm";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={{marginBottom: 50}}>
        <Text style={styles.heading}>What's your full name?</Text>
        <Text style={{textAlign: "center"}}>People use real names on Club</Text>
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
    fontWeight: "bold",
  },

});
