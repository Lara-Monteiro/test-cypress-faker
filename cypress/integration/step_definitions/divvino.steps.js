/// <reference types="cypress" />
import {Given, When, Then, Before} from 'cypress-cucumber-preprocessor/steps'
import {Divvino} from '../../pages/divvino.page'


Before(() => {
    console.log("before all")
})

When(`acessar a página de cadastro`, () => {
	Divvino.acessar_cadastro()
});

When(`cadastrar uma pessoa do tipo {string}`, (tipo_pessoa) => {
	Divvino.cadastrar_pessoa(tipo_pessoa)
});

Then(`deverá ser redirecionado à home`, () => {
	Divvino.validar_home()
});

Then(`deverá ser visualizado o nome do usuário`, () => {
	Divvino.validar_login()
});

Given(`que esteja na pagina principal`, () => {
    Divvino.acessar_divvino()
});

When(`clicar sobre o link Criar Conta`, () => {
    Divvino.redireciona()
});

When(`preencher os campos`, (dados_cadastrais) => {
    Divvino.gera_dados_cadastrais(dados_cadastrais)
});

When(`preencher os campos Email e Senha`, () => {
    Divvino.preencher_campos_sucesso()
});

When(`preencher os campos {string} and {string} com dados inválidos`, (username, password) => {
    Divvino.preencher_campos_invalidos(username, password)
});


When(`clicar sobre o botão Fazer Login`, () => {
    Divvino.fazer_login()
});


Then(`deverá ser mostrado ao usuário mensagem de erro {string}`, (message) => {
    Divvino.verifica_erro(message)
});