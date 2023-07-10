import { AiOutlineShoppingCart } from 'react-icons/ai';

export const Cartwiget =() => {
    return (
        <div className="collapse navbar-collapse position-absolute top-50 end-0 translate-middle-y px-4">
            <AiOutlineShoppingCart />
            <div className="collapse navbar-collapse position-absolute top-80 end-0 translate-middle-y px-3">
                <span style={{
                    color:'white',
                    backgroundColor:'black',
                    borderRadius:"90%"
                }}>0
                </span>
            </div>
        </div>
    )
}