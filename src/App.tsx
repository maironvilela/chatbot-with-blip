import { useEffect, useState } from "react"
import { ListContactsService } from "./data/service/list-contacts"
import { ContactsAxiosAdapter } from "./infra/gateways/contacts-axios-adapter"
import { Contact } from "./domain/models/contact"

export function App() {

  const [contacts, setContacts] = useState<Contact[]>([])



  useEffect(() => {
    const listContactsGateway = new ContactsAxiosAdapter()
    const listContactsService = new ListContactsService(listContactsGateway)

    const getData = async () => {
      const url = import.meta.env.VITE_BLIP_API_URL
      const apiKey = import.meta.env.VITE_BLIP_API_KEY
      const { contacts: contactsData } = await listContactsService.execute({
        apiKey,
        skip: "0",
        take: "2",
        url
      })

      if (contactsData) {
        setContacts(contactsData)
      }

    }
    getData();
  }, [])

  return (
    <div>
      <>
        {contacts.map((c: Contact) => (
          <div key={c.identity}>
            <h1>{c.name}</h1>
            <h1>{c.identity}</h1>
            <h1>{c.email}</h1>
          </div>
        ))
        }
      </>

    </div>


  )
}


