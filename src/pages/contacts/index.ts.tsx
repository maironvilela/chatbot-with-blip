import { useContext, useEffect, useState } from "react"
import { Contact } from "../../domain/models/contact"
import { CardContact } from "./components/card";
import { useNavigate } from "react-router";
import { ContactContext } from "../../contexts/contact";
import { Paginator } from "./components/paginator";
import { AuthenticateContext } from "../../contexts/authenticate";

type ContactsDataType = {
  contacts: Contact[];
  numberOfRecords: number;
}

export function Contacts() {

  const { isUserAuthenticated } = useContext(AuthenticateContext);


  const navigate = useNavigate();

  const [skip, setSkip] = useState(0)
  const [contactsData, setContactsData] = useState<ContactsDataType>()
  const { getContactList } = useContext(ContactContext)
  const TAKE = 2

  useEffect(() => {

    if (!isUserAuthenticated()) {
      navigate(`/login`)
    }

    const getData = async () => {
      const { data } = await getContactList({ skip, take: TAKE })
      console.log(data)
      setContactsData(data);
    }
    getData();
  }, [getContactList, TAKE, skip, isUserAuthenticated, navigate])


  const handleSelectedContact = (identity: string) => {
    navigate(`/contato/${identity}`)
  }

  const handleChangePage = (page: number) => {
    setSkip(page)
  }
  return (
    <div  >
      <div className="flex flex-wrap gap-4 h-full">
        {
          contactsData?.contacts.map((c: Contact) => (
            <button key={c.identity}
              className="hover:brightness-90 transition ease-in-out"
              onClick={() => handleSelectedContact(c.identity)}>
              <CardContact
                identity={c.identity}
                name={c.name}
                email={c.email}
                imageUrl={c.imageUrl} />
            </button>
          ))
        }
      </div >
      <div className="flex justify-center absolute bottom-8 w-full">
        <Paginator currentPage={skip} numberOfRecords={contactsData?.numberOfRecords} handleChangePage={handleChangePage} itemsPerPage={TAKE} />

      </div>
    </div >
  )
}

