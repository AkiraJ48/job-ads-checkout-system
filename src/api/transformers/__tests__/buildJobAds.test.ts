import buildJobAds from '../buildJobAds';

describe('buildJobAds', () => {
  test('should build products if no special discounts applied', () => {
    const ads = [
      {
        id: '1',
        name: 'Myer',
        description: 'description',
        price: 123,
      }
    ];

    const pricingRules = [
      {
        id: '1',
        type: 'discount',
        products: ['2'],
        discountAmount: 5,
      }
    ];

    const jobAds = buildJobAds(ads, pricingRules);

    expect(jobAds).toEqual([
      {
        id: '1',
        title: 'Myer',
        description: 'description',
        price: 123,
        containsSpecialDeal: false,
        specialDeal: '',
      }
    ])
  })

  test('should build products if one special discount is applied', () => {
    const ads = [
      {
        id: '1',
        name: 'Myer',
        description: 'description',
        price: 123,
      }
    ];

    const pricingRules = [
      {
        id: '1',
        type: 'discount',
        products: ['1'],
        discountAmount: 5,
      }
    ];

    const jobAds = buildJobAds(ads, pricingRules);

    expect(jobAds).toEqual([
      {
        id: '1',
        title: 'Myer',
        description: 'description',
        price: 123,
        containsSpecialDeal: true,
        specialDeal: "You get $5 off!",
      }
    ])
  })

  test('should build products if multiple special discounts are applied', () => {
    const ads = [
      {
        id: '1',
        name: 'Myer',
        description: 'description',
        price: 123,
      },
      {
        id: '2',
        name: 'Axil',
        description: 'description',
        price: 251,
      }
    ];

    const pricingRules = [
      {
        id: '1',
        type: 'discount',
        products: ['1'],
        discountAmount: 5,
      },
      {
        id: '2',
        type: 'xFORy',
        products: ['2'],
        x: 2,
        y: 3
      }
    ];

    const jobAds = buildJobAds(ads, pricingRules);

    expect(jobAds).toEqual([
      {
        id: '1',
        title: 'Myer',
        description: 'description',
        price: 123,
        containsSpecialDeal: true,
        specialDeal: "You get $5 off!",
      },
      {
        id: '2',
        title: 'Axil',
        description: 'description',
        price: 251,
        containsSpecialDeal: true,
        specialDeal: "You can buy 2 for 3!",
      }
    ])
  })
})