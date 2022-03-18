package br.com.ifsul.easytext.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import br.com.ifsul.easytext.model.Licao;
import br.com.ifsul.easytext.model.Usuario;

@Controller
public class TopicosController {

	@RequestMapping("/topicos")
	@ResponseBody
	public List<Usuario> lista() {
		Usuario usuario = new Usuario("Duvida", "Duvida com Spring", new Licao("Spring", "Programação"));
		return Arrays.asList(usuario, usuario, usuario); 
	                 }

	    }



	    