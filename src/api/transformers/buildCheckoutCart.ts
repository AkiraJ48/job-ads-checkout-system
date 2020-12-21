import PricingRule from "../types/PricingRule";
import Product from "../types/Product";
import { SelectedProduct } from "../types/Checkout";

function buildCheckoutCart(products: Product[], pricingRules: PricingRule[], selectedProducts: SelectedProduct[]) {
  const productsInCart = selectedProducts.map(selectedProduct => {
    const product = products.filter(p => p.id === selectedProduct.id)[0];
    return {
      ...product,
      quantity: selectedProduct.quantity,
    }
  });

  const totalAmount = productsInCart.reduce((acc, product) => {
    if (product !== undefined) {
      return acc + (product.price * product.quantity)
    }
    return acc;
  }, 0);

  return {
    products: productsInCart,
    totalAmount,
  }
}

export default buildCheckoutCart;