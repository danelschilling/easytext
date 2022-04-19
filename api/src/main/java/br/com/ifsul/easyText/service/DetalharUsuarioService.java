package br.com.ifsul.easyText.service;

import br.com.ifsul.easyText.controller.response.UsuarioResponse;
import br.com.ifsul.easyText.mapper.UsuarioMapper;
import br.com.ifsul.easyText.security.model.Usuario;
import br.com.ifsul.easyText.security.service.UsuarioAutenticadoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DetalharUsuarioService {

    @Autowired
    private UsuarioAutenticadoService usuarioAutenticadoService;

    @Autowired
    private UsuarioMapper usuarioMapper;

    public UsuarioResponse detalhar() {
        Usuario usuario = usuarioAutenticadoService.get();

        return usuarioMapper.toUsuarioResponse(usuario);
    }
}
