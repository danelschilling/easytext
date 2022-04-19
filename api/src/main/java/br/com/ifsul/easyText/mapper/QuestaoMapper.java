package br.com.ifsul.easyText.mapper;

import br.com.ifsul.easyText.controller.response.OpcoesQuestoesResponse;
import br.com.ifsul.easyText.controller.response.QuestaoResponse;
import br.com.ifsul.easyText.model.OpcoesQuestoes;
import br.com.ifsul.easyText.model.Questao;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class QuestaoMapper {

    public List<QuestaoResponse> toResponse(List<Questao> questoes) {
        return questoes.stream()
                .map(questao -> toResponse(questao))
                .collect(Collectors.toList());
    }

    public QuestaoResponse toResponse(Questao questao) {
        return QuestaoResponse.builder()
                .id(questao.getId())
                .enunciado(questao.getEnunciado())
                .descricao(questao.getDescricao())
                .topico(questao.getTopico())
                .dificuldade(questao.getDificuldade())
                .opcoesQuestao(toOpcoesQuestaoResponse(questao.getOpcaoQuestao()))
                .build();
    }

    private  List<OpcoesQuestoesResponse> toOpcoesQuestaoResponse(List<OpcoesQuestoes> opcaoQuestao) {
        return opcaoQuestao.stream().map(this::toquestoesResponse).collect(Collectors.toList());
    }

    private OpcoesQuestoesResponse toquestoesResponse(OpcoesQuestoes opcoesQuestoes) {

        return OpcoesQuestoesResponse.builder()
                .opcao(opcoesQuestoes.getOpcao())
                .build();
    }

}
