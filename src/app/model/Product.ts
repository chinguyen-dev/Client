export class Product{
  id: number=0 ;
  name = "";
  price = 0
  imgUrl = "";
  size ="";
  color = ''

  constructor(id: number, name: string, price: number ,imgUrl: string, size: string, color : string) {
    this.id = id;
    this.price = price;
    this.name = name;
    this.imgUrl = imgUrl;
    this.size = size;
    this.color = color
  }
}
