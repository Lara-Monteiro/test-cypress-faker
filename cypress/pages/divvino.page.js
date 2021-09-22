import Base from './_base.page'
import {CriarPessoaFisica as criarPF, CriarPessoaJuridica as criarPJ, CriarPessoa as CP, Login as log, Home} from './elements/divvino.elements'
import Factory from '../fixtures/Factory'

export class Divvino extends Base {

    static acessar_divvino(){
      cy.visit('/')
    }

    static acessar_cadastro(){
      super.clickOnElement(Home.BTN_REGISTER)
    }

    static cadastrar_pessoa(tipo){
      cy.wrap(Factory.gera_dados_cadastrais(tipo)).as("dadosCadastro")
      const cadastro_comum = () => {
        cy.get("@dadosCadastro").then( pessoa => {
          super.typeValue(CP.INP_EMAIL, pessoa.email)
          super.typeValue(CP.INP_EMAIL_CONFIRM, pessoa.email)
          super.typeValue(CP.INP_PASSWORD, pessoa.senha)
          super.typeValue(CP.INP_PASSWORD_CONFIRM, pessoa.senha)
          super.typeValue(CP.INP_PHONE, pessoa.celular)
        })
      }
        
      cy.get("@dadosCadastro").then( pessoa => {
        if (tipo == "pessoa_juridica"){
          super.clickOnElement(criarPJ.BTN_PJ)
          cadastro_comum()
          super.typeValue(criarPJ.INP_CNPJ, pessoa.cnpj)
          super.typeValue(criarPJ.INP_CONTACT_NAME, pessoa.contato)
          super.typeValue(criarPJ.INP_RAZAO_SOCIAL, pessoa.razaoSocial)
          super.clickOnElement(criarPJ.INP_INSCRICAO)
        } else if ( tipo == "pessoa_fisica"){
          cadastro_comum()
          super.typeValue(criarPF.INP_CPF, pessoa.cpf)
          super.typeValue(criarPF.INP_BIRTHDAY, pessoa.nascimento)
          super.typeValue(criarPF.INP_NICKNAME, pessoa.chamado)
          super.typeValue(criarPF.INP_NAME, pessoa.nome)
          super.clickOnElement(criarPF.INP_GENDER)
        }
        super.clickOnElement(CP.BTN_SUBMIT)
      })
    }

    static preencher_campos_sucesso(){
      super.clickOnElement(Home.BTN_LOGIN)
      cy.fixture('example.json').then( json => {
      super.typeValue(log.INP_EMAIL_LOG, json.email)
      super.typeValue(log.INP_PASSWORD_LOG, json.senha)
       })
    }

    static preencher_campos_invalidos(username, password){
      super.clickOnElement(Home.BTN_LOGIN)
      super.typeValue(log.INP_EMAIL_LOG, username)
      super.typeValue(log.INP_PASSWORD_LOG, password)
    }

    static fazer_login(){
      super.clickOnElement(log.BTN_SUBMIT)
    }

    static verifica_erro(message){
      super.getElementContaining(message)
    }

    static validar_home(){
      super.verifyIfElementExists('img.logo')
    }

    static validar_login(){
      super.getElementContaining('Olá, ')
    }
  }
