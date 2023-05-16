import { gql } from "@apollo/client"
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  Queries: {},
  Mutations: {
    createUser: gql`
      mutation CreateUser($email: String!, $password: String!) {
        createUser(email: $email, password: $password) {
          success
          error
        }
      }
    `,
    createUsername: gql`
      mutation CreateUsername($username: String!) {
        createUsername(username: $username) {
          success
          error
        }
      }
    `,
  },
  Subscription: {},
}
