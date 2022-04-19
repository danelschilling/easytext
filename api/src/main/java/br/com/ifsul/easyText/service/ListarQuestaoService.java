package br.com.ifsul.easyText.service;

import br.com.ifsul.easyText.controller.response.QuestaoResponse;
import br.com.ifsul.easyText.mapper.QuestaoMapper;
import br.com.ifsul.easyText.model.Enum.Dificuldade;
import br.com.ifsul.easyText.model.Enum.Topico;
import br.com.ifsul.easyText.model.Questao;
import br.com.ifsul.easyText.repository.QuestaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ListarQuestaoService {

    @Autowired
    QuestaoRepository questaoRepository;

    @Autowired
    private QuestaoMapper questaoMapper;

    public List<QuestaoResponse> listar(Topico topico, Dificuldade dificuldade) {

        List<Questao> questoes = questaoRepository.findByTopicoAndDificuldade(topico, dificuldade );

        return questaoMapper.toResponse(questoes);
    }
}
