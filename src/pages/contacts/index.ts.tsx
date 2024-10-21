import { useContext, useEffect, useState } from "react"
import { Contact } from "../../domain/models/contact"
import { CardContact } from "./components/card";
import { useNavigate } from "react-router";
import { Paginator } from "./components/paginator";
import { AuthenticateContext } from "../../contexts/authenticate";

import { GrContactInfo } from "react-icons/gr";
import { Select } from "./components/select";
import { Header } from "../../components/header";
import { ContactContext } from "../../contexts/contact";
import { getAvatarUrl } from "../../utils/get-avatar-url";


type ContactsDataType = {
  contacts: Contact[];
  numberOfRecords: number;
}

export function Contacts() {

  const { isUserAuthenticated } = useContext(AuthenticateContext);
  const { getContactList } = useContext(ContactContext)


  const navigate = useNavigate();

  const [page, setPage] = useState(1)
  const [itemPerPage, setItemPerPage] = useState("2")
  const [contactsData, setContactsData] = useState<ContactsDataType>()


  useEffect(() => {

    if (!isUserAuthenticated()) {
      navigate(`/login`)
    }

    const getData = async () => {
      const { data } = await getContactList({ page, itemPerPage: Number(itemPerPage) })
      setContactsData(data);
    }
    getData();
  }, [getContactList, itemPerPage, page, isUserAuthenticated, navigate])

  const handleSelectedContact = (identity: string) => {
    navigate(`/contato/${identity}`)
  }

  const handleChangePage = (pageProps: number) => {
    setPage(pageProps)
  }


  return (
    <div className="flex flex-col gap-4 h-full">
      <Header />

      <div className="max-w=[1440px]">

        <div className="flex justify-between items-center gap-4 p-4 ">
          <div className="flex items-center   gap-1  text-gray-600 text-2xl">
            <GrContactInfo className="inline" />
            <span>Contatos</span>
          </div>
          <Select itemPerPage={itemPerPage} setItemPerPage={setItemPerPage} />
        </div>

        <div className="flex flex-wrap justify-center gap-4 h-full pt-6 ">
          {
            contactsData?.contacts.map((c: Contact) => {
              const avatarUrl = getAvatarUrl();
              return (
                <button key={c.identity}
                  className="hover:brightness-90 transition ease-in-out"
                  onClick={() => handleSelectedContact(c.identity)}>
                  <CardContact
                    identity={c.identity}
                    name={c.name}
                    email={c.email}
                    imageUrl={avatarUrl} />
                </button>
              )
            })}

        </div >
        <footer className="flex justify-center absolute bottom-8 w-full">
          <Paginator currentPage={page} numberOfRecords={contactsData?.numberOfRecords} handleChangePage={handleChangePage} itemsPerPage={Number(itemPerPage)} />
        </footer>
      </div >


    </div >
  )
}

