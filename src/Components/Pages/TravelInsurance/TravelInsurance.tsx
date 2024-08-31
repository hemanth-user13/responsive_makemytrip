import Categories from "../../Home/Categories";
import NavBar from "../../Header/NavBar";

function Insurance() {
  return (
    <div className="relative min-h-screen bg-gray-100">
      <NavBar />
      <div className="absolute inset-x-0 top-32 flex justify-center">
        <Categories styles="mx-auto" />
      </div>
      <div className="absolute inset-x-0 top-48 "></div>
    </div>
  );
}

export default Insurance;
