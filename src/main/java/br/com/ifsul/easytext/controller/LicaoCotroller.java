package br.com.ifsul.easytext.controller;

import br.com.ifsul.easytext.controller.dto.UsuarioDto;
import br.com.ifsul.easytext.models.Licao;
import br.com.ifsul.easytext.models.Usuario;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class LicaoCotroller {

    @RequestMapping("/topicos")
    public List<UsuarioDto> lista() {
        Usuario usuario = new Usuario("Dúvida", "Dúvida com Spring", new Licao("Spring", "Programaação"));

        return UsuarioDto.converter(Arrays.asList(usuario, usuario, usuario));
    }

}
