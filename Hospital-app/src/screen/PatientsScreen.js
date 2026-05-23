import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function PatientsScreen() {
  const patients = [
    "Rahul Patil - Room 204",
    "Sneha Joshi - ICU 12",
    "Amit Shah - OPD 15",
    "Priya Mehta - Ward 3B",
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Patients List</Text>

      {patients.map((patient, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.cardText}>{patient}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f5f9",
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#065f46",
  },

  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 16,
    marginBottom: 15,
    elevation: 3,
  },

  cardText: {
    fontSize: 18,
    fontWeight: "600",
  },
});
