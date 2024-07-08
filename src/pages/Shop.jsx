import { Listbox, Transition } from "@headlessui/react";
import { Check, ExpandMoreRounded } from "@mui/icons-material";
import { Pagination, Typography } from "@mui/material";
import { Fragment, useContext, useEffect, useState } from "react";
import CardShop from "../components/CardShop";
import MainContext from "../context";
import "./Shop/style.css";
const people = [
  { name: "all" },
  { name: "pc" },
  { name: "phone" },
  { name: "console" },
  { name: "headphone" },
  { name: "other" },
];
const Shop = () => {
  const { allProduct } = useContext(MainContext);
  const [selected, setSelected] = useState(people[0]);
  const [dataCategory, setDataCategory] = useState([]);
  const itemsPerPage = 6;

  useEffect(() => {
    if (selected.name === "all") {
      setDataCategory(() => allProduct);
    } else {
      const filter = allProduct.filter(
        (item) => item.category === selected.name
      );
      setDataCategory(() => filter);
      setCurrentPage(1);
    }
  }, [allProduct, selected]);
  
  const renderData = () => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return dataCategory.slice(start, end).map((item, index) => (
      <div key={index}>
        <CardShop
          id={item.id}
          nameProduct={item.nameProduct}
          imageProduct={item.imageProduct}
          informationProduct={item.informationProduct}
          priceProduct={item.priceProduct}
          averageProduct={item.averageProduct}
          selected={selected}
        />
      </div>
    ));
  };

  const [currentPage, setCurrentPage] = useState(1);
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };
  const handleChangeCategory = () => {
    if (selected.name === "all") {
      setDataCategory(() => allProduct);
      setCurrentPage(1);
    } else {
      const filter = allProduct.filter(
        (item) => item.category === selected.name
      );
      setDataCategory(() => filter);
      setCurrentPage(1);
    }
  };

  return (
    <div className="shop">
      <div className="shop-cont min-h-[100vh]  pt-20">
        <div className="bg-blogs-show pt-2 pb-32">
          <div className="w-full px-32">
            <Typography variant="h3">product</Typography>
            <div className=" w-72 text-background-gray">
              <Listbox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                  <Listbox.Button className="relativ  w-full cursor-default rounded-lg  text-[white] bg-dark-card py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                    <span className="block truncate">{selected.name}</span>
                    <span className="pointer-events-none absolute z-50 inset-y-0 right-0 flex items-center pr-2">
                      <ExpandMoreRounded
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-30 mt-1 max-h-60 w-full overflow-auto rounded-md box-list-filter text-[white] py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                      {people.map((person, personIdx) => (
                        <Listbox.Option
                          key={personIdx}
                          className={({ active }) =>
                            `relative cursor-default   select-none py-2 pl-10 pr-4 ${
                              active ? "text-amber-900" : "text-gray-900"
                            }`
                          }
                          value={person}
                          onClick={handleChangeCategory}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                {person.name}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                  <Check
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
          </div>
          <div className="cont-card-blogs mt-16 flex  gap-10  flex-wrap px-32">
          {/* <div className="cont-card-blogs mt-16 grid  grid-cols-3 gap-10  grid-rows-2  px-32"> */}
            {renderData()}
          </div>
          <div className="flex  justify-center mt-16">
            <Pagination
              count={Math.ceil(dataCategory.length / itemsPerPage)}
              page={currentPage}
              onChange={handleChange}
              color="primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
