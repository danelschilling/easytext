import styled from "styled-components/native";

export const Scroll = styled.ScrollView`
  width: 100%;
`;

export const ContainerDois = styled.View`
  flex: 1;
  width: 90%;
  align-items: center;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  width: 100%;
`;

export const Text = styled.Text`
  margin-top: 20px;
  margin-bottom: 10px;
  color: black;
  font-size: 22px;
`;

export const ButtonSubmit = styled.TouchableOpacity`
  background-color: #06316a;
  border-radius: 5px;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 20px;
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
