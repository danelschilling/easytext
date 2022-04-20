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
  margin-top: 40px;
`;

export const ContainerInput = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  color: black;
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const Text = styled.Text`
  color: black;
  font-size: 16px;
  margin-bottom: 10px;
  align-items: center;
`;

export const Input = styled.TextInput`
  border: 2px solid #06316a;
  margin-bottom: 12px;
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
