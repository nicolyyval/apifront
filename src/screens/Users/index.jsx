import { View } from "react-native";
import axios from "axios";
import styles from "./styles";
import Title from "../../components/Title";
import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const apiURL = process.env.EXPO_PUBLIC_API_URL;
  const getUsers = async () => {
    try {
      const response = await axios.get(`${apiURL}/users`);
      setUsers(response.data.users);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getUsers();
  }, []);

  console.log(users);

  return (
    <View style={styles.container}>
      <Title title="Usuários" />
      {users ? (
          users.map((user) => (
        
              <View key={user.id} syle={styles.user}>
                <Title title={user.name} />
                <Title title={user.email} />
              </View>
          
          )
        )) : (
          <Title title="Carregando..." />
        )}
        
    </View>
  );
}
