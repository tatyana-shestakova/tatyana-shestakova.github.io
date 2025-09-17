export type UserType = 'Standard' | 'Premium' | 'Gold' | 'Free';
export type GoodType = 'Car' | 'Toy' | 'Food';

export enum MockUserDiscountSize {
  Standard = 10,
  Premium = 15,
  Gold = 20,
  Free = 5,
}

export enum MockGoodDiscountSize {
  Car = 3,
  Toy = 19,
  Food = 30,
}

export const setUserDiscount = (userType: UserType) => {
  return Math.floor(Math.random() * MockUserDiscountSize[userType]);
};

export const setGoodDiscount = (goodType: GoodType) => {
  return Math.floor(Math.random() * MockGoodDiscountSize[goodType]);
};

export class AccountService {
  user: UserType;
  goodType: GoodType;

  private userDiscount: number;

  constructor(user: UserType, goodType: GoodType) {
    this.user = user;
    this.goodType = goodType;
  }

  calculateDiscount(user: UserType, goodType: GoodType) {
    return setUserDiscount(user) + setGoodDiscount(goodType);
  }
}
