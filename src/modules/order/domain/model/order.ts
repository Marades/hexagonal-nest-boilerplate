export default class Order {
  accessor id: number;
  _price: number;

  constructor(data) {
    this.id = data.id;
    this._price = data.price;
  }

  get price() {
    return this._price;
  }

  get vat() {
    return this.price * 0.1;
  }

  get priceWithVat() {
    return this.price * 1.1;
  }

  validate(): void {
    if (this.price < 0) {
      throw new Error('price could not be minus number');
    }
  }
}
