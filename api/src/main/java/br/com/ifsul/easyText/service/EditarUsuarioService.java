package br.com.ifsul.easyText.service;

import br.com.ifsul.easyText.controller.request.EditarUsuarioRequest;
import br.com.ifsul.easyText.security.Repository.UsuarioRepository;
import br.com.ifsul.easyText.security.model.Usuario;
import br.com.ifsul.easyText.security.service.UsuarioAutenticadoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EditarUsuarioService {

    @Autowired
    private UsuarioAutenticadoService usuarioAutenticadoService;

    @Autowired
    private UsuarioRepository usuarioRepository;

    public void editar(EditarUsuarioRequest request) {
        Usuario usuario = usuarioAutenticadoService.get();
        usuario.setNomeCompleto(request.getNomeCompleto());
        usuarioRepository.save(usuario);

    }
}
