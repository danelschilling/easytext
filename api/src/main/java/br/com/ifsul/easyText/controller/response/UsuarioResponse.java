package br.com.ifsul.easyText.controller.response;

import br.com.ifsul.easyText.model.Enum.Dificuldade;
import br.com.ifsul.easyText.model.QuestoesRespondidasPeloUsuario;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class UsuarioResponse {
    private Long id;
    private String nomeCompleto;
    private String email;
    private Long pontos;
    private Dificuldade nivel;
    private List<QuestaoRespondidaPeloUsuarioResponse> questoesAcertadas;

}
