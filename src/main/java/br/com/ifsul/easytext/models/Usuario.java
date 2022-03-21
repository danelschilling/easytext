package br.com.ifsul.easytext.models;

import javax.persistence.*;

@Entity
public class Usuario {

	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idUsuario;

	@Column(nullable = false)
	private String nomeUsuario;

	@Column(nullable = false)
	private String email;

	@Column(nullable = false)
	private String senha;

	private Integer pontuacaoUsuario;

	@ManyToOne
	private Nivel nivel;


	public Usuario() {
	}

	public Usuario(String nome, String email, String senha) {
	}

	public Usuario(String nomeUsuario) {
		this.nomeUsuario = nomeUsuario;
		this.email = email;
		this.senha = senha;
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


}
