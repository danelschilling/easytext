insert into usuario (email, nome, senha) values ('nunes@cwi.com.br', 'Nunes', '$2a$10$/Ew/vj08HudVRzmFV6W4/.RTq8g6seveEt.kFI.9Nu53yMGxvw0Hq');
insert into permissao (nome, usuario_id) values ('ADMIN', (select id from usuario where email='nunes@cwi.com.br'));

