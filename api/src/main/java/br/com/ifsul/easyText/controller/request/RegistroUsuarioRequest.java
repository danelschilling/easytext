package br.com.ifsul.easyText.controller.request;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Data
public class RegistroUsuarioRequest {

    @NotBlank
    private String nomeCompleto;

    @NotBlank
    private String email;

    @NotBlank
    private String senha;
}
