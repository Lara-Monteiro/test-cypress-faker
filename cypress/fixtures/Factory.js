const faker = require('faker-br');

export default class Factory {

    static gera_dados_cadastrais(dados_cadastrais){
        switch (dados_cadastrais) {
            case "pessoa_fisica":
                return {
                    cpf: faker.br.cpf(),
                    nascimento: faker.date.between('1919-01-01', '2003-01-05').toLocaleString(),
                    chamado: faker.name.firstName(),
                    nome: faker.name.firstName() + ' ' + faker.name.lastName(),
                    email: faker.internet.email(),
                    senha: faker.internet.password(),
                    celular: faker.phone.phoneNumber()
                }

            case "pessoa_juridica":
                return {
                    cnpj: faker.br.cnpj(),
                    contato: faker.name.firstName() + ' ' + faker.name.lastName(),
                    razaoSocial: faker.company.companyName(),
                    email: faker.internet.email(),
                    senha: faker.internet.password(),
                    celular: faker.phone.phoneNumber()
                }

            default:
                return "Dados invalidos!"
        }
    }

}