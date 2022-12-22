import React from 'react'
import MainContent from './components/MainContent'
import './style.css'

/*

💪 Exercise: Placing components in separate files

Notice that the MainContent component is now imported from a separate file (src/components/MainContent.jsx)

🎯 Your task:
Place the Header and Footer components in separate files.

💡 Tip: don't forget to import React (import React from 'react') at the top of your component files. 

*/

export default function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header>
      <h1>React App</h1>
    </header>
  )
}

function Footer() {
  return (
    <footer>
      <a href="#">Privacy policy</a>
    </footer>
  )
}
