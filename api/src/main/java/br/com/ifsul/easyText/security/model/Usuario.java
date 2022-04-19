package br.com.ifsul.easyText.security.model;

import br.com.ifsul.easyText.model.Enum.Dificuldade;
import br.com.ifsul.easyText.model.Questao;
import br.com.ifsul.easyText.model.QuestoesRespondidasPeloUsuario;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Getter
@Setter
@EqualsAndHashCode(of = "id")
@ToString(of = "id")

public class Usuario {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;

    private Long pontos;

    @Enumerated(EnumType.STRING)
    private Dificuldade dificuldade;

    @Column(nullable = false)
    private String nomeCompleto;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String senha;

    @OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL)
    private List<QuestoesRespondidasPeloUsuario> questoesRespondidasPeloUsuario;

}
