import { useState } from "react";

const SignupForm = ({onSignup}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch("http://localhost:4000/register", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password, email})
      })

      const data = await response.json()

      onSignup(data.token, data.username)

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Sign Up</button>
    </form>
  )
}

export default SignupForm