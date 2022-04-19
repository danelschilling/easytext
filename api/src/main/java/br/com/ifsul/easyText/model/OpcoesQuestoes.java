package br.com.ifsul.easyText.model;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;


import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Getter
@Setter
@EqualsAndHashCode(of = "id")
@ToString(of = "id")
public class OpcoesQuestoes {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;

    private String Opcao;

    @ManyToOne
    @JoinColumn(name = "questao_id")
    private Questao questao;

}
