import {IProductVariant} from "./IProductVariant";
import {IProduct} from "./IProduct";

export interface IItem{
  id : number
  product : IProduct
  variant : IProductVariant
  quantity : number;
}
