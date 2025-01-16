import { geradorRoupa } from "@/services/ai/generator";
import styles from "@/styles";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { MotiView } from 'moti';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import React from "react";

export default function Index() {
  const [roupa, setRoupa] = useState("")
  const [resposta, setResposta] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const callRoupa = async () => {
    if (roupa.length < 10) {
      alert("Desculpe, a descrição deve ter mais que 10 caracteres")
      return;
    }

    setIsLoading(true);
    setRoupa("")
    setResposta("")

    try {
      const result = await geradorRoupa(roupa);
      setResposta(result);
    } catch (error) {
      alert(error)
    } finally {
      setIsLoading(false);
    }


  }

  return (
    <View
      style={styles.container}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Icon name="checkroom" size={30} color="#3FB6A3" style={{ marginRight: 8 }} />
      <Text style={styles.titulo}>Roupas generator</Text>
    </View>

      <Text style={styles.subtitulo}>Seu gerador de combinações de roupa ao seu estilo</Text>
      <TextInput
        onChangeText={setRoupa}
        value={roupa}
        style={styles.input}
        placeholder="Digite sobre o evento que voce quer ir..."></TextInput>

      <TouchableOpacity style={styles.button} onPress={callRoupa}>
        <Text style={styles.buttonText}>{isLoading ? "Carregando..." : "Gerar combinação!"}</Text>
      </TouchableOpacity>


      {
        resposta && (
          <MotiView
            style={styles.card}
            from={{ opacity: 0, translateX: 200 }}
            animate={{ opacity: 1, translateX: 0 }}
          >
            <Text style={styles.cardTitle}>Sua combinação está pronta:</Text>
            <Text style={styles.cardText}>{resposta}</Text>
          </MotiView>
        )
      }

    </View>
  );
}
