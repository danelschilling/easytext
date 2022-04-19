package br.com.ifsul.easyText.mapper;

import br.com.ifsul.easyText.controller.response.QuestaoRespondidaPeloUsuarioResponse;
import br.com.ifsul.easyText.controller.response.UsuarioResponse;
import br.com.ifsul.easyText.model.QuestoesRespondidasPeloUsuario;
import br.com.ifsul.easyText.security.model.Usuario;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class UsuarioMapper {

    public UsuarioResponse toUsuarioResponse(Usuario usuario){
        return UsuarioResponse.builder()
                .id(usuario.getId())
                .nomeCompleto(usuario.getNomeCompleto())
                .email(usuario.getEmail())
                .pontos(usuario.getPontos())
                .nivel(usuario.getDificuldade())
                .questoesAcertadas(listarQuestoesResponse(usuario.getQuestoesRespondidasPeloUsuario()))
                .build();
    }

    private List<QuestaoRespondidaPeloUsuarioResponse> listarQuestoesResponse(List<QuestoesRespondidasPeloUsuario> QuestoesRespondidasPeloUsuario){
        return QuestoesRespondidasPeloUsuario.stream().map(this::toQuestaoResponse).collect(Collectors.toList());
    }

    private QuestaoRespondidaPeloUsuarioResponse toQuestaoResponse(QuestoesRespondidasPeloUsuario QuestoesRespondidasPeloUsuario) {

        return QuestaoRespondidaPeloUsuarioResponse.builder()
                .idQuestao(QuestoesRespondidasPeloUsuario.getQuestao().getId())
                .build();
    }

}
