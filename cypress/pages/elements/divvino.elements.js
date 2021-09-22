const CriarPessoaFisica= {
    INP_CPF : '#cpf',
    INP_BIRTHDAY : '#dateOfBirth',
    INP_NICKNAME  : '#chamado',
    INP_NAME : 'input#nome',
    INP_GENDER : "label[for='radio2']"
}

const CriarPessoa = {
    INP_EMAIL    : 'input#email',
    INP_EMAIL_CONFIRM : '#conf-email',
    INP_PASSWORD  : '#senha',
    INP_PASSWORD_CONFIRM : '#confsenha',
    INP_PHONE : 'input#phone',
    INP_NEWS_EMAIL : '#receiveMarketingMail',
    INP_NEWS_SMS : '#receiveMarketingPhone',
    BTN_SUBMIT : '#send'
}

const CriarPessoaJuridica= {
    BTN_PJ: 'a.newaccount_pj_lnk',
    INP_CNPJ : '#cnpj',
    INP_CONTACT_NAME : '#contactName',
    INP_RAZAO_SOCIAL : '#razao',
    INP_INSCRICAO : "label[for='isentoIE']"
}

const Home = {
    BTN_REGISTER : '#registerUserModal',
    BTN_LOGIN : '#loginAutoUser'
}

const Login = {
    INP_EMAIL_LOG : '#user',
    INP_PASSWORD_LOG : '.passUser',
    BTN_SUBMIT : '#loginSubmit'
}

export{CriarPessoa, CriarPessoaFisica, CriarPessoaJuridica, Login, Home}
