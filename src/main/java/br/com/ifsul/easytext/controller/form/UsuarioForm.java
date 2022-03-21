package br.com.ifsul.easytext.controller.form;

import br.com.ifsul.easytext.models.Usuario;

public class UsuarioForm {

    private String nome;
    private String email;
    private String senha;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Usuario converter() {
        return new Usuario(nome,email, senha);
    }
}
