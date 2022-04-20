import styled from "styled-components/native";

export const Scroll = styled.ScrollView`
  width: 100%;
`;

export const ContainerDois = styled.View`
  flex: 1;
  width: 90%;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  width: 100%;
`;

export const TextTopico = styled.Text`
  margin-top: 6px;
  font-weight: bold;
  margin-bottom: 10px;
  color: black;
  font-size: 28px;
  font-family: sans-serif;
`;

export const ContainerQuestoes = styled.View`
  width: 100%;
  margin: 0;
`;

export const ContainerHeader = styled.View`
  width: 100%;
  margin-top: 40px;
  flex-direction: row;
  align-items: center;
  padding-bottom: 5px;
`;

export const ButtonHeader = styled.TouchableOpacity`
  margin-top: 5px;
  width: 38px;
  height: 38px;
  align-items: center;
  justify-content: center;
`;

export const TextHeader = styled.Text`
  font-weight: bold;
  font-size: 32px;
  margin-left: 66px;
`;

export const ContainerInput = styled.View`
  margin-top: 10px;
  width: 100%;
`;

export const Text = styled.Text`
  color: black;
  font-size: 20px;
  margin-bottom: 5px;
`;

export const TextMaior = styled.TextInput`
  border: 2px solid #06316a;
  margin-bottom: 8px;
  padding-left: 15px;
  padding-bottom: 95px;
  color: black;
  font-size: 18px;
  border-radius: 5px;
  width: 100%;
  height: 130px;
`;

export const Input = styled.TextInput`
  border: 2px solid #06316a;
  margin-bottom: 8px;
  padding-left: 15px;
  color: black;
  font-size: 18px;
  border-radius: 5px;
  width: 100%;
  height: 50px;
`;

export const ButtonSubmit = styled.TouchableOpacity`
  background-color: #06316a;
  border-radius: 5px;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin: 20px 0px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 20px;
`;
