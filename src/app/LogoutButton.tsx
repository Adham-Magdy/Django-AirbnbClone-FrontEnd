'use client'

import { useRouter } from "next/navigation"
import MenuLink from "./components/navbar/MenuLink"
import { resetAuthCookies } from "./lib/action"


const LogoutButton:React.FC = () => {
    const router = useRouter()
    const submitLogout =async()=>{
        resetAuthCookies()

        router.push('/');
    
    }
  return (
  <MenuLink
  label="logout"
  onClick={submitLogout}
  />
  )
}

export default LogoutButton
