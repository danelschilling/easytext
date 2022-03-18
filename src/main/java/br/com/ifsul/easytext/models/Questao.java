package br.com.ifsul.easytext.models;

public class Questao {

	private Long idQuestao;
	private String descricao;
	private String enunciado;
	private String opcaoQuestao;
	private Integer pontoQuestao;
	private String respostaCerta;
	
	
	public Long getIdQuestao() {

		return idQuestao;
	}
	public void setIdQuestao(Long idQuestao) {

		this.idQuestao = idQuestao;
	}
	public String getDescricao() {

		return descricao;
	}
	public void setDescricao(String descricao) {

		this.descricao = descricao;
	}
	public String getEnunciado() {

		return enunciado;
	}
	public void setEnunciado(String enunciado) {

		this.enunciado = enunciado;
	}
	public String getOpcaoQuestao() {

		return opcaoQuestao;
	}
	public void setOpcaoQuestao(String opcaoQuestao) {

		this.opcaoQuestao = opcaoQuestao;
	}
	public Integer getPontoQuestao() {

		return pontoQuestao;
	}
	public void setPontoQuestao(Integer pontoQuestao) {

		this.pontoQuestao = pontoQuestao;
	}
	public String getRespostaCerta() {

		return respostaCerta;
	}
	public void setRespostaCerta(String opcaoCorreta) {

		this.respostaCerta = opcaoCorreta;
	}
	
	
	
	
}
