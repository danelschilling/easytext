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

function TelaSurgimento({ navigation }) {
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
              <TextTitulo>Onde surgiu?</TextTitulo>
            </ContainerTitulo>

            <TextMenor>
              A técnica de Leitura Fácil é uma solução de suporte ainda muito
              recentemente.
            </TextMenor>

            <TextMenor>
              Há cerca de 50 anos foi publicado o primeiro livro na Suécia, onde
              hoje possui uma extensa biblioteca com mais de 1.000 títulos
              literários e diversos textos informativos.
            </TextMenor>

            <TextMenor>
              Na Espanha, sua implementação remonta ao início deste século, mas
              é o primeiro país do mundo a ter seu próprio padrão técnico e
              acordado que compila diretrizes de várias fontes e experiência
              profissional até o momento.
            </TextMenor>

            <TextMenor>
              No Brasil, essa técnica é mais nova ainda, se baseando em artigos
              e pesquisas estrangeiras.
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

export default TelaSurgimento;
