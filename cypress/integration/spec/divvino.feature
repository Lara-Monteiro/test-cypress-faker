
Feature: Tela de autenticação 
  Como usuário na aplicação
  Quero criar um usuário
  Para que eu possa logar no servidor

    Background: Acessar página
      Given que esteja na pagina principal
      
    Scenario: Criar usuário com sucesso
      When acessar a página de cadastro
      When cadastrar uma pessoa do tipo "pessoa_juridica"
      Then deverá ser redirecionado à home
      And deverá ser visualizado o nome do usuário

    Scenario: Logar usuário com sucesso
      When preencher os campos Email e Senha
      And clicar sobre o botão Fazer Login
      Then deverá ser redirecionado à home
      And deverá ser visualizado o nome do usuário

     Scenario Outline: Tentativa de login com dados inválidos
       When preencher os campos "<username>" and "<password>" com dados inválidos
       And clicar sobre o botão Fazer Login
       Then deverá ser mostrado ao usuário mensagem de erro "<message>"
       Examples:
       | username      | password | message                  |
       |               |          | Campo obrigatório.       |
       | teste         | teste    | Login ou senha inválida. |

    