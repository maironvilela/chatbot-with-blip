import { faker } from '@faker-js/faker'

export const getAvatarUrl = () => {
  return faker.image.avatarGitHub()
}
