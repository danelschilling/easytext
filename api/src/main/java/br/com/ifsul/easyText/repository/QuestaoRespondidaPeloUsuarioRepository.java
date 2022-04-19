package br.com.ifsul.easyText.repository;

import br.com.ifsul.easyText.model.QuestoesRespondidasPeloUsuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestaoRespondidaPeloUsuarioRepository extends JpaRepository<QuestoesRespondidasPeloUsuario, Long> {
}
