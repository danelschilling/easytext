import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ToastProvider } from "react-native-toast-notifications";
import "react-native-gesture-handler";
import React from "react";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import TelaExplicacao from "./pages/Telas-estaticas/Tela1";
import TelaIntroducao from "./pages/Telas-estaticas/TelaPrincipalEstatica";
import TelaSurgimento from "./pages/Telas-estaticas/Tela2";
import TelaEnviarQuestao from "./pages/EnviarQuestoes";
import TelaPublico from "./pages/Telas-estaticas/tela3";
import TelaArtigos from "./pages/Telas-estaticas/Tela4";
import TelaQuestoes from "./pages/DificuldadeScreen";
import TelaQuestaoEspecifica from "./pages/QuestaoEspecificaScreen";
import Teste from "./pages/TelaPrincipal";
import { GlobalUserProvider } from "./context/user.context";
import { decode as atob, encode as btoa } from "base-64";
import { decode, encode } from "base-64";

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GlobalUserProvider>
      <ToastProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Signin">
            <Stack.Screen
              name="TelaExplicacao"
              component={TelaExplicacao}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TelaSurgimento"
              component={TelaSurgimento}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TelaPublico"
              component={TelaPublico}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TelaArtigos"
              component={TelaArtigos}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Signin"
              component={Signin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Teste"
              component={Teste}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TelaEnviarQuestao"
              component={TelaEnviarQuestao}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TelaIntroducao"
              component={TelaIntroducao}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TelaQuestoes"
              component={TelaQuestoes}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TelaQuestaoEspecifica"
              component={TelaQuestaoEspecifica}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ToastProvider>
    </GlobalUserProvider>
  );
}
