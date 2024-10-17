export type ContactProps = {
  identity: string
  name: string
  email: string
}

export class Contact {
  private props: ContactProps

  public get identity(): string {
    return this.props.identity
  }

  public get name(): string {
    return this.props.name
  }

  public get email(): string {
    return this.props.name
  }

  constructor(props: ContactProps) {
    this.props = props
  }
}
