
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function ProfileScreen() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Prathmesh Joshi",
      department: "Cardiology",
      experience: "8 Years",
      email: "prathmesh@hospital.com",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },

    {
      id: 2,
      name: "Dr. Akash Patil",
      department: "Neurology",
      experience: "6 Years",
      email: "akash@hospital.com",
      image: "https://cdn-icons-png.flaticon.com/512/3774/3774299.png",
    },

    {
      id: 3,
      name: "Dr. Sanjay Kulkarni",
      department: "Orthopedics",
      experience: "10 Years",
      email: "sanjay@hospital.com",
      image: "https://cdn-icons-png.flaticon.com/512/921/921071.png",
    },

    {
      id: 4,
      name: "Dr. Priya Sharma",
      department: "Pediatrics",
      experience: "5 Years",
      email: "priya@hospital.com",
      image: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>👨‍⚕️ Doctor Profiles</Text>

      {doctors.map((doctor) => (
        <View key={doctor.id} style={styles.card}>
          <Image source={{ uri: doctor.image }} style={styles.image} />

          <Text style={styles.name}>{doctor.name}</Text>

          <Text style={styles.info}>🏥 {doctor.department}</Text>

          <Text style={styles.info}>⭐ Experience: {doctor.experience}</Text>

          <Text style={styles.info}>📧 {doctor.email}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f1f5f9",
    alignItems: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 25,
    color: "#065f46",
  },

  card: {
    width: Platform.OS === "web" ? 450 : "100%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 25,
    marginBottom: 20,
    alignItems: "center",

    elevation: 5,

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },

  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 10,
    textAlign: "center",
  },

  info: {
    fontSize: 16,
    color: "#475569",
    marginBottom: 6,
    textAlign: "center",
  },
});
