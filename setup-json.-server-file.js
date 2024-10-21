import fs from 'fs'
import { faker } from '@faker-js/faker'

function generateContacts() {
  return {
    identity: faker.string.uuid(),
    name: faker.name.fullName(),
    email: faker.internet.email(),
    imageUrl: faker.image.avatar(),
  }
}

// Gerar 100 registros
const users = []
for (let i = 0; i < 100; i++) {
  users.push(generateContacts())
}

// Escrever os dados em um arquivo JSON
fs.writeFileSync('contacts.json', JSON.stringify(users, null, 2))

console.log('Arquivo usuarios.json criado com sucesso!')
