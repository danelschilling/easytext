import React, { useEffect, useState } from "react";
import { useUsuario } from "../../context/user.context";

import { useAuth } from "../../api/EASYTEXT/use-EasyText-api.hook";
import { StyleSheet, Image } from "react-native";
import {
  ButtonSubmit,
  Scroll,
  Container,
  ContainerDois,
  TextButton,
  Text,
  TextTopico,
  ContainerHeader,
  ButtonHeader,
  TextHeader,
} from "./styles";

const topicos = {
  REDACAO: "Redação",
  GRAMATICA: "Gramática",
  VOCABULARIO: "Vocabulário",
};

const textoTopico = {
  REDACAO:
    "A ortografia é o conjunto de normas que devem ser seguidas para escrever textos nas normas da Leitura Fácil. Esse ponto é muito importante para que o texto não seja mal interpretado.",
  GRAMATICA:
    "A gramática é o conjunto de regras que determinam o uso considerado correto da língua escrita e falada, sendo importante para entender a mensagem.",
  VOCABULARIO:
    "O vocabulário é um conjunto de palavras familiares na linguagem de uma pessoa. Um vocabulário pode servir como uma ferramenta útil e fundamental para a comunicação e aquisição de conhecimento.",
};

function Teste({ navigation, route }) {
  const [globalUser, setGlobalUser] = useUsuario();
  const { listarQuestoesDificuldade, detalharUsuario } = useAuth();
  const [questao, setQuestao] = useState();
  const [questoesRespondidas, setQuestoesRespondidas] = useState();
  const { topico, nivel } = route.params;

  useEffect(() => {
    async function usarAPI() {
      try {
        const response = await listarQuestoesDificuldade(topico, nivel);
        setQuestao(response.data);

        const responseUsuario = await detalharUsuario();
        const responseUsuarioMelhorada = responseUsuario.data.questoesAcertadas;

        const questoesFiltradas = responseUsuarioMelhorada.map(
          (questao) => questao.idQuestao
        );
        setQuestoesRespondidas(questoesFiltradas);
      } catch (error) {
        navigation.navigate("Signin");
        console.log(error);
      }
    }
    usarAPI();
  }, [globalUser]);

  function irParaQuestao(questaoId, numeroQuestao) {
    setGlobalUser({ ...globalUser, atualizador: !globalUser.atualizador });
    navigation.navigate("TelaQuestaoEspecifica", { questaoId, numeroQuestao });
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

          <TextTopico>{topicos[topico]}</TextTopico>
          <Text>{textoTopico[topico]}</Text>

          {questao &&
            questao.map((questao, index) => (
              <ButtonSubmit
                style={
                  questoesRespondidas?.includes(questao.id)
                    ? styles.botao
                    : null
                }
                disabled={questoesRespondidas?.includes(questao.id)}
                key={index}
                onPress={() => irParaQuestao(questao.id, index + 1)}
              >
                <TextButton>{`Questão ${index + 1}`}</TextButton>
              </ButtonSubmit>
            ))}
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

export default Teste;
