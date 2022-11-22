import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <header>
      <Link to='/'>
        <img className='nav-logo' src='https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ffc4e215e-c4bc-45ea-a4b1-fd5212dc9cc9%2FPAH_Logo_Circle_-_9A3324_484C_-_1000px_-_TINY.png?table=block&id=f366bec5-2e5b-446d-841b-7dfaf81d8cd3&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=250&userId=&cache=v2' alt='profile-logo' />
      </Link>
      <div className='links'>
        <Link to='/'>Game</Link>
        <Link to='/used-cards'>Used Cards</Link>
        <Link to='/instructions'>Instructions</Link>
      </div>
    </header>
  )
}

export default Nav