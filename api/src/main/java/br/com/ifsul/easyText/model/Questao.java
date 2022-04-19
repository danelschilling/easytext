package br.com.ifsul.easyText.model;

import br.com.ifsul.easyText.model.Enum.Dificuldade;
import br.com.ifsul.easyText.model.Enum.Topico;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

import java.util.List;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Getter
@Setter
@EqualsAndHashCode(of = "id")
@ToString(of = "id")
public class Questao {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;

    private String descricao;

    private String enunciado;

    private String respostaCerta;

    private Integer pontoQuestao;

    @OneToMany(mappedBy = "questao", cascade = CascadeType.ALL)
    private List<OpcoesQuestoes> opcaoQuestao;

    @Enumerated(EnumType.STRING)
    private Dificuldade dificuldade;

    @Enumerated(EnumType.STRING)
    private Topico topico;

    @OneToMany(mappedBy = "questao", cascade = CascadeType.ALL)
    private List<QuestoesRespondidasPeloUsuario> questaoRespondidaPeloUsuario;

}
