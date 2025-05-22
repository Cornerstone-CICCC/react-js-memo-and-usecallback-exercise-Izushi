import { memo } from "react"

type Props = {
  firstName: string
  lastName: string
}

const Profile = memo((props: Props) => {
  const { firstName, lastName } = props
  console.log('Rendered Profile component')
  return (
    <div>
      <h2>User Profile</h2>
      <h3>First Name: {firstName}</h3>
      <h3>Last Name: {lastName}</h3>
    </div>
  )
})

export default Profile