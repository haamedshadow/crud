import AuthForm from "@/components/AuthForm"
type Props = {}

export default function signin({}: Props) {
  return (
    <div className="container relative mx-auto flex min-h-screen  items-center  justify-center">
      <AuthForm type="signin" />
    </div>
  )
}
