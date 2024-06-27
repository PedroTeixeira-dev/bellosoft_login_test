import * as Icon from 'react-bootstrap-icons'
import { BackHome } from './styled'

const BackButton = () => {
    return (
        <BackHome to={'/'}>
        <Icon.ArrowLeftCircleFill color='#8B8B8B' size={28}/>
        </BackHome >
    )
}

export default BackButton