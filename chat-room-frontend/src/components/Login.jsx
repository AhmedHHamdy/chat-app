import { useState } from "react";

const LoginForm = ({onLogin}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch("http://localhost:4000/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
      })

      const data = await response.json()

      onLogin(data.token, data.username)

    } catch (error) {
      console.log(error)
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  )
}

export default LoginForm