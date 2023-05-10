import {IProductVariant} from "./IProductVariant";

interface IImages {
  id: number,
  createAt: string,
  updateAt: string,
  name: string,
  src: string
}

export interface IProduct{
  id : number,
  createAt: string,
  updateAt: string,
  name: string,
  price: number,
  slug: string,
  description: string,
  productVariants: IProductVariant[],
  productImages : IImages[]
}
