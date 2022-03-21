package br.com.ifsul.easytext.controller;

import br.com.ifsul.easytext.controller.dto.UsuarioDto;
import br.com.ifsul.easytext.controller.form.UsuarioForm;
import br.com.ifsul.easytext.models.Usuario;
import br.com.ifsul.easytext.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @GetMapping
    List<UsuarioDto> usuario() {
        List<Usuario> usuario = usuarioRepository.findAll();
        return UsuarioDto.converter(usuario);
    }

    @PostMapping
    public ResponseEntity<UsuarioDto> cadastrar(@RequestBody UsuarioForm form, UriComponentsBuilder uriBuilder){
        Usuario usuario = form.converter();
        usuarioRepository.save(usuario);

        URI uri = uriBuilder.path("/usuario/{id}").buildAndExpand(usuario.getIdUsuario()).toUri();
        return ResponseEntity.created(uri).body(new UsuarioDto(usuario));
    }

}
