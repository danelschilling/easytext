package br.com.ifsul.easytext.model;

public class Licao {

	private Long idLicao;
	private String modulo;
	private String dificuldade;
	
	public Licao(String modulo, String dificuldade) {
		this.modulo = modulo;
		this.dificuldade = dificuldade;
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
