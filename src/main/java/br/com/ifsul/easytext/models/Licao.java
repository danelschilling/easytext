package br.com.ifsul.easytext.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Licao {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idLicao;
	private String modulo;
	private String dificuldade;

	public Licao() {
	}

	public Long getIdLicao() {

		return idLicao;
	}
	public void setIdLicao(Long idLicao) {

		this.idLicao = idLicao;
	}
	public String getModulo() {

		return modulo;
	}
	public void setModulo(String modulo) {

		this.modulo = modulo;
	}
	public String getDificuldade() {

		return dificuldade;
	}
	public void setDificuldade(String dificuldade) {

		this.dificuldade = dificuldade;
	}
	
	
}
