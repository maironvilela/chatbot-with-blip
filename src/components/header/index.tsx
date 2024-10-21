import { useContext } from "react";
import { AuthenticateContext } from "../../contexts/authenticate";

import { RxExit } from "react-icons/rx";
import { IconButton, Tooltip } from "@radix-ui/themes";
import { useNavigate } from "react-router";
import { getAvatarUrl } from "../../utils/get-avatar-url";
export function Header() {
    const navigate = useNavigate();

    const { logout } = useContext(AuthenticateContext);

    const avatarUrl = getAvatarUrl();


    const handleLogout = () => {
        logout();
        navigate(`/login`)
    }
    return (
        <header className='flex py-2 px-8 items-center bg-violet-400 justify-between'>
            <div className="flex items-center">
                <img src="/public/assets/images/login.png" className="rounded-full h-12 w-12" />
                <h2 className="font-bold text-lg">ChatBot</h2>
            </div>

            <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                    <img src={avatarUrl} className="rounded-full h-8 w-8" />
                    <h2 className="font-bold text-lg">Administrador</h2>
                </div>

                <Tooltip content="Sair">
                    <IconButton radius="full" color="violet" onClick={() => handleLogout()}>
                        <RxExit />
                    </IconButton>
                </Tooltip>
            </div>

        </header>
    )
}