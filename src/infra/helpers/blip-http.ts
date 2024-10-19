type InformationGetContactsWithPagingEndPointProps = {
  skip: number
  take: number
  apiKey: string
}

export const BlipHttpHelpers = {
  getBodyAndHeadersAuthenticate(apiKey: string) {
    const url = import.meta.env.VITE_BLIP_API_URL

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

    return { headers, body, url }
  },

  getInformationGetContactsWithPagingEndPoint({
    skip,
    take,
    apiKey,
  }: InformationGetContactsWithPagingEndPointProps) {
    const body = {
      id: '{{$guid}}',
      to: 'postmaster@crm.msging.net',
      method: 'get',
      uri: `/contacts?$skip=${skip}&$take=${take}`,
    }

    const headers = {
      'Content-Type': 'application/json',
      Authorization: apiKey,
    }

    return { body, headers }
  },

  getBodyFindAllConversationsEndPoint(id: string, apiKey: string) {
    const body = {
      id: '{{$guid}}',
      method: 'get',
      uri: `/threads/${id}?refreshExpiredMedia=true`,
    }

    const headers = {
      'Content-Type': 'application/json',
      Authorization: apiKey,
    }

    return { body, headers }
  },
}
