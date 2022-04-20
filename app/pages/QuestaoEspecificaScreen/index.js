import React, { useEffect, useState } from "react";
import { useUsuario } from "../../context/user.context";

import { useAuth } from "../../api/EASYTEXT/use-EasyText-api.hook";
import { RadioButton } from "react-native-paper";
import { StyleSheet, Image } from "react-native";
import {
  ButtonSubmit,
  Scroll,
  Container,
  ContainerDois,
  TextButton,
  Text,
  TextTopico,
  Titulo,
  ContainerHeader,
  ButtonHeader,
  TextHeader,
} from "./styles";

const topicos = {
  REDACAO: "Redação",
  GRAMATICA: "Gramática",
  VOCABULARIO: "Vocabulário",
};

function TelaQuestaoEspecifica({ navigation, route }) {
  const [globalUser, setGlobalUser] = useUsuario();
  const [value, setValue] = useState("");
  const { questaoEspecifica, submeterQuestao } = useAuth();
  const [topico, setTopico] = useState();
  const [nivel, setNivel] = useState();
  const [questao, setQuestao] = useState("");
  const { questaoId, numeroQuestao } = route.params;

  useEffect(() => {
    async function seila() {
      try {
        const response = await questaoEspecifica(questaoId);
        setQuestao(response.data);
        setTopico(response.data.topico);
        setNivel(response.data.dificuldade);
        setValue(response.data.opcoesQuestao[0].opcao);
      } catch (error) {
        navigation.navigate("Signin");
        console.log(error);
      }
    }
    seila();
  }, [globalUser]);

  async function enviarQuestao() {
    try {
      await submeterQuestao(questaoId, value);
      setGlobalUser({ ...globalUser, atualizador: !globalUser.atualizador });
      navigation.navigate("Teste", { topico, nivel });
    } catch (error) {
      navigation.navigate("Signin");
      console.log(error);
    }
  }

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

          <TextTopico>{topicos[questao.topico]}</TextTopico>
          <Titulo>{`Questão ${numeroQuestao} - ${questao.enunciado}`}</Titulo>
          <Text>{questao.descricao}</Text>

          {questao ? (
            <RadioButton.Group
              onValueChange={(value) => setValue(value)}
              value={value}
            >
              {questao?.opcoesQuestao?.map((opcao, index) => (
                <RadioButton.Item
                  key={index}
                  label={opcao.opcao}
                  value={opcao.opcao}
                  color="#06316a"
                  style={[styles.container]}
                />
              ))}
            </RadioButton.Group>
          ) : null}
          <ButtonSubmit onPress={enviarQuestao}>
            <TextButton>{`Confirmar resposta`}</TextButton>
          </ButtonSubmit>
        </ContainerDois>
      </Container>
    </Scroll>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    flex: 1,
    borderWidth: 2,
    borderColor: "#06316a",
    marginBottom: 10,
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

export default TelaQuestaoEspecifica;
