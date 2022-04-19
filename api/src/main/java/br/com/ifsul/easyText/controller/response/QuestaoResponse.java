package br.com.ifsul.easyText.controller.response;

import br.com.ifsul.easyText.model.Enum.Dificuldade;
import br.com.ifsul.easyText.model.Enum.Topico;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class QuestaoResponse {

    private Long id;

    private String descricao;

    private String enunciado;

    private Topico topico;

    private Dificuldade dificuldade;

    private List<OpcoesQuestoesResponse> opcoesQuestao;

}
