package br.com.ifsul.easytext.controller;

import br.com.ifsul.easytext.controller.dto.UsuarioDto;
import br.com.ifsul.easytext.models.Nivel;
import br.com.ifsul.easytext.models.Usuario;
import br.com.ifsul.easytext.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class UsuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @RequestMapping("/usuario")
    List<UsuarioDto> usuario() {
        List<Usuario> usuario = usuarioRepository.findAll();

        return UsuarioDto.converter(usuario);

    }

}
