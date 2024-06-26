import type { UseCase } from '../../shared/use-case'

type Input = {
  name: string
  email: string
  password: string
}

export class RegisterUser implements UseCase<Input, void> {
  execute(input: Input): Promise<void> {
    const { email, name, password } = input
  }
}
