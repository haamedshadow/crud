"use client"
import UserOperations from "@/graphql/operations/users"
import { CreateUserData, CreateUserVariables } from "@/util/types"
import { useMutation } from "@apollo/client"
import {
  Button,
  Card,
  Checkbox,
  Input,
  Typography,
} from "@material-tailwind/react"
import { useRouter } from "next/navigation"
import { useState } from "react"

type Props = {
  type: string
}


const AuthForm = ({ type }: Props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const router = useRouter()
  const [createUser, { data, loading, error }] = useMutation<
    CreateUserData,
    CreateUserVariables
  >(UserOperations.Mutations.createUser)

  console.log("here is data: ", data, loading, error)

  const onSubmit = async () => {
    if (type === "signin") {
      console.log("first")
    }
    if (type === "signup") {
      if (
        !email ||
        !password ||
        !confirmPassword ||
        password !== confirmPassword
      )
        return console.log("error")
      try {
        const req = await createUser({ variables: { email, password } })
        if (req.data?.createUser.success === true) {
          router.replace("auth/signin")
        }
      } catch (error) {}
    }
  }

  return (
    <Card
      color="transparent"
      shadow={false}
    >
      <Typography
        variant="h4"
        color="blue-gray"
      >
        {type === "signup" ? "Sign Up" : type === "signin" ? "Sign In" : null}
      </Typography>
      <Typography
        color="gray"
        className="mt-1 font-normal"
      >
        Enter your details to register.
      </Typography>
      <form className="mb-2 mt-8 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input
            size="lg"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            size="lg"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {type === "signup" ? (
            <Input
              type="password"
              size="lg"
              label="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          ) : type === "signin" ? null : null}
        </div>
        {type === "signup" ? (
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-blue-500"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
        ) : type === "signin" ? null : null}

        <Button
          onClick={onSubmit}
          className="mt-6"
          fullWidth
        >
          {type === "signup" ? "Register" : type === "signin" ? "Login" : null}
        </Button>
        <Typography
          color="gray"
          className="mt-4 text-center font-normal"
        >
          Already have an account?{" "}
          <a
            href="#"
            className="font-medium text-blue-500 transition-colors hover:text-blue-700"
          >
            Sign In
          </a>
        </Typography>
      </form>
    </Card>
  )
}

export default AuthForm
