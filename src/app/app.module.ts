import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdbAccordionModule} from 'mdb-angular-ui-kit/accordion';
import {MdbAutocompleteModule} from 'mdb-angular-ui-kit/autocomplete';
import {MdbCarouselModule} from 'mdb-angular-ui-kit/carousel';
import {MdbChartModule} from 'mdb-angular-ui-kit/charts';
import {MdbCheckboxModule} from 'mdb-angular-ui-kit/checkbox';
import {MdbCollapseModule} from 'mdb-angular-ui-kit/collapse';
import {MdbDatepickerModule} from 'mdb-angular-ui-kit/datepicker';
import {MdbDropdownModule} from 'mdb-angular-ui-kit/dropdown';
import {MdbFormsModule} from 'mdb-angular-ui-kit/forms';
import {MdbInfiniteScrollModule} from 'mdb-angular-ui-kit/infinite-scroll';
import {MdbLazyLoadingModule} from 'mdb-angular-ui-kit/lazy-loading';
import {MdbLightboxModule} from 'mdb-angular-ui-kit/lightbox';
import {MdbLoadingModule} from 'mdb-angular-ui-kit/loading';
import {MdbModalModule} from 'mdb-angular-ui-kit/modal';
import {MdbNotificationModule} from 'mdb-angular-ui-kit/notification';
import {MdbPopconfirmModule} from 'mdb-angular-ui-kit/popconfirm';
import {MdbPopoverModule} from 'mdb-angular-ui-kit/popover';
import {MdbRadioModule} from 'mdb-angular-ui-kit/radio';
import {MdbRangeModule} from 'mdb-angular-ui-kit/range';
import {MdbRatingModule} from 'mdb-angular-ui-kit/rating';
import {MdbRippleModule} from 'mdb-angular-ui-kit/ripple';
import {MdbScrollbarModule} from 'mdb-angular-ui-kit/scrollbar';
import {MdbScrollspyModule} from 'mdb-angular-ui-kit/scrollspy';
import {MdbSelectModule} from 'mdb-angular-ui-kit/select';
import {MdbSidenavModule} from 'mdb-angular-ui-kit/sidenav';
import {MdbSmoothScrollModule} from 'mdb-angular-ui-kit/smooth-scroll';
import {MdbStepperModule} from 'mdb-angular-ui-kit/stepper';
import {MdbStickyModule} from 'mdb-angular-ui-kit/sticky';
import {MdbTableModule} from 'mdb-angular-ui-kit/table';
import {MdbTabsModule} from 'mdb-angular-ui-kit/tabs';
import {MdbTimepickerModule} from 'mdb-angular-ui-kit/timepicker';
import {MdbTooltipModule} from 'mdb-angular-ui-kit/tooltip';
import {MdbValidationModule} from 'mdb-angular-ui-kit/validation';
import {MdbMultiRangeModule} from 'mdb-angular-ui-kit/multi-range';
import {MdbCalendarModule} from 'mdb-angular-calendar';
import {MdbWysiwygModule} from 'mdb-angular-wysiwyg';
import {MdbDragAndDropModule} from 'mdb-angular-drag-and-drop';
import {MdbVectorMapModule} from 'mdb-angular-vector-maps';
import {MdbFileUploadModule} from 'mdb-angular-file-upload';
import {MdbTreeviewModule} from 'mdb-angular-treeview';
import {MdbTransferModule} from 'mdb-angular-transfer';
import {MdbMentionModule} from 'mdb-angular-mention';
import {MdbCookiesManagementService} from 'mdb-angular-cookies-management';
import {MdbStorageManagementService} from 'mdb-angular-storage-management';
import {MdbOnboardingModule} from 'mdb-angular-onboarding';
import {MdbParallaxModule} from 'mdb-angular-parallax';
import {MdbInputMaskModule} from 'mdb-angular-input-mask';
import {MdbCountdownModule} from 'mdb-angular-countdown';
import {MdbScrollStatusService} from 'mdb-angular-scroll-status';
import {MdbMultiItemCarouselModule} from 'mdb-angular-multi-item-carousel';
import {MdbEcommerceGalleryModule} from 'mdb-angular-ecommerce-gallery';
import {MdbColorPickerModule} from 'mdb-angular-color-picker';
import {AppRoutingModule} from './app-routing.module';
import {ClientComponent} from './components/client/client.component';
import {FooterComponent} from './components/client/footer/footer.component';
import {ShopComponent} from './components/client/shop/shop.component';
import {ProductListComponent} from './components/client/shop/product-list/product-list.component';
import {FilterBarComponent} from './components/client/shop/filter-bar/filter-bar.component';
import {ProductItemComponent} from './components/client/shop/product-list/product-item/product-item.component';
import {LoginComponent} from './components/login/login.component';
import {HeaderComponent} from './components/client/header/header.component';
import {ProductDetailsComponent} from './components/client/shop/product-list/product-item/product-details/product-details.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CartComponent} from './components/client/cart/cart.component';
import {CartItemComponent} from './components/client/cart/cart-item/cart-item.component';
import {RegisterComponent} from './components/register/register.component';
import {CartHeaderComponent} from "./components/client/header/cart-header/cart-header.component";
import {CartHeaderItemComponent} from "./components/client/header/cart-header/cart-header-item/cart-header-item.component";
import {CarouselModule} from 'ngx-owl-carousel-o';
import {SliderComponent} from './components/client/home/slider/slider.component';
import {HomeComponent} from "./components/client/home/home.component";
import {ProductSliderComponent} from './components/client/home/product-slider/product-slider.component';
import {ClientModule} from "./components/client/client.module";
import {AuthInterceptor, authInterceptorProviders} from "./services/auth.interceptor";
import {AdminModule} from "./components/admin/admin.module";
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';
import {CheckoutComponent} from "./components/client/checkout/checkout.component";

registerLocaleData(localeDe, 'vi-VN', localeDeExtra);
@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    FooterComponent,
    ShopComponent,
    ProductListComponent,
    FilterBarComponent,
    ProductItemComponent,
    LoginComponent,
    CheckoutComponent,
    ProductDetailsComponent,
    HeaderComponent,
    CartComponent,
    CartItemComponent,
    RegisterComponent,
    CartHeaderComponent,
    CartHeaderItemComponent,
    SliderComponent,
    HomeComponent,
    ProductSliderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdbAccordionModule,
    MdbAutocompleteModule,
    MdbCarouselModule,
    MdbChartModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDatepickerModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbInfiniteScrollModule,
    MdbLazyLoadingModule,
    MdbLightboxModule,
    MdbLoadingModule,
    MdbModalModule,
    MdbNotificationModule,
    MdbPopconfirmModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRatingModule,
    MdbRippleModule,
    MdbScrollbarModule,
    MdbScrollspyModule,
    MdbSelectModule,
    MdbSidenavModule,
    MdbSmoothScrollModule,
    MdbStepperModule,
    MdbStickyModule,
    MdbTableModule,
    MdbTabsModule,
    MdbTimepickerModule,
    MdbTooltipModule,
    MdbValidationModule,
    MdbMultiRangeModule,
    MdbCalendarModule,
    MdbWysiwygModule,
    MdbDragAndDropModule,
    MdbVectorMapModule,
    MdbFileUploadModule,
    MdbTreeviewModule,
    MdbTransferModule,
    MdbMentionModule,
    MdbOnboardingModule,
    MdbParallaxModule,
    MdbInputMaskModule,
    MdbCountdownModule,
    MdbMultiItemCarouselModule,
    MdbEcommerceGalleryModule,
    MdbColorPickerModule,
    AppRoutingModule,
    FormsModule,
    CarouselModule,
    ClientModule,
    AdminModule,
    ReactiveFormsModule
  ],

  providers: [MdbCookiesManagementService,
    MdbStorageManagementService,
    MdbScrollStatusService,
    authInterceptorProviders,
    {
      provide: LOCALE_ID,
      useValue: 'vi-VN'
    },
    AuthInterceptor],
  bootstrap: [AppComponent],
})
export class AppModule {
}
