export type ContactProps = {
  id: string
}

export class Contact {
  private props: ContactProps

  constructor(props: ContactProps) {
    this.props = props
  }
}
