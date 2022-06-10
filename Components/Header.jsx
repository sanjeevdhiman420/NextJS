import React from 'react'
import Link from "next/link"
import Image from 'next/image'
export default function Header() {
    const loginDashbaord =()=>{
        alert("event fired on btn login");
    }
  return (
    <div className="__next_header ">
        <div className="__next_row container">
        <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <div className="logo">
        <Image src="/logo.webp" alt='__next_logo' width={50} height={50}/>
    </div>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
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
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      <button className="btn btn-primary mx-3" onClick={loginDashbaord}>Login Dashboard</button>
    </div>
  </div>
</nav>
    </div>
    </div>
  )
}
