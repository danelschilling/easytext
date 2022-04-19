package br.com.ifsul.easyText.service;

import br.com.ifsul.easyText.controller.response.QuestaoResponse;
import br.com.ifsul.easyText.mapper.DetalharQuestaoMapper;
import br.com.ifsul.easyText.model.Questao;
import br.com.ifsul.easyText.repository.QuestaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DetalharQuestaoService {

    @Autowired
    private QuestaoRepository questaoRepository;

    @Autowired
    private DetalharQuestaoMapper detalharQuestaoMapper;

    public QuestaoResponse detalhar(Long idQuestao) {
        Questao questao = questaoRepository.getById(idQuestao);

        return detalharQuestaoMapper.toResponse(questao);
    }
}
