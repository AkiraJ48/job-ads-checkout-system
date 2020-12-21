type JobAd = {
  key: string,
  title: string,
  description: string,
  price: number,
  containsSpecialDeal?: boolean,
  specialDeal?: string
}

export default JobAd;
