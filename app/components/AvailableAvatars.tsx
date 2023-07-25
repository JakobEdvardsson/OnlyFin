"use client"

import {ApiCalls} from "@/app/utilities/ApiCalls";
import {useRouter} from "next/navigation";

//TODO: scrap this cursed code for a proper settings page
export default function AvailableAvatars() {
    const router = useRouter()

    function chooseAvatar(avatarId: number) {
        ApiCalls.updateProfilePicture(avatarId)
            .then(response => {
                document.location.reload()
            })
            .catch(error => {
                if (error.response.status === 401) {
                    router.push("/login?redirect=settings")
                }
                else {
                    console.log("[app/AvailableAvatars.renderAllAvatars()]: " + error)
                }
            })
    }

    function renderAllAvatars() {
        let avatars = []

        for (let i = 0; i <= 57; i++) {
            avatars.push(
                <button key={i} className={"w-40 h-40 p-1"}
                        onClick={() => {
                            chooseAvatar(i)
                        }}>
                    <img src={`/Avatars/avatar-${i}.svg`} alt={`Profile picture ${i}`}/>
                </button>
            )
        }

        return avatars
    }

    return (
        <>
            {renderAllAvatars()}
        </>
    )
}