import CategoryGrid from "../src/componentes/categoryGrid";
import data from "../src/componentes/date";

const Directory = () => {
  return (
    <div className=" w-screen grid grid-cols-3 gap-4 align-middle justify-between my-36">
      {data.map((category) => (
        <CategoryGrid key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
