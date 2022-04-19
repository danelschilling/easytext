package br.com.ifsul.easyText.repository;

import br.com.ifsul.easyText.model.Enum.Dificuldade;
import br.com.ifsul.easyText.model.Enum.Topico;
import br.com.ifsul.easyText.model.Questao;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuestaoRepository extends JpaRepository<Questao, Long> {

    List <Questao> findByTopicoAndDificuldade(Topico topico, Dificuldade dificuldade);

}
