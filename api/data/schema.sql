create table livro (id int8 generated by default as identity, situacao varchar(255), titulo varchar(255), usuario_id int8, primary key (id));
create table usuario (id int8 generated by default as identity, nome varchar(255), primary key (id));
alter table if exists livro add constraint FKjbrg4ntd95dhod10dp5vihxhq foreign key (usuario_id) references usuario;
