package br.com.ifsul.easyText.service;

import br.com.ifsul.easyText.controller.request.RegistroUsuarioRequest;
import br.com.ifsul.easyText.mapper.IncluirUsuarioMapper;
import br.com.ifsul.easyText.security.Repository.UsuarioRepository;
import br.com.ifsul.easyText.security.model.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class IncluirUsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public void incluir(RegistroUsuarioRequest request){
        Usuario usuario = IncluirUsuarioMapper.toEntity(request);

        usuarioRepository.save(usuario);
    }
}
