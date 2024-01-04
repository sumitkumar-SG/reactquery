import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/super-heroes'>Traditional Super Heroes</Link></li>
                <li><Link to='/rq-super-heroes'>RQ Super Heroes</Link></li>
                <li><Link to='/fetch-list'>fetchHeroes</Link></li>
                {/* <li><Link to="/rq-super-hero/:heroId">RQSuperHero</Link></li> */}
            </ul>
        </nav>
    </div>
  )
}

export default Header