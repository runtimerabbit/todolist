"use client";
function LogoutButton ({onClick}: {onClick:any}) {
    async function handleLogout(){
        let res = await onClick
        if (res){
            location.reload()
        }
    }
    return (
<button onClick={() => handleLogout()} className="font-bold text-xl">Logout</button>
    )
}

export {LogoutButton}