import CatList from "./CatList";
import CategoryData from "./CategoryData";

const Category = () => {
  const  {category}  = CategoryData();
 
  const cat = category?.reverse()


  return (
    <div className="     flex w-[90%] h-[40px] py-2 justify-between items-end ">
      {category?.length < 1 && (
        <div className="  flex bg-[#2e2e2ea0]  w-[100%] justify-between items-center h-full  "></div>
      )}
      <div className="  flex  w-[100%] justify-between items-end h-full  ">
        {category?.length > 1 &&
          cat?.map((categories) => {
            return <CatList key={categories.id} categories={categories} />;
          })}
      </div>
    </div>
  );
};

export default Category;
