import Form from 'react-bootstrap/Form';
import { useShoppingCart } from "../context/ShoppingCartContext";

export function SearchBar({updateFilter, changeSelect}) {
    const { storeItems } = useShoppingCart()
    const categories = storeItems.map(item => item.category)
    const uniqueCategories = new Set(categories)
    
    return (
        <div className='d-flex justify-content-between align-items-center mb-2'>
            <div>
                <select className="form-select" onChange={changeSelect}>
                    <option value="ALL">Products</option>
                    {[...uniqueCategories].map( c =>
                    (<option key={c} value={c}>{c}</option>)
                    )}
                </select>
            </div>
            <div className="d-flex justify-content-end my-2">
                <Form> 
                    <Form.Control
                        type="text"
                        placeholder="Search"
                        className=" mr-sm-2"
                        onChange={(e)=>updateFilter(e.target.value)}
                        />
                </Form>
            </div>
        </div>
    );
}
