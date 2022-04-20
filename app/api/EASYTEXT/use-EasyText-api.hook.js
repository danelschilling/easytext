import { useHttp } from "../use-http.hook";
import { useMemo } from "react";
import { useUsuario } from "../../context/user.context";

const URL_BASE = "http://192.168.1.13:8080";

export const useAuth = () => {
  const [globalUser, setGlobalUser] = useUsuario();

  const http = useHttp(URL_BASE, { "X-Auth-Token": globalUser.token });

  async function login(email, senha) {
    const response = http.post(
      "/login",
      {},
      { auth: { username: email, password: senha } }
    );
    return response;
  }

  async function registrar(nomeCompleto, email, senha) {
    const response = http.post("/usuario", {
      nomeCompleto: nomeCompleto,
      email: email,
      senha: senha,
    });
    return response;
  }

  async function editar(nomeCompleto) {
    const response = http.put("/usuario", {
      nomeCompleto: nomeCompleto,
    });
    return response;
  }

  async function detalharUsuario() {
    return await http.get("/usuario");
  }

  async function deslogar() {
    setGlobalUser({ ...globalUser, token: "" });
    await http.del("/logout");
  }

  async function listarQuestoes() {
    return await http.get("/questoes");
  }

  async function questaoEspecifica(idQuestao) {
    return await http.get(`/questoes/${idQuestao}`);
  }

  async function listarQuestoesDificuldade(topico, nivel) {
    return await http.get(`/questoes/${topico}/${nivel}`);
  }

  async function submeterQuestao(idQuestao, resposta) {
    const response = http.post(`/questoes/submeter/${idQuestao}`, {
      resposta: resposta,
    });
    return response;
  }

  return useMemo(
    () => ({
      login,
      registrar,
      editar,
      deslogar,
      listarQuestoes,
      questaoEspecifica,
      listarQuestoesDificuldade,
      submeterQuestao,
      detalharUsuario,
    }),
    // eslint-disable-next-line
    []
  );
};
