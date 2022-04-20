import React from "react";
import { StyleSheet, Image } from "react-native";
import {
  ButtonSubmit,
  Scroll,
  Container,
  ContainerDois,
  TextButton,
  Text,
  ContainerQuestoes,
  ContainerHeader,
  ButtonHeader,
  TextHeader,
  TextMenor,
} from "./styles";

function TelaIntroducao({ navigation }) {
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

          <ContainerQuestoes>
            <Text>Introdução</Text>

            <TextMenor>
              O aplicativo Easy Text é uma das parte do desenvolvimento do
              relatório técnico para conclusão do Curso Técnico em Informática,
              integrado ao Ensino Médio, do Instituto Federal Sul-rio-grandense
              (IFSul), sob o título "Easy Text: Uma aplicação para auxiliar a
              produção de textos acessíveis por meio da técnica de Leitura
              Fácil", orientada pelo Prof. Dr. Lourenço de Oliveira Basso.
            </TextMenor>

            <ButtonSubmit onPress={() => navigation.navigate("TelaExplicacao")}>
              <TextButton>O que é Leitura Fácil</TextButton>
            </ButtonSubmit>
            <ButtonSubmit onPress={() => navigation.navigate("TelaSurgimento")}>
              <TextButton>Onde surgiu</TextButton>
            </ButtonSubmit>
            <ButtonSubmit onPress={() => navigation.navigate("TelaPublico")}>
              <TextButton>Publico-alvo</TextButton>
            </ButtonSubmit>
            <ButtonSubmit onPress={() => navigation.navigate("TelaArtigos")}>
              <TextButton>Artigos e sites relacionados</TextButton>
            </ButtonSubmit>
          </ContainerQuestoes>
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

export default TelaIntroducao;
