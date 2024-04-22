import { View } from "react-native";
import axios from "axios";
import styles from "./styles";
import Title from "../../components/Title";

export default function Users() {
  
  return (
    <View style={styles.container}>
      <Title title="Usuários" />
    </View>
  );
}
