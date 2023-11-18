import Cookies from "js-cookie";
import CategoryData from "../components/Header/CategoryData";
import useMain from "./Main";

export const useGetProductByCategory = (cate) => {
  const { category } = CategoryData();
  const { products } = useMain();
  const catName = Cookies?.get("catName");

  const filterCategory = category?.filter((data) => data?.name === catName)[0]
    ?.children;
  const filteredProducts = products.filter((product) => {
    if (cate) {
      return product.categories[0].name === cate;
    }

    for (const childCategory of filterCategory || []) {
      if (product.categories[0].name === childCategory.name) {
        return true;
      }
    }

    return false;
  });

  return {
    data: filteredProducts,
    cat: filterCategory || [],
  };
};


// import Cookies from "js-cookie";
// import CategoryData from "../components/Header/CategoryData";
// import useMain from "./Main";

// export function useGetProductByCategory(cate) {
//   const { category } = CategoryData();
//   const { products } = useMain();
//   const catName = Cookies?.get("catName");
//   const filterCategory = category?.filter((data) => data?.name === catName)[0]
//     ?.children;

//   let cat = [];
//   let data = [];

//   return function () {
//     for (var index = 0; index < filterCategory?.length; index++) {
//       cat.push({
//         id: filterCategory[index].id,
//         name: filterCategory[index].name,
//         slug: filterCategory[index].slug,
//       });
//     }

//     if (cate) {
//       return function () {
//         for (var i = 0; i < products.length; i++) {
//           if (cate && products[i].categories[0].name === cate) {
//             data.push(products[i]);
//           } else {
//             data;
//           }
//         }

//         return { data, cat };
//       };
//     } else {
//       return function () {
//         for (var i = 0; i < products.length; i++) {
//           for (var j = 0; j < cat?.length; j++) {
//             if (products[i].categories[0].name === cat[j]?.name) {
//               data.push(products[i]);
//             } else {
//               data;
//             }
//           }
//         }

//         return { data, cat };
//       };
//     }
//   };
// }
