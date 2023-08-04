import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


export function CartWidget() {

    return (
        <div className='nav-cart'>
            <FontAwesomeIcon icon={faCartShopping} />
            2
        </div>    
    );
}