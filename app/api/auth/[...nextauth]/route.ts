import nextAuth from "next-auth"
import { options } from "./options"

const auth = nextAuth(options)

export { auth as GET, auth as POST } 