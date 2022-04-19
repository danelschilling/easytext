package br.com.ifsul.easyText.controller.request;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class EditarUsuarioRequest {

    @NotBlank
    private String nomeCompleto;

}
