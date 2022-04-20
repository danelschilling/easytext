import React, { useEffect, useState } from "react";
import { useAuth } from "../../api/EASYTEXT/use-EasyText-api.hook";
import { useUsuario } from "../../context/user.context";
import { StyleSheet, Image } from "react-native";
import {
  Text,
  Input,
  Container,
  ContainerHeader,
  ButtonHeader,
  TextHeader,
  Scroll,
  ContainerDois,
  ContainerInput,
  ButtonSubmit,
  TextButton,
  TextMaior,
} from "./styles";

function TelaEnviarQuestao({ navigation }) {
  const [questao, setQuestao] = useState();

  return (
    <Scroll>
      <Container>
        <ContainerDois>
          <ContainerHeader style={styles.header}>
            <ButtonHeader onPress={() => navigation.navigate("TelaQuestoes")}>
              <Image
                style={styles.icon}
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/64/93/93634.png",
                }}
              />
            </ButtonHeader>
            <TextHeader>Easy Text</TextHeader>
          </ContainerHeader>

          <ContainerInput>
            <Text>Enunciado</Text>
            <Input
              onChangeText={(newText) => setQuestao(newText)}
              defaultValue={questao}
              name="enunciado"
              placeholderTextColor="#808080"
              placeholder="Enunciado"
            />

            <Text>Descrição</Text>
            <TextMaior
              onChangeText={(newText) => setQuestao(newText)}
              defaultValue={questao}
              name="descricao"
              placeholderTextColor="#808080"
              placeholder="Descrição"
            />

            <Text>Dificuldade</Text>
            <Input
              onChangeText={(newText) => setQuestao(newText)}
              defaultValue={questao}
              name="dificuldade"
              placeholderTextColor="#808080"
              placeholder="Fácil | Intermediário | Difícil"
            />

            <Text>Tópico</Text>
            <Input
              onChangeText={(newText) => setQuestao(newText)}
              defaultValue={questao}
              name="topico"
              placeholderTextColor="#808080"
              placeholder="Redação | Ortografia | Gramática"
            />

            <Text>Respostas erradas</Text>
            <Input
              onChangeText={(newText) => setQuestao(newText)}
              defaultValue={questao}
              name="RespostasErrada"
              placeholderTextColor="#808080"
              placeholder={`Separe as alternativas por "/"`}
            />

            <Text>Resposta correta</Text>
            <Input
              onChangeText={(newText) => setQuestao(newText)}
              defaultValue={questao}
              name="RespostaCorreta"
              placeholderTextColor="#808080"
              placeholder="Alternativa correta"
            />
          </ContainerInput>

          <ButtonSubmit onPress={""}>
            <TextButton>Enviar questão</TextButton>
          </ButtonSubmit>
        </ContainerDois>
      </Container>
    </Scroll>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  icon: {
    width: 34,
    height: 34,
    marginBottom: 5,
  },
  header: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
});

export default TelaEnviarQuestao;
