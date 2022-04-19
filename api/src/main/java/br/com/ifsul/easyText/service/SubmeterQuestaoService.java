package br.com.ifsul.easyText.service;

import br.com.ifsul.easyText.controller.request.SubmeterQuestaoRequest;
import br.com.ifsul.easyText.controller.response.SubmeterQuestaoResponse;
import br.com.ifsul.easyText.model.Enum.Dificuldade;
import br.com.ifsul.easyText.model.Questao;
import br.com.ifsul.easyText.model.QuestoesRespondidasPeloUsuario;
import br.com.ifsul.easyText.repository.QuestaoRepository;
import br.com.ifsul.easyText.repository.QuestaoRespondidaPeloUsuarioRepository;
import br.com.ifsul.easyText.security.Repository.UsuarioRepository;
import br.com.ifsul.easyText.security.model.Usuario;
import br.com.ifsul.easyText.security.service.UsuarioAutenticadoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.awt.desktop.QuitEvent;

@Service
public class SubmeterQuestaoService {

    @Autowired
    private UsuarioAutenticadoService usuarioAutenticadoService;

    @Autowired
    private QuestaoRepository questaoRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private QuestaoRespondidaPeloUsuarioRepository questaoRespondidaPeloUsuarioRepository;

    public SubmeterQuestaoResponse submeter(Long idQuestao, SubmeterQuestaoRequest request) {
        Usuario usuario = usuarioAutenticadoService.get();
        Questao questao = questaoRepository.findById(idQuestao).get();

        String respostaCerta = questao.getRespostaCerta();
        String respostaDoJogador = request.getResposta();

        if ( respostaCerta.equals(respostaDoJogador)){

            usuario.setPontos(usuario.getPontos() + questao.getPontoQuestao());

            QuestoesRespondidasPeloUsuario questoesRespondidasPeloUsuario = new QuestoesRespondidasPeloUsuario();
            questoesRespondidasPeloUsuario.setQuestao(questao);
            questoesRespondidasPeloUsuario.setUsuario(usuario);

            if(usuario.getPontos() > 299){
                usuario.setDificuldade(Dificuldade.INTERMEDIARIO);
            }

            questaoRespondidaPeloUsuarioRepository.save(questoesRespondidasPeloUsuario);

            usuarioRepository.save(usuario);

        } else {
            return SubmeterQuestaoResponse.builder()
                    .resposta(false)
                    .build();
        }


        return SubmeterQuestaoResponse.builder()
                .resposta(true)
                .build();
    }
}
