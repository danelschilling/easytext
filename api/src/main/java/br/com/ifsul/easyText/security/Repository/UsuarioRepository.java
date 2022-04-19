package br.com.ifsul.easyText.security.Repository;

import br.com.ifsul.easyText.security.model.Usuario;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    Usuario findByEmail(String email);

    Page<Usuario> findAllByNomeCompletoIgnoreCaseContainsOrEmailIgnoreCaseContains(Pageable pageable, String nomeCompleto, String email);

}
