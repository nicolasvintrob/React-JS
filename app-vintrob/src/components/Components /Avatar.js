import './Avatar.css'
import Button from '../Button/Button'


function Avatar() {
    return (
        <picture>
            <img src="https://randomuser.me/api/portraits/lego/8.jpg" alt="Lego"></img>
            <p>Lego</p>
            <Button></Button>
        </picture>
    )
}

export default Avatar