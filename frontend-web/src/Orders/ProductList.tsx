import ProductCard from './ProductCard';
import { Product } from './types';
import { checkIsSelected } from "./helpers"
type Props = {
    products: Product[];
    onSelectProduct: (product: Product) => void;
    selectedProducts: Product[];
}

function ProductList({ products, selectedProducts, onSelectProduct }: Props) {

    return (
        <div className="orders-list-container">
            <div className="orders-list-items">
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onSelectProduct={onSelectProduct}
                     isSelected = { checkIsSelected(selectedProducts, product) }
                    />
                ))}

            </div>
        </div>
    )
}

export default ProductList;