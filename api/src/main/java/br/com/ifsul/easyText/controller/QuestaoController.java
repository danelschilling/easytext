package br.com.ifsul.easyText.controller;

import br.com.ifsul.easyText.controller.request.SubmeterQuestaoRequest;
import br.com.ifsul.easyText.controller.response.QuestaoResponse;
import br.com.ifsul.easyText.controller.response.SubmeterQuestaoResponse;
import br.com.ifsul.easyText.model.Enum.Dificuldade;
import br.com.ifsul.easyText.model.Enum.Topico;
import br.com.ifsul.easyText.service.DetalharQuestaoService;
import br.com.ifsul.easyText.service.ListarQuestaoService;
import br.com.ifsul.easyText.service.SubmeterQuestaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/questoes")
public class QuestaoController {

    @Autowired
    ListarQuestaoService listarQuestaoService;

    @Autowired
    DetalharQuestaoService detalharQuestaoService;

    @Autowired
    SubmeterQuestaoService submeterQuestaoService;

    @GetMapping("/{topico}/{dificuldade}")
    public List<QuestaoResponse> listar(@PathVariable Topico topico, @PathVariable Dificuldade dificuldade) {
        return listarQuestaoService.listar(topico, dificuldade);
    }

    @GetMapping("/{idQuestao}")
    public QuestaoResponse detalhar(@PathVariable Long idQuestao) {
        return detalharQuestaoService.detalhar(idQuestao);
    }

    @PostMapping("/submeter/{idQuestao}")
    public SubmeterQuestaoResponse submeter(@PathVariable Long idQuestao, @RequestBody SubmeterQuestaoRequest request){
        return submeterQuestaoService.submeter(idQuestao, request);
    }
}
