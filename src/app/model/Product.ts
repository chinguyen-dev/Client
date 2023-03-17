export class Product{
  id: number=0 ;
  name = "";
  price = 0
  imgUrl = "";

  constructor(id: number, name: string, price: number ,imgUrl: string) {
    this.id = id;
    this.price = price;
    this.name = name;
    this.imgUrl = imgUrl;
  }
}
