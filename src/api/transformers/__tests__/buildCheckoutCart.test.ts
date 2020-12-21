import { m } from 'framer-motion';
import buildCheckoutCart from '../buildCheckoutCart';

describe('buildCheckoutCart', () => {
  describe('no special pricing rules', () => {
    test('handle', () => {
      const products = [
        {
          id: '1',
          name: 'classic',
          description: '',
          price: 125
        }
      ];
  
      const pricingRules = [];
      const selectedProducts = [
        {
          id: '1',
          quantity: 2
        }
      ]
      const cart = buildCheckoutCart(products, pricingRules, selectedProducts);
  
      expect(cart).toEqual({
        products: [
          {
            id: '1',
            name: 'classic',
            description: '',
            price: 125,
            quantity: 2,
          }
        ],
        totalAmount: 250
      })
    })
  })

  describe('single special pricing rule for single product', () => {

  })

  describe('multiple special pricing rule', () => {

  })
})