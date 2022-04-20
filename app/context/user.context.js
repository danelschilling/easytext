import createGlobalState from "react-create-global-state";

const initialUser = {
  token: "",
  atualizador: false,
};

const [useGlobalUser, GlobalUserProvider] = createGlobalState(initialUser);

function useUsuario() {
  const [usuario, setUsuario] = useGlobalUser();
  function setInformacoesUsuario(valorRecebido) {
    setUsuario(valorRecebido);
  }
  return [usuario, setInformacoesUsuario];
}

export { useUsuario, GlobalUserProvider };
