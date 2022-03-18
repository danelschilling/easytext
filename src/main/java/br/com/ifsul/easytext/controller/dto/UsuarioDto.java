package br.com.ifsul.easytext.controller.dto;

import br.com.ifsul.easytext.models.Usuario;

import java.util.List;
import java.util.stream.Collectors;

public class UsuarioDto {

    private Long id;
    private String nome;
    private String email;

    public UsuarioDto(Usuario usuario){
        this.id = usuario.getIdUsuario();
        this.nome = usuario.getNomeUsuario();
        this.email = usuario.getEmail();
    }



    public Long getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public String getEmail() {
        return email;
    }


    public static List<UsuarioDto> converter(List<Usuario> usuarios) {
        return usuarios.stream().map(UsuarioDto::new).collect(Collectors.toList());
    }
}
