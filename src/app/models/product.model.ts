interface IProductCategoryList {
  categories: Array<ICategoryList>;
  products: Array<IProductList>;
}

interface ICategoryList {
  categoryId: number;
  categoryName: string;
}

interface IProductList {
  name: string;
  price: number;
  itemLeft: number;
  categories: Array<number>;
  rating: number;
}

interface IMappedProducts {
  name: string;
  price: number;
  itemLeft: number;
  rating: number;
  categoryName: Array<string>;
}

interface IAuth {
  username: string;
  password: string;
}

interface IFilterObj {
  search: string;
  price: string;
  category: string;
}

interface ITab {
  index: number;
  action: string;
  tabData: IFilterObj;
}

export {
  IProductCategoryList,
  ICategoryList,
  IProductList,
  IMappedProducts,
  IAuth,
  IFilterObj,
  ITab
};
