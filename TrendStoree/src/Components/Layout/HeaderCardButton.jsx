import Carticon from '../UI/Carticon'
import './HeaderCardButton.css'

const HeaderCardButton = () => {
  return (
    <button className="button">
        <span className="icon">
            <Carticon/>
        </span>
        <span>Səbətim</span>
        <span className="badge">0</span>
    </button>
  )
}

export default HeaderCardButton