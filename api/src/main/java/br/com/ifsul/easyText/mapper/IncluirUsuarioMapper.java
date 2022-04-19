package br.com.ifsul.easyText.mapper;


import br.com.ifsul.easyText.controller.request.RegistroUsuarioRequest;
import br.com.ifsul.easyText.model.Enum.Dificuldade;
import br.com.ifsul.easyText.security.model.Usuario;

public class IncluirUsuarioMapper {

    public static Usuario toEntity(RegistroUsuarioRequest request) {
        Usuario usuario = new Usuario();

        usuario.setNomeCompleto(request.getNomeCompleto());
        usuario.setEmail(request.getEmail());
        usuario.setSenha(request.getSenha());
        usuario.setDificuldade(Dificuldade.FACIL);
        usuario.setPontos(0L);

        return usuario;
    }

}
