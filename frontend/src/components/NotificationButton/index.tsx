import icon from '../../assets/img/notify-icon.svg'
import './styles.css'

function NotificationButton() {
  return (
    <div className="sg-card-btn-container">
      <div className="sg-card-red-btn">
        <img src={icon} alt="Notify" />
      </div>
    </div>
  )
}

export default NotificationButton
