import buildCheckoutCart from '../buildCheckoutCart';
import DiscountRule, { DiscountRuleType } from '../../types/DiscountRule';

describe('buildCheckoutCart', () => {
  describe('no special pricing rules applied', () => {
    test('checking out a single product', () => {
      const products = [
        {
          id: '1',
          name: 'classic',
          description: '',
          price: 125
        }
      ];
  
      const discountRules: DiscountRule[] = [];
      const selectedProducts = [
        {
          id: '1',
          quantity: 2
        }
      ]
      const cart = buildCheckoutCart(products, discountRules, selectedProducts);
  
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

    test('checking out multiple products', () => {
      const products = [
        {
          id: '1',
          name: 'classic',
          description: '',
          price: 125
        },
        {
          id: '2',
          name: 'standout',
          description: '',
          price: 250.55
        }
      ];

      const discountRules: DiscountRule[] = [];
      const selectedProducts = [
        {
          id: '1',
          quantity: 1
        },
        {
          id: '2',
          quantity: 3
        }
      ]
      const cart = buildCheckoutCart(products, discountRules, selectedProducts);

      expect(cart).toEqual({
        products: [
          {
            id: '1',
            name: 'classic',
            description: '',
            price: 125,
            quantity: 1,
          },
          {
            id: '2',
            name: 'standout',
            description: '',
            price: 250.55,
            quantity: 3,
          }
        ],
        totalAmount: 876.65
      })
    })
  })

  describe('product has discounted amount applied', () => {
    test('checking out a single product', () => {
      const products = [
        {
          id: '1',
          name: 'classic',
          description: '',
          price: 125
        }
      ];

      const discountRules = [
        {
          id: '1',
          type: DiscountRuleType.DISCOUNT,
          products: ['1'],
          discountAmount: 20,
        }
      ];
      const selectedProducts = [
        {
          id: '1',
          quantity: 2
        }
      ]
      const cart = buildCheckoutCart(products, discountRules, selectedProducts);

      expect(cart).toEqual({
        products: [
          {
            id: '1',
            name: 'classic',
            description: '',
            price: 125,
            discountedPrice: 105,
            quantity: 2,
          }
        ],
        totalAmount: 210
      })
    })

    test('checking out multiple product', () => {
      const products = [
        {
          id: '1',
          name: 'classic',
          description: '',
          price: 125
        },
        {
          id: '2',
          name: 'premium',
          description: '',
          price: 300.55
        }
      ];

      const discountRules = [
        {
          id: '1',
          type: DiscountRuleType.DISCOUNT,
          products: ['1', '2'],
          discountAmount: 20,
        }
      ];
      const selectedProducts = [
        {
          id: '1',
          quantity: 2
        },
        {
          id: '2',
          quantity: 1
        }
      ]
      const cart = buildCheckoutCart(products, discountRules, selectedProducts);

      expect(cart).toEqual({
        products: [
          {
            id: '1',
            name: 'classic',
            description: '',
            price: 125,
            discountedPrice: 105,
            quantity: 2,
          },
          {
            id: '2',
            name: 'premium',
            description: '',
            price: 300.55,
            discountedPrice: 280.55,
            quantity: 1,
          }
        ],
        totalAmount: 490.55
      })
    })
  })

  describe('product has x for y deal applied', () => {
    test('checking out a single product', () => {
      const products = [
        {
          id: '1',
          name: 'classic',
          description: '',
          price: 125
        }
      ];

      const discountRules = [
        {
          id: '1',
          type: DiscountRuleType.X_FOR_Y,
          products: ['1'],
          x: 3,
          y: 2,
        }
      ];
      const selectedProducts = [
        {
          id: '1',
          quantity: 3
        }
      ]
      const cart = buildCheckoutCart(products, discountRules, selectedProducts);

      expect(cart).toEqual({
        products: [
          {
            id: '1',
            name: 'classic',
            description: '',
            price: 125,
            quantity: 3,
            total: 250,
          }
        ],
        totalAmount: 250
      })
    })

    test('checking out a single product with many products', () => {
      const products = [
        {
          id: '1',
          name: 'classic',
          description: '',
          price: 125
        }
      ];

      const discountRules = [
        {
          id: '1',
          type: DiscountRuleType.X_FOR_Y,
          products: ['1'],
          x: 3,
          y: 2,
        }
      ];
      const selectedProducts = [
        {
          id: '1',
          quantity: 9
        }
      ]
      const cart = buildCheckoutCart(products, discountRules, selectedProducts);

      expect(cart).toEqual({
        products: [
          {
            id: '1',
            name: 'classic',
            description: '',
            price: 125,
            quantity: 9,
            total: 750,
          }
        ],
        totalAmount: 750
      })
    })

    test('checking out multiple products that isn\'t an even division', () => {
      const products = [
        {
          id: '1',
          name: 'classic',
          description: '',
          price: 125
        },
      ];

      const discountRules = [
        {
          id: '1',
          type: DiscountRuleType.X_FOR_Y,
          products: ['1'],
          x: 3,
          y: 2,
        }
      ];
      const selectedProducts = [
        {
          id: '1',
          quantity: 5
        },
      ]
      const cart = buildCheckoutCart(products, discountRules, selectedProducts);

      expect(cart).toEqual({
        products: [
          {
            id: '1',
            name: 'classic',
            description: '',
            price: 125,
            quantity: 5,
            total: 500,
          },
        ],
        totalAmount: 500
      })
    })
  })

  describe('user scenarios', () => {
    const products = [
      {
        id: "1",
        name: "classic",
        description: "Offers the most basic level of advertisement",
        price: 269.99
      },
      {
        id: "2",
        name: "standout",
        description: "Allows advertisers to use a company logo and use a longer presentation text",
        price: 322.99
      },
      {
        id: "3",
        name: "premium",
        description: "Same benefits as Standout Ad, but also puts the advertisement at the top of the results, allowing higher visibility",
        price: 394.99
      }
    ]

    test('default customer buying products', () => {
      const discountRules: DiscountRule[] = [];
      const selectedProducts = [
        {
          id: '1',
          quantity: 1
        },
        {
          id: '2',
          quantity: 1
        },
        {
          id: '3',
          quantity: 1
        }
      ]
      const cart = buildCheckoutCart(products, discountRules, selectedProducts);

      expect(cart).toEqual({
        products: [
          {
            id: products[0].id,
            name: products[0].name,
            description: products[0].description,
            price: products[0].price,
            quantity: 1,
          },
          {
            id: products[1].id,
            name: products[1].name,
            description: products[1].description,
            price: products[1].price,
            quantity: 1,
          },
          {
            id: products[2].id,
            name: products[2].name,
            description: products[2].description,
            price: products[2].price,
            quantity: 1,
          }
        ],
        totalAmount: 987.97
      })
    })

    test('second bite', () => {
      const discountRules: DiscountRule[] = [
        {
          id: '1',
          type: DiscountRuleType.X_FOR_Y,
          products: ['1'],
          x: 3,
          y: 2,
        }
      ];
      const selectedProducts = [
        {
          id: '1',
          quantity: 3
        },
        {
          id: '3',
          quantity: 1
        }
      ]
      const cart = buildCheckoutCart(products, discountRules, selectedProducts);

      expect(cart).toEqual({
        products: [
          {
            id: products[0].id,
            name: products[0].name,
            description: products[0].description,
            price: products[0].price,
            quantity: 3,
            total: 539.98,
          },
          {
            id: products[2].id,
            name: products[2].name,
            description: products[2].description,
            price: products[2].price,
            quantity: 1,
          }
        ],
        totalAmount: 934.97
      })
    })

    test('axil coffee roasters', () => {
      const discountRules: DiscountRule[] = [
        {
          id: '1',
          type: DiscountRuleType.DISCOUNT,
          products: ['2'],
          discountAmount: 23,
        }
      ];
      const selectedProducts = [
        {
          id: '2',
          quantity: 3
        },
        {
          id: '3',
          quantity: 1
        }
      ]
      const cart = buildCheckoutCart(products, discountRules, selectedProducts);

      expect(cart).toEqual({
        products: [
          {
            id: products[1].id,
            name: products[1].name,
            description: products[1].description,
            price: products[1].price,
            quantity: 3,
            discountedPrice: 299.99,

          },
          {
            id: products[2].id,
            name: products[2].name,
            description: products[2].description,
            price: products[2].price,
            quantity: 1,
          }
        ],
        totalAmount: 1294.96
      })
    })

    test('myers', () => {
      const discountRules: DiscountRule[] = [
        {
          id: '1',
          type: DiscountRuleType.DISCOUNT,
          products: ['3'],
          discountAmount: 5,
        },
        {
          id: '2',
          type: DiscountRuleType.X_FOR_Y,
          products: ['2'],
          x: 5,
          y: 4
        }
      ];
      const selectedProducts = [
        {
          id: '2',
          quantity: 6
        },
        {
          id: '3',
          quantity: 1
        }
      ]
      const cart = buildCheckoutCart(products, discountRules, selectedProducts);

      expect(cart).toEqual({
        products: [
          {
            id: products[1].id,
            name: products[1].name,
            description: products[1].description,
            price: products[1].price,
            quantity: 6,
            total: 1614.95,

          },
          {
            id: products[2].id,
            name: products[2].name,
            description: products[2].description,
            price: products[2].price,
            quantity: 1,
            discountedPrice: 389.99
          }
        ],
        totalAmount: 2004.94
      })
    })
  })
})