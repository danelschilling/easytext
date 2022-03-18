package br.com.ifsul.easytext.model;

public class Nivel {

	private Long idNivel;
	private Integer pontucaoMin;
	private Integer pontuacaoMax;
	private String nomeNivel;
	
	
	public Long getIdNivel() {

		return idNivel;
	}
	public void setIdNivel(Long idNivel) {

		this.idNivel = idNivel;
	}
	public Integer getPontucaoMin() {

		return pontucaoMin;
	}
	public void setPontucaoMin(Integer pontucaoMin) {

		this.pontucaoMin = pontucaoMin;
	}
	public Integer getPontuacaoMax() {

		return pontuacaoMax;
	}
	public void setPontuacaoMax(Integer pontuacaoMax) {

		this.pontuacaoMax = pontuacaoMax;
	}
	public String getNomeNivel() {

		return nomeNivel;
	}
	public void setNomeNivel(String nomeNivel) {

		this.nomeNivel = nomeNivel;
	}
	
	
}
