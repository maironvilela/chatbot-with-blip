import { useContext, useEffect, useState } from "react"
import { Contact } from "../../domain/models/contact"
import { CardContact } from "./components/card";
import { useNavigate } from "react-router";
import { ContactContext } from "../../contexts/contact";
import { Paginator } from "./components/paginator";
import { AuthenticateContext } from "../../contexts/authenticate";
import { RxExit } from "react-icons/rx";
import { IconButton, Tooltip } from "@radix-ui/themes";
import { GrContactInfo } from "react-icons/gr";
import { Select } from "./components/select";


type ContactsDataType = {
  contacts: Contact[];
  numberOfRecords: number;
}

export function Contacts() {

  const { isUserAuthenticated, logout } = useContext(AuthenticateContext);


  const navigate = useNavigate();

  const [page, setPage] = useState(1)
  const [itemPerPage, setItemPerPage] = useState("2")
  const [contactsData, setContactsData] = useState<ContactsDataType>()
  const { getContactList } = useContext(ContactContext)

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

  const handleLogout = () => {
    logout();
    navigate(`/login`)
  }
  return (
    <div className="flex flex-col gap-4 h-full">
      <header className='flex py-2 px-8 items-center bg-violet-400 justify-between'>
        <div className="flex items-center">
          <img src="/public/assets/images/login.png" className="rounded-full h-12 w-12" />
          <h2 className="font-bold text-lg">ChatBot</h2>
        </div>

        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <img src="/public/assets/images/avatar-anonimo.jpg" className="rounded-full h-8 w-8" />
            <span>Administrator</span>
          </div>

          <Tooltip content="Sair">
            <IconButton radius="full" color="violet" onClick={() => handleLogout()}>
              <RxExit />
            </IconButton>
          </Tooltip>
        </div>

      </header>

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
        <footer className="flex justify-center absolute bottom-8 w-full">
          <Paginator currentPage={page} numberOfRecords={contactsData?.numberOfRecords} handleChangePage={handleChangePage} itemsPerPage={Number(itemPerPage)} />
        </footer>
      </div >


    </div >
  )
}

