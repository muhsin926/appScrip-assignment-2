import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const ClinicalPage = () => {
  return (
    <main className='main'>
    <div className='logo'>lOGO</div>
    <header className='header'>
        <Navbar/>
    </header>
    <aside className='sidebar'>
        <Sidebar/>
    </aside>
    <section className='container'>container</section>
    </main>
  )
}

export default ClinicalPage