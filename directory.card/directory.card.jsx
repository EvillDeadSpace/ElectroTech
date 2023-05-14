import CategoryGrid from "../src/componentes/categoryGrid";
import data from "../src/componentes/date";
import SectionWrapper from "../hoc/SectionWarpper";
const Directory = () => {
  return (
    <div className=" w-1/2 grid grid-cols-3 gap-4 align-middle justify-between my-36">
      {data.map((category) => (
        <CategoryGrid key={category.id} category={category} />
      ))}
    </div>
  );
};

export default SectionWrapper(Directory, "directory");
