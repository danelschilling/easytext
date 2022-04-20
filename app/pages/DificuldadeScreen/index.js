import React, { useEffect, useRef, useState } from "react";
import { useUsuario } from "../../context/user.context";
import DrawerTeste from "../drawer-estilizado";
import { StyleSheet, DrawerLayoutAndroid, Image } from "react-native";
import { useAuth } from "../../api/EASYTEXT/use-EasyText-api.hook";
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
} from "./styles";

const topicos = {
  REDACAO: "Redação",
  GRAMATICA: "Gramática",
  VOCABULARIO: "Vocabulário",
};

const dificuldades = {
  FACIL: "Fácil",
  INTERMEDIARIO: "Intermediário",
  AVANCADO: "Avançado",
};

function TelaQuestoes({ navigation }) {
  const drawer = useRef(null);
  const [globalUser, setGlobalUser] = useUsuario();
  const { detalharUsuario, deslogar } = useAuth();
  const [nivelJogador, setNivelJogador] = useState();
  const [porcentagem, setPorcentagem] = useState();
  const [informacoesUsuario, setInformacoesUsuario] = useState("");
  const chaves_topicos = Object.keys(topicos);
  const chaves_dificuldaes = Object.keys(dificuldades);

  useEffect(() => {
    async function seila() {
      try {
        const response = await detalharUsuario();
        setInformacoesUsuario(response.data);
        setPorcentagem(response.data.pontos * 0.66);

        if (response.data.pontos > 299) {
          const pontosReduzidos = response.data.pontos - 300;
          setPorcentagem(pontosReduzidos * 0.66);
        }

        setNivelJogador(response.data.nivel);
      } catch (error) {
        navigation.navigate("Signin");
        console.log(error);
      }
    }
    seila();
  }, [globalUser]);

  async function sair() {
    try {
      await deslogar();
      setGlobalUser({ ...globalUser, token: "" });
      navigation.navigate("Signin");
    } catch (error) {
      console.log(error);
    }
  }

  function menuEnviarQuestao() {
    navigation.navigate("TelaEnviarQuestao");
  }

  function teste(topico, nivel) {
    setGlobalUser({ ...globalUser, atualizador: !globalUser.atualizador });
    navigation.navigate("Teste", { topico, nivel });
  }

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={240}
      drawerPosition={"left"}
      renderNavigationView={() =>
        DrawerTeste({
          informacoesUsuario: informacoesUsuario,
          valorPorcentagem: porcentagem,
          sair: sair,
          menuEnviarQuestao: menuEnviarQuestao,
        })
      }
    >
      <Scroll>
        <Container>
          <ContainerDois>
            <ContainerHeader style={styles.header}>
              <ButtonHeader onPress={() => drawer.current.openDrawer()}>
                <Image
                  style={styles.icon}
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/64/151/151917.png",
                  }}
                />
              </ButtonHeader>
              <TextHeader>Easy Text</TextHeader>
            </ContainerHeader>

            <ContainerQuestoes>
              <Text>Introdução</Text>
              <ButtonSubmit
                onPress={() => navigation.navigate("TelaIntroducao")}
              >
                <TextButton>Leitura Facil</TextButton>
              </ButtonSubmit>
            </ContainerQuestoes>
            {chaves_dificuldaes.map((dificuldade, index) => (
              <ContainerQuestoes key={index}>
                <Text>{dificuldades[dificuldade]}</Text>
                {chaves_topicos.map((topico, index) => (
                  <ButtonSubmit
                    style={nivelJogador !== dificuldade ? styles.botao : null}
                    disabled={nivelJogador !== dificuldade}
                    key={index}
                    onPress={() => teste(topico, dificuldade)}
                  >
                    <TextButton>{topicos[topico]}</TextButton>
                  </ButtonSubmit>
                ))}
              </ContainerQuestoes>
            ))}
          </ContainerDois>
        </Container>
      </Scroll>
    </DrawerLayoutAndroid>
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

export default TelaQuestoes;
