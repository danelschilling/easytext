package br.com.ifsul.easytext.models;

import javax.persistence.*;

@Entity
public class Usuario {

	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idUsuario;
	private String nomeUsuario;
	private String email;
	private String senha;
	private Integer pontuacaoUsuario;

	@ManyToOne
	private Licao licao;


	public Usuario() {
	}

	public Usuario(String nomeUsuario, String email, Licao licao) {
		this.nomeUsuario = nomeUsuario;
		this.email = email;
		this.licao = licao;
	}

	public Long getIdUsuario() {

		return idUsuario;
	}
	public void setIdUsuario(Long idUsuario) {

		this.idUsuario = idUsuario;
	}
	public String getNomeUsuario() {

		return nomeUsuario;
	}
	public void setNomeUsuario(String nomeUsuario) {

		this.nomeUsuario = nomeUsuario;
	}
	public String getEmail() {

		return email;
	}
	public void setEmail(String email) {

		this.email = email;
	}
	public String getSenha() {

		return senha;
	}
	public void setSenha(String senha) {

		this.senha = senha;
	}
	public Integer getPontuacaoUsuario() {

		return pontuacaoUsuario;
	}
	public void setPontuacaoUsuario(Integer pontuacaoUsuario) {

		this.pontuacaoUsuario = pontuacaoUsuario;
	}
	
	public Licao getLicao() {

		return licao;
	}

	public void setLicao(Licao licao) {

		this.licao = licao;
	}

}
