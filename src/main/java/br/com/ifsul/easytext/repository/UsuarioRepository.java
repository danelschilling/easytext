package br.com.ifsul.easytext.repository;

import br.com.ifsul.easytext.models.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {


}
