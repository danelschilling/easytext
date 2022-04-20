import React, { useEffect, useState } from "react";

import LogoPreto from "../../assets/logo-preto.png";
import { Image, StyleSheet } from "react-native";
import {
  ContainerDrawer,
  ContainerAvatar,
  ImagemAvatar,
  TextNome,
  ButtonSubmit,
  TextButton,
  ContainerLogo,
  BarraProgresso,
  BarraProgresso1,
  ContainerNivel,
  TextNivel,
  TextPonto,
} from "./styles";

const DrawerTeste = ({
  informacoesUsuario,
  valorPorcentagem,
  sair,
  menuEnviarQuestao,
}) => {


  return (
    <ContainerDrawer>
      <ContainerAvatar>
        <ImagemAvatar>
          <Image
            style={styles.logo}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/32/1077/1077114.png",
            }}
          />
        </ImagemAvatar>
      </ContainerAvatar>
      <TextNome>{informacoesUsuario.nomeCompleto}</TextNome>
      <TextPonto>{informacoesUsuario.pontos} pontos</TextPonto>

      <BarraProgresso>
        <BarraProgresso1 style={{ width: valorPorcentagem }} />
      </BarraProgresso>

      {informacoesUsuario.nivel === "FACIL" ? (
        <ContainerNivel>
          <TextNivel>Fácil</TextNivel>
          <TextNivel>Intermediario</TextNivel>
        </ContainerNivel>
      ) : (
        <ContainerNivel>
          <TextNivel>Intermediario</TextNivel>
          <TextNivel>Dificil</TextNivel>
        </ContainerNivel>
      )}

      <ButtonSubmit style={styles.button}>
        <Image
          style={styles.icon}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/32/69/69891.png",
          }}
        />
        <TextButton>Conta</TextButton>
      </ButtonSubmit>

      <ButtonSubmit onPress={menuEnviarQuestao} style={styles.button}>
        <Image
          style={styles.icon}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/32/1933/1933005.png",
          }}
        />
        <TextButton>Enviar questão</TextButton>
      </ButtonSubmit>
      <ButtonSubmit style={styles.button}>
        <Image
          style={styles.icon}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/32/18/18436.png",
          }}
        />
        <TextButton>Ajuda</TextButton>
      </ButtonSubmit>
      <ButtonSubmit onPress={sair} style={styles.button}>
        <Image
          style={styles.icon}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/32/1250/1250678.png",
          }}
        />
        <TextButton>Sair</TextButton>
      </ButtonSubmit>

      <ContainerLogo>
        <Image style={styles.logoPreto} source={LogoPreto} />
      </ContainerLogo>
    </ContainerDrawer>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 40,
    height: 40,
  },
  icon: {
    width: 24,
    height: 24,
  },
  button: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  logoPreto: {
    width: 140,
    height: 140,
  },
});

export default DrawerTeste;
