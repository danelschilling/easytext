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

function TelaExplicacao({ navigation }) {
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
              <TextTitulo>O que é a Leitura Fácil?</TextTitulo>
            </ContainerTitulo>

            <TextMenor>
              A Leitura fácil é a adaptação linguística de um texto para
              facilitar a leitura e sua compreensão.
            </TextMenor>

            <TextMenor>
              A partir dessa adaptação, publicações apresentam textos claros e
              de fácil compreensão, de forma adequada para diferentes faixas
              etárias.
            </TextMenor>

            <TextMenor>
              No Easy Text você aprenderá as regras que deverá aplicar para
              adaptar um texto, como o conteúdo, a linguagem, as ilustrações e o
              layout, para que se alcance o resultado esperado.
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

export default TelaExplicacao;
