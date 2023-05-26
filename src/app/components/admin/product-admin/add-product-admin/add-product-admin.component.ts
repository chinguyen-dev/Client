import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {CategoryService} from "../../../../services/category.service";
import {Category} from "../../../../model/Category";
import {HttpErrorResponse} from "@angular/common/http";
import {MdbTableDirective} from "mdb-angular-ui-kit/table";
import {Variant} from "../../../../model/Variant";
import {Color} from "../../../../model/Color";
import {Size} from "../../../../model/Size";
import {Observable, of} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {Image} from "../../../../model/Image";
import {FileUploadService} from "../../../../services/file-upload.service";
import {ProductService} from "../../../../services/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-product-admin',
  templateUrl: './add-product-admin.component.html',
  styleUrls: ['./add-product-admin.component.scss']
})
export class AddProductAdminComponent implements OnInit {
  @ViewChild('table') table!: MdbTableDirective<Variant>;
  headers: string[] = ['#', 'Màu sắc', 'Size', 'Sku', 'Thao tác'];
  categories: any[] = [];
  variant$: Observable<Variant[]> | undefined;
  image$: Observable<Image[]> | undefined;
  variant: Variant[] = [];
  images: Image[] = [];
  files: any[] = [];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private fileUploadService: FileUploadService,
    private productService: ProductService,
  ) {
  }

  ngOnInit(): void {
    this.getCategories();
  }

  form = this.fb.group({
    name: ['', [Validators.required]],
    price: ['', [Validators.required, Validators.pattern]],
    description: ['', [Validators.required]],
    parentId: [''],
    sizes: [[], [Validators.required]],
    colors: [[], [Validators.required]],
  });

  onSubmit() {
    const productAtt = {
      name: this.form.value.name,
      price: this.form.value.price,
      categoryId: this.form.value.parentId,
      description: this.form.value.description
    };
    this.productService.addProduct({
      product: productAtt,
      images: this.images,
      productVariants: this.variant
    }).subscribe({
      next: (res: any) => this.router.navigateByUrl("/admin/products"),
      error: (err: any) => console.log(err),
    });
  }

  uploadFile(sku: string) {
    let image: Image| undefined = this.images.find((image : Image) => image.sku == sku);
    if (image && image?.paths.length == 0) {
      const file = this.files.find((file: any) => file.sku === sku);
        if (file) {
          this.fileUploadService.uploadMultipleFile(file.files).subscribe({
            next: (res: string[]) => {
              console.log(res);
              this.images.map((image: Image) => {
                if (image.sku === sku) image.paths = res;
              })
            },
            error: (err: any) => console.log(err)
          });
        }
    }
  }

  onChooseOption() {
    this.variant = [];
    this.images = [];
    let sizes: Size[] = [];
    let colors: Color[] = [];
    let formSizesValue = this.form.controls.sizes.value;
    let formColorsValue = this.form.controls.colors.value;
    if (formSizesValue != null && formColorsValue != null) {
      sizes = formSizesValue;
      colors = formColorsValue;
    }
    colors.forEach((color: Color) => {
      let sku = this.generateSKU(color.label);
      this.images.push({sku: sku, paths: []})
      sizes.forEach((size: Size) => this.variant.push({
        color: color.label,
        size: size.label,
        sku: sku
      }))
    });
    this.image$ = of(this.images);
    this.variant$ = of(this.variant);
  }

  onFileSelected(files: File[], sku: any) {
    let fileSize = 0;
    if (this.files.some((file: any) => file.sku === sku)) {
      this.files.map((item: any) => {
        if (item.sku === sku) {
          item.files.push(...files);
          fileSize = item.files.length;
        }
      });
    } else {
      fileSize = files.length;
      this.files.push({sku: sku, files: files});
    }
  }

  onFileRemove(file: File) {
    this.files = this.files.filter((item: File, index: number) => index !== this.files.indexOf(file));
  }

  removeVariant(obj: Variant) {
    let images: Image[] = [];
    this.variant = this.variant.filter((variant: Variant) => variant !== obj);
    for (let image of this.images) {
      if (this.variant.filter((variant: Variant) => variant.sku == image.sku).length > 0) images.push(image);
    }
    this.image$ = of(images);
    this.variant$ = of(this.variant);
  }

  dataSize: Size[] = [
    {value: '1', label: 'XL'},
    {value: '2', label: 'S'},
    {value: '3', label: 'M'},
    {value: '4', label: 'L'},
  ];
  dataColors: Color[] = [
    {value: '1', label: 'Nâu'},
    {value: '2', label: 'Đỏ'},
    {value: '3', label: 'Đen'},
    {value: '4', label: 'Cam'},
    {value: '5', label: 'Tím'},
    {value: '6', label: 'Hồng'},
    {value: '7', label: 'Trắng'},
    {value: '8', label: 'Xanh'},
    {value: '9', label: 'Vàng'},
    {value: '10', label: 'Xám'},
    {value: '11', label: 'Tím than'},
  ];

  public getCategories(): void {
    this.categoryService.getCategories().subscribe({
      next: (response: Category[]) => {
        this.categoryService.transformData(response);
        this.categories = [{id: 0, name: 'Danh mục cha'}, ...this.categoryService.sortParentChild(response)];
      },
      error: (error: HttpErrorResponse) => console.log(error)
    });
  }

  public generateSKU(str: string) {
    let sku = '';
    const chars = environment.chars;
    for (let i = 0; i < 8; i++) sku += chars.charAt(Math.floor(Math.random() * chars.length));
    return sku + "-" + str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase();
  }
}
