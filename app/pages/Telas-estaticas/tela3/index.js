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

function TelaPublico({ navigation }) {
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
              <TextTitulo>Público-alvo</TextTitulo>
            </ContainerTitulo>

            <TextMenor>
              Existe muitos grupos que podem ser beneficiados com textos
              adaptados em Leitura Fácil. Os dois grupos principais são:
            </TextMenor>

            <TextMenor>
              1) Pessoas com deficiência que têm necessidade de produções em
              Leitura Fácil.
            </TextMenor>

            <TextMenor>
              2) Leitores iniciantes que podem achar útil este tipo de material
              pois tem a capacidade de abrir portas e ser um recurso de
              treinamento útil, além de criar interesse e ser uma ferramenta
              para melhorar as habilidades de leitura.
            </TextMenor>

            <TextMenor>
              Nesta aplicação focamos em pessoas com interesse em escrever e
              adaptar textos, para que estes aprendam as regras para produzir
              textos acessíveis.
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

export default TelaPublico;
