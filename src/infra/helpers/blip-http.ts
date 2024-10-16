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
}
