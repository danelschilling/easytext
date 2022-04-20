import React, { useState, useEffect } from "react";
import { useAuth } from "../../api/EASYTEXT/use-EasyText-api.hook";
import { Image, ToastAndroid } from "react-native";
import Logo from "../../assets/logo-makerclub.png";
import {
  Title,
  Container,
  Input,
  ButtonSubmit,
  TextButton,
  Text,
  ContainerInput,
  Scroll,
  ContainerDois,
} from "./styles";

function Signin({ navigation }) {
  const { registrar } = useAuth();
  const [senha, setSenha] = useState();
  const [email, setEmail] = useState();
  const [confirmacaoSenha, setConfirmacaoSenha] = useState();
  const [nomeCompleto, setNomeCompleto] = useState();

  async function cadastroUsuario() {
    try {
      await registrar(nomeCompleto, email, senha);
      navigation.navigate("Signin");
      ToastAndroid.showWithGravityAndOffset(
        "Registrado com sucesso!",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        100
      );
    } catch (error) {
      navigation.navigate("Signin");
      console.log(error);
    }
  }

  return (
    <Scroll>
      <Container>
        <ContainerDois>
          <Image source={Logo} />
          <Title>Easy Text</Title>
          <ContainerInput>
            <Text>Nome completo</Text>
            <Input
              onChangeText={(newText) => setNomeCompleto(newText)}
              defaultValue={nomeCompleto}
              name="NomeCompleto"
              placeholderTextColor="#808080"
              placeholder="Seu nome"
            />
            <Text>Email</Text>
            <Input
              onChangeText={(newText) => setEmail(newText)}
              defaultValue={email}
              name="email"
              placeholderTextColor="#808080"
              placeholder="Seu e-mail"
            />
            <Text>Senha</Text>
            <Input
              placeholderTextColor="#808080"
              placeholder="Sua senha"
              secureTextEntry
              onChangeText={(newText) => setSenha(newText)}
              defaultValue={senha}
              name="senha"
            />
            <Text>Confirme a senha</Text>
            <Input
              onChangeText={(newText) => setConfirmacaoSenha(newText)}
              defaultValue={confirmacaoSenha}
              name="Confirmacaosenha"
              placeholderTextColor="#808080"
              placeholder="Confirme sua senha"
              secureTextEntry
            />
          </ContainerInput>

          <ButtonSubmit onPress={cadastroUsuario}>
            <TextButton>Registrar</TextButton>
          </ButtonSubmit>
        </ContainerDois>
      </Container>
    </Scroll>
  );
}

export default Signin;
