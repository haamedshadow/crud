export interface CreateUsernameData {
  createUsername: {
    success: boolean
    error: string
  }
}

export interface CreateUsernameVariables {
  username: string
}

export interface CreateUserVariables {
  email: string
  password: string
}
export interface CreateUserData {
  createUser: {
    success: boolean
    error: string
  }
}
