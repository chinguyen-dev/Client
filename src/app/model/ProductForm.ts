import {ProductAttribute} from "./ProductAttribute";
import {Image} from "./Image";
import {Variant} from "./Variant";

export interface ProductForm {
  product: ProductAttribute;
  images: Image[];
  productVariants: Variant[];
}
