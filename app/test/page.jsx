"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { useState } from "react";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";

import { CabinetsBrand } from "@/Data/cabinets.js";
import { processor } from "@/Data/processor";
import { motherboards } from "@/Data/motherboard.js";
import { Item } from "@radix-ui/react-select";

const people = [
  {
    id: 1,
    name: "Please Select",
  },
  {
    id: 2,
    name: "Gaming Pc",
  },
  {
    id: 3,
    name: "WorkStation Pc",
  },
];

const test = () => {
  const [selected, setSelected] = useState(people[0]);
  const [cabBrand, setCabBrand] = useState(CabinetsBrand[0]);
  const [proBrand, setProBrand] = useState(processor[0]);
  const [moBrand, setMoBrand] = useState(motherboards[0]);

  const [cabItems, setCabItems] = useState([]);
  const [cabSelected, setCabSelected] = useState([]);

  const [proItems, setProItems] = useState([]);
  const [proSelected, setProSelected] = useState(null);

  const [moItems, setMoItems] = useState([]);
  const [moSelected, setMoSelected] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    return (
      setProItems(processor.find((pr) => pr.name === proBrand.name).Item),
      setProSelected(
        processor.find((pr) => pr.name === proBrand.name).Item.name
      )
      // setSocket( processor.find((pr) => pr.name === proBrand.name).Item.category)
    );
  }, [proBrand]);

  useEffect(() => {
    // let brand = CabinetsBrand.find(cb => cb.name === cabBrand.name )
    // setCabSelected(CabinetsBrand.find(cb => cb.name === cabBrand.name).Item)

    return (
      setCabItems(CabinetsBrand.find((cb) => cb.name === cabBrand.name).Item),
      setCabSelected(
        CabinetsBrand.find((cb) => cb.name === cabBrand.name).Item.name
      )
    );
  }, [cabBrand]);

  useEffect(() => {
    // setSocket(proSelected.category)
    var socketItem = proSelected?.category ? proSelected?.category : "";
    
    // console.log(socketItem)
    let moItem = motherboards?.find((mo) => mo.name === moBrand.name).Item;
    
    
    if (socketItem === "LGA1151") {
      return setMoItems(moItem.LGA1151);
    } else if (socketItem === "LGA1200") {
      return setMoItems(moItem.LGA1200);
    } else {
      return setMoItems([])
    }
  }, [ proSelected, socket,moBrand,]);

  const cabBrandRef = useRef();
  const cabRef = useRef();
  const proRef = useRef();
  const moRef = useRef();
  // console.log("moItem", moItems);
  // console.log("moSocket", socket);

  // if (selected.id !== 1) {
  //   console.log("ok");
  // }

  useGSAP(() => {
    if (selected.id === 1) {
      gsap.to(cabBrandRef.current, {
        display: "hidden",
      });
    } else {
      gsap.to(cabBrandRef.current, {
        display: "block",
      });
    }
  }, [selected]);

  useGSAP(() => {
    if (cabBrand.id === 1) {
      gsap.to(cabRef.current, {
        display: "hidden",
      });
    } else {
      gsap.to(cabRef.current, {
        display: "block",
      });
    }
  }, [cabBrand]);

  return (
    <div className="grid grid-cols-2 justify-around  ">
      <div className="w-[30%]">
        <Listbox value={selected} onChange={setSelected}>
          <Label className="block text-sm/6 font-medium text-gray-900">
            Usage
          </Label>
          <div className="relative mt-2">
            <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pl-3 pr-2 text-left text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
              <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                <span className="block truncate">{selected.name}</span>
              </span>
            </ListboxButton>

            <ListboxOptions
              transition
              className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
            >
              {people.map((person) => (
                <ListboxOption
                  key={person.id}
                  value={person}
                  className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white data-[focus]:outline-none"
                >
                  <div className="flex items-center">
                    <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                      {person.name}
                    </span>
                  </div>

                  <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-[&:not([data-selected])]:hidden group-data-[focus]:text-white"></span>
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        </Listbox>
      </div>

      <div ref={cabBrandRef} className="w-[30%]  hidden">
        <Listbox value={cabBrand} onChange={setCabBrand}>
          <Label className="block text-sm/6 font-medium text-gray-900">
            Cabinet
          </Label>
          <div className="relative mt-2">
            <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pl-3 pr-2 text-left text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
              <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                <span className="block truncate">{cabBrand.name}</span>
              </span>
            </ListboxButton>

            <ListboxOptions
              transition
              className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
            >
              {CabinetsBrand.map((cabinet) => (
                <ListboxOption
                  key={cabinet.id}
                  value={cabinet}
                  className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white data-[focus]:outline-none"
                >
                  <div className="flex items-center">
                    <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                      {cabinet.name}
                    </span>
                  </div>

                  <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-[&:not([data-selected])]:hidden group-data-[focus]:text-white"></span>
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        </Listbox>
      </div>

      <div ref={cabRef} className="w-[30%] hidden ">
        <Listbox value={cabSelected} onChange={setCabSelected}>
          <Label className="block text-sm/6 font-medium text-gray-900">
            Cabinet
          </Label>
          <div className="relative mt-2">
            <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pl-3 pr-2 text-left text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
              <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                <span className="block truncate">
                  {cabSelected?.name ? cabSelected.name : "please Select"}
                </span>
              </span>
            </ListboxButton>

            <ListboxOptions
              transition
              className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
            >
              {cabItems.map((cab) => (
                <ListboxOption
                  key={cab.id}
                  value={cab}
                  className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white data-[focus]:outline-none"
                >
                  <div className="flex items-center">
                    <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                      {cab.name}
                    </span>
                  </div>

                  <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-[&:not([data-selected])]:hidden group-data-[focus]:text-white"></span>
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        </Listbox>
      </div>

      <div ref={proRef} className="w-[30%] ">
        <Listbox value={proBrand} onChange={setProBrand}>
          <Label className="block text-sm/6 font-medium text-gray-900">
            Processor Brand
          </Label>
          <div className="relative mt-2">
            <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pl-3 pr-2 text-left text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
              <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                <span className="block truncate">{proBrand.name}</span>
              </span>
            </ListboxButton>

            <ListboxOptions
              transition
              className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
            >
              {processor.map((pro) => (
                <ListboxOption
                  key={pro.id}
                  value={pro}
                  className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white data-[focus]:outline-none"
                >
                  <div className="flex items-center">
                    <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                      {pro.name}
                    </span>
                  </div>

                  <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-[&:not([data-selected])]:hidden group-data-[focus]:text-white"></span>
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        </Listbox>
      </div>

      <div ref={proRef} className="w-[30%] ">
        <Listbox value={proSelected} onChange={setProSelected}>
          <Label className="block text-sm/6 font-medium text-gray-900">
            Processor
          </Label>
          <div className="relative mt-2">
            <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pl-3 pr-2 text-left text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
              <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                <span className="block truncate">
                  {proSelected?.name ? proSelected.name : "please Select"}
                </span>
              </span>
            </ListboxButton>

            <ListboxOptions
              transition
              className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
            >
              {proItems.map((pro) => (
                <ListboxOption
                  key={pro.id}
                  value={pro}
                  className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white data-[focus]:outline-none"
                >
                  <div className="flex items-center">
                    <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                      {pro.name}
                    </span>
                  </div>

                  <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-[&:not([data-selected])]:hidden group-data-[focus]:text-white"></span>
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        </Listbox>
      </div>

      <div ref={moRef} className="w-[30%] ">
        <Listbox value={moBrand} onChange={setMoBrand}>
          <Label className="block text-sm/6 font-medium text-gray-900">
            Motherboard Brand
          </Label>
          <div className="relative mt-2">
            <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pl-3 pr-2 text-left text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
              <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                <span className="block truncate">{moBrand.name}</span>
              </span>
            </ListboxButton>

            <ListboxOptions
              transition
              className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
            >
              {motherboards.map((pro) => (
                <ListboxOption
                  key={pro.id}
                  value={pro}
                  className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white data-[focus]:outline-none"
                >
                  <div className="flex items-center">
                    <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                      {pro.name}
                    </span>
                  </div>

                  <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-[&:not([data-selected])]:hidden group-data-[focus]:text-white"></span>
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        </Listbox>
      </div>
      {/* motherboard */}
      <div ref={moRef} className="w-[30%] ">
        <Listbox value={moSelected} onChange={setMoSelected}>
          <Label className="block text-sm/6 font-medium text-gray-900">
            Motherboard
          </Label>
          <div className="relative mt-2">
            <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pl-3 pr-2 text-left text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
              <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                <span className="block truncate">
                  {moSelected.name ? moSelected.name : " please select"}
                </span>
              </span>
            </ListboxButton>

            <ListboxOptions
              transition
              className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
            >
              {moItems?.map((pro) => (
                <ListboxOption
                  key={pro.id}
                  value={pro}
                  className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white data-[focus]:outline-none"
                >
                  <div className="flex items-center">
                    <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                      {pro.name}
                    </span>
                  </div>

                  <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-[&:not([data-selected])]:hidden group-data-[focus]:text-white"></span>
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        </Listbox>
      </div>
    </div>
  );
};

export default test;
