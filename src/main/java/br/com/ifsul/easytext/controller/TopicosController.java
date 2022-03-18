package br.com.ifsul.easytext.controller;

import java.util.Arrays;
import java.util.List;

import br.com.ifsul.easytext.controller.dto.UsuarioDto;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import br.com.ifsul.easytext.models.Licao;
import br.com.ifsul.easytext.models.Usuario;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TopicosController {

	@RequestMapping("/topicos")
	public List<UsuarioDto> lista() {
		Usuario usuario = new Usuario("Dúvida", "Dúvida com Spring", new Licao("Spring", "Programaação"));

		return UsuarioDto.converter(Arrays.asList(usuario, usuario, usuario));
	                 }

	    }



	    