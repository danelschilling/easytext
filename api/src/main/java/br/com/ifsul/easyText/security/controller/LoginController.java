package br.com.ifsul.easyText.security.controller;

import br.com.ifsul.easyText.controller.response.LoginResponse;
import br.com.ifsul.easyText.security.service.UsuarioAutenticadoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class LoginController {

    @Autowired
    UsuarioAutenticadoService usuarioAutenticadoService;

    @PostMapping
    public LoginResponse login() {
        LoginResponse response = new LoginResponse();
        response.setUsuarioId(usuarioAutenticadoService.getId());
        return response;
    }
}
