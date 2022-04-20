import React, { useState, useEffect } from "react";
import { useUsuario } from "../../context/user.context";
import { useAuth } from "../../api/EASYTEXT/use-EasyText-api.hook";
import { Image } from "react-native";
import Logo from "../../assets/logo-makerclub.png";
import {
  Title,
  Container,
  Input,
  ButtonSubmit,
  TextButton,
  Text,
  ContainerInput,
  ForgotPass,
  Scroll,
  ContainerDois,
} from "./styles";

function Signin({ navigation }) {
  const [globalUser, setGlobalUser] = useUsuario();
  const { login } = useAuth();
  const [senha, setSenha] = useState();
  const [email, setEmail] = useState();
  const [erro, setErro] = useState("");

  useEffect(() => {
    setEmail("");
    setSenha("");
  }, [globalUser]);

  async function handleSubmit(evento) {
    evento.preventDefault();
    try {
      const response = await login(email, senha);
      setGlobalUser({ ...globalUser, token: response.headers["x-auth-token"] });

      navigation.navigate("TelaQuestoes");
    } catch (error) {
      setErro(error);
      console.log(erro);
    }
  }

  return (
    <Scroll>
      <Container>
        <ContainerDois>
          <Image source={Logo} />
          <Title>Easy Text</Title>
          <ContainerInput>
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
              onChangeText={(newText) => setSenha(newText)}
              defaultValue={senha}
              name="senha"
              placeholderTextColor="#808080"
              placeholder="Sua senha"
              secureTextEntry
            />
            <ForgotPass>Esqueceu sua senha?</ForgotPass>
          </ContainerInput>
          <ButtonSubmit onPress={handleSubmit}>
            <TextButton>Entrar</TextButton>
          </ButtonSubmit>
          <ButtonSubmit onPress={() => navigation.navigate("Signup")}>
            <TextButton>Cadastrar</TextButton>
          </ButtonSubmit>
        </ContainerDois>
      </Container>
    </Scroll>
  );
}

export default Signin;
