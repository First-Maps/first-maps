import { Navbar } from "../components/Navbar/Navbar"
import Link from "next/link"

export default function AccountSettings() {
  return (
    <div>
      <h1>Account Settings</h1>
      <p>Coming soon...</p>
      <Link href={`/profile`} passHref legacyBehavior>
        <button>Go Back</button>
      </Link>
      
      
    </div>
  )
}