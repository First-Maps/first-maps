import { Navbar } from "../components/Navbar/Navbar"
import Link from "next/link"
import Button from "../components/Button"
import { useSession, signIn, signOut } from 'next-auth/react'

export default function AccountSettings() {
  return (
    <div>
      <h1>Account Settings</h1>
      <Button onClick={() => {
        signOut().then(() => {
          window.location.href = "/"
        })
      }}
        text="Sign Out"></Button>
      <Button
        text="Go Back"
        onClick={() => {
          window.history.back()
        }}></Button>


    </div >
  )
}