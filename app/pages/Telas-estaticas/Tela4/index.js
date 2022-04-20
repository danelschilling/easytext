import React from "react";
import { StyleSheet, Image } from "react-native";
import {
  Scroll,
  Container,
  ContainerDois,
  Text,
  ContainerQuestoes,
  ContainerHeader,
  ButtonHeader,
  TextHeader,
  TextMenor,
  TextTitulo,
  ContainerTitulo,
} from "../styles";

function TelaArtigos({ navigation }) {
  return (
    <Scroll>
      <Container>
        <ContainerDois>
          <ContainerHeader style={styles.header}>
            <ButtonHeader onPress={() => navigation.navigate("TelaIntroducao")}>
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

            <ContainerTitulo>
              <TextTitulo>Artigos</TextTitulo>
            </ContainerTitulo>

            <TextMenor>
              Neste espaço você verá artigos e sites sobre Leitura Fácil!
            </TextMenor>
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

export default TelaArtigos;
