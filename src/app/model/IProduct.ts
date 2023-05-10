import {IProductVariant} from "./IProductVariant";
import {Category} from "./Category";

interface IImages {
  name: string,
  src: string
}

export interface IProduct{
  id : number,
  createAt: string,
  updateAt: string,
  category : Category,
  name: string,
  price: number,
  description: string,
  slug : string,
  variants: IProductVariant[],
  images : IImages[]
}
