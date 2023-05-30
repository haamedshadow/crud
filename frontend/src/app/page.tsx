import Link from "next/link"

type Props = {}

export default function Home({}: Props) {
  return (
    <div>
      <Link href="/auth/login">Login</Link> |{" "}
      <Link href="/auth/register">Register</Link> |{" "}
      <Link href="/auth/forgot-password">Forgot Password</Link> |{" "}
      <Link href="/auth/reset-password">Reset Password</Link> |{" "}
      <Link href="/auth/change-password">Change Password</Link> |{" "}
      <Link href="/auth/verify-email">Verify Email</Link> |{" "}
      <Link href="/auth/update-profile">Update Profile</Link> |{" "}
      <Link href="/auth/logout">Logout</Link>
    </div>
  )
}
