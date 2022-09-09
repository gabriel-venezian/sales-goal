import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {
  return (
    <header>
      <div className="sg-logo-container">
        <img src={logo} alt="Sales Goal logo" />
        <h1>Sales Goal</h1>
        <p>Developed by
          <a href="https://github.com/gabriel-venezian" target="_blank">@gabriel-venezian</a>
        </p>
      </div>
    </header>
  )
}

export default Header
