import styled from "styled-components/native";

export const ContainerDrawer = styled.View`
  flex: 1;
  padding: 10px 20px;
`;

export const ContainerAvatar = styled.View`
  margin-top: 50px;
  align-items: center;
  justify-content: center;
`;

export const ImagemAvatar = styled.View`
  text-align: center;
  border-radius: 50px;
  width: 76px;
  height: 76px;
  align-items: center;
  justify-content: center;
  background-color: #bbbbbb;
`;

export const TextNome = styled.Text`
  margin-top: 10px;
  margin-bottom: 20px;
  color: black;
  font-size: 20px;
  text-align: center;
`;

export const ButtonSubmit = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
`;

export const TextButton = styled.Text`
  margin-left: 10px;
  color: black;
  font-size: 20px;
`;

export const ContainerLogo = styled.View`
  margin-top: 30px;
  align-items: center;
  justify-content: center;
`;

export const BarraProgresso = styled.View`
  flex-direction: row;
  border: 2px solid black;
  width: 204px;
  height: 14px;
  border-radius: 100px;
`;

export const BarraProgresso1 = styled.View`
  height: 10px;
  background-color: black;
`;

export const ContainerNivel = styled.View`
  flex-direction: row;
  width: 204px;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const TextNivel = styled.Text`
  color: black;
  font-size: 16px;
`;

export const TextPonto = styled.Text`
  color: black;
  font-size: 18px;
  text-align: center;
`;
