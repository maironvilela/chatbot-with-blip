type InformationGetContactsWithPagingEndPointProps = {
  skip: string
  take: string
  apiKey: string
}

export const BlipHttpHelpers = {
  getInformationEndPointAuthenticate(apiKey: string) {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `${apiKey}`,
    }
    const body = {
      id: '{{$guid}}',
      method: 'set',
      type: 'application/vnd.lime.delegation+json',
      uri: '/delegations',
      resource: {
        target: 'postmaster@broadcast.msging.net',
        envelopeTypes: ['message'],
      },
    }

    return { headers, body }
  },

  getInformationGetContactsWithPagingEndPoint({
    skip,
    take,
    apiKey,
  }: InformationGetContactsWithPagingEndPointProps) {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `${apiKey}`,
    }
    const body = {
      id: '{{$guid}}',
      to: 'postmaster@crm.msging.net',
      method: 'get',
      uri: `/contacts?$skip=${skip}&$take=${take}`,
    }

    return { headers, body }
  },
}
