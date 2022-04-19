package br.com.ifsul.easyText.controller;

import br.com.ifsul.easyText.controller.request.EditarUsuarioRequest;
import br.com.ifsul.easyText.controller.request.RegistroUsuarioRequest;
import br.com.ifsul.easyText.controller.response.UsuarioResponse;
import br.com.ifsul.easyText.security.Repository.UsuarioRepository;
import br.com.ifsul.easyText.service.DetalharUsuarioService;
import br.com.ifsul.easyText.service.EditarUsuarioService;
import br.com.ifsul.easyText.service.IncluirUsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private IncluirUsuarioService incluirUsuarioService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private DetalharUsuarioService detalharUsuarioService;

    @Autowired
    private EditarUsuarioService editarUsuarioService;

    @GetMapping
    public UsuarioResponse detalhar(){
        return detalharUsuarioService.detalhar();
    }

    @PostMapping
    public void incluir(@RequestBody RegistroUsuarioRequest request) {
        request.setSenha(passwordEncoder.encode(request.getSenha()));
        incluirUsuarioService.incluir(request);
    }

    @PutMapping
    public void editar(@Valid @RequestBody EditarUsuarioRequest request) {
        editarUsuarioService.editar(request);
    }


}
