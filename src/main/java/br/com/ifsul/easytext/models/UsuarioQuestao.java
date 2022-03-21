package br.com.ifsul.easytext.models;

import javax.persistence.*;

@Entity
public class UsuarioQuestao {

    public UsuarioQuestao() {
    }

    public UsuarioQuestao(Usuario usuario, Questao questao, String respostaCorreta) {
        this.questao = questao;
        this.usuario = usuario;
        this.respostaCorreta = respostaCorreta;

    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idUsuarioQuestao;

    @ManyToOne
    @JoinColumn(name = "idUsuario")
    private Usuario usuario;

    @ManyToOne
    @JoinColumn(name = "idQuestao")
    private Questao questao;

    @Column(nullable = false)
    private String respostaCorreta;

    @Column(nullable = false)
    private boolean correto;

}
