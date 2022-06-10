import React from 'react'
import Link from "next/link"
export default function Footer() {
  return (
      <footer className='__next_footer'>
    <div class=" navbar-collapse container" id="navbarSupportedContent">
      <ul class="d-flex">
          <Link href="/">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li></Link>
        
        <Link href="/About">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/About">About</a>
        </li></Link>
        <Link href="/Carrere">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/Carrere">Carrere</a>
        </li></Link>
        <Link href="/Contact">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/Contact">Contact</a>
        </li></Link>
      </ul>
      
      </div>
      </footer>
  )
}
