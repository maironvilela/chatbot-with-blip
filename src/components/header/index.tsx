import { useContext } from "react";
import { useNavigate } from "react-router";

import { RxExit } from "react-icons/rx";

import { IconButton, Tooltip } from "@radix-ui/themes";

import { AuthenticateContext } from "../../contexts/authenticate";
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
                <img src="https://png.pngtree.com/png-vector/20240628/ourmid/pngtree-3d-robot-png-image_12841934.png" className="rounded-full h-12 w-12" />
                <h2 className="font-bold text-lg">ChatBot</h2>
            </div>

            <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                    <img src={avatarUrl} className="rounded-full h-8 w-8" />
                    <span className="font-bold text-lg">Administrador</span>
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