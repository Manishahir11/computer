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
import { GPU } from "@/Data/graphicCard";
import { motherboards } from "@/Data/motherboard.js";
import { SMPS } from "@/Data/powerSupply.js";
import { internalSSD } from "@/Data/internalSSD";
import { HddSdd } from "@/Data/storage";
import { RAMS } from "@/Data/rams";
import { coolers } from "@/Data/coolers";
import { wifiAndBt } from "@/Data/wifi";
import { CasFans } from "@/Data/caseFans";
import { system } from "@/Data/os";

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
  const [gpuBrand, setGpuBrand] = useState(GPU[0]);
  const [smpsBrand, setSmpsBrand] = useState(SMPS[0]);
  const [ssdBrand, setSsdBrand] = useState(internalSSD[0]);
  const [esdBrand, setEsdBrand] = useState(HddSdd[0]);
  const [ramBrand, setRamBrand] = useState(RAMS[0]);
  const [coolBrand, setCoolBrand] = useState(coolers[0]);
  const [wifi, setWifi] = useState(wifiAndBt[0]);
  const [fans, setFans] = useState(CasFans[0]);
  const [os, setOs] = useState(system[0]);

  // cabinet
  const [cabItems, setCabItems] = useState([]);
  const [cabSelected, setCabSelected] = useState([]);
  // cpu
  const [proItems, setProItems] = useState([]);
  const [proSelected, setProSelected] = useState(null);
  // motherboards
  const [moItems, setMoItems] = useState([]);
  const [moSelected, setMoSelected] = useState([]);

  // GPU
  const [gpuItems, setGpuItems] = useState([]);
  const [gpuSelected, setGpuSelected] = useState([]);

  // SMPS
  const [smpItems, setSmpItems] = useState([]);
  const [smpSelected, setSmpSelected] = useState([]);

  // internal SSD
  const [iSddItems, setISsdItems] = useState([]);
  const [iSddSelected, setISsdSelected] = useState([]);

    // External SSD
    const [eSddItems, setESsdItems] = useState([]);
    const [eSddSelected, setESddSelected] = useState([]);
    const [exSddItems, setExSsdItems] = useState([]);
    const [exSddSelected, setExSddSelected] = useState([]);
    // RAM
    const [ramItems, setRamItems] = useState([]);
    const [ramSelected, setRamSelected] = useState([]);
      // RAM
      const [coolItems, setCoolItems] = useState([]);
      const [coolSelected, setCoolSelected] = useState([]);
       const [coolerItems, setCoolerItems] = useState([]);
      const [coolerSelected, setCoolerSelected] = useState([]);

      //  cas fans
      const [casItems, setCasItems] = useState([]);
      const [casSelected, setCasSelected] = useState([]);


  // cpu
  useEffect(() => {
    return (
      setProItems(processor.find((pr) => pr.name === proBrand.name).Item),
      setProSelected(
        processor.find((pr) => pr.name === proBrand.name).Item.name
      )
      // setSocket( processor.find((pr) => pr.name === proBrand.name).Item.category)
    );
  }, [proBrand]);
  //  cabinet
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
  // motherboards
  useEffect(() => {
    var socketItem = proSelected?.category ? proSelected?.category : "";
    // console.log(socketItem)
    let moItem = motherboards?.find((mo) => mo.name === moBrand.name).Item;

    if (socketItem === "LGA1151") {
      return setMoItems(moItem.LGA1151);
    } else if (socketItem === "LGA1200") {
      return setMoItems(moItem.LGA1200);
    } else {
      return setMoItems([]);
    }
  }, [proSelected, moBrand]);
  // GPU
  useEffect(() => {
    return (
      setGpuItems(GPU.find((gp) => gp.name === gpuBrand.name).Item),
      setGpuSelected(GPU.find((gp) => gp.name === gpuBrand.name).Item.name)
    );
  }, [gpuBrand]);

  // SMPS
  useEffect(() => {
    return (
      setSmpItems(SMPS.find((sm) => sm.name === smpsBrand.name).Item),
      setSmpSelected(SMPS.find((sm) => sm.name === smpsBrand.name).Item.name)
    );
  }, [smpsBrand]);

    // internal ssd
    useEffect(() => {
      return (
        setISsdItems(internalSSD.find((im) => im.name === ssdBrand.name).Item),
        setISsdSelected(internalSSD.find((im) => im.name === ssdBrand.name).Item.name)
      );
    }, [ssdBrand]);

     // External ssd & hdd
     useEffect(() => {

       return(setESsdItems(HddSdd?.find((es) => es.name === esdBrand.name).Item),
              setESddSelected(HddSdd?.find((es) => es.name === esdBrand.name).Item.name)
      )
    }, [esdBrand]);
    useEffect(() => {

      return(setExSsdItems(eSddSelected?.Item)),
      setExSddSelected(eSddSelected?.Item?.name)
     
   }, [eSddSelected]);

    // RAMS
    useEffect(() =>{
      return (
        setRamItems(RAMS.find((ra) => ra.name === ramBrand.name).Item),
        setRamSelected(RAMS.find((ra) => ra.name === ramBrand.name).Item.name)
        );
    },[ramBrand])

    useEffect(() => {
      var socketItem = proSelected?.category ? proSelected?.category : "";
      // console.log(socketItem)
      let rmItem = RAMS?.find((mo) => mo.name === ramBrand.name).Item;
  
      if (socketItem === "LGA1151") {
        return setRamItems(rmItem.DDR4);
      } else if (socketItem === "LGA1200") {
        return setRamItems(rmItem.DDR4);
      } else {
        return setRamItems([]);
      }
    }, [proSelected, ramBrand]);

    // cooler 

    useEffect(() => {

      return(setCoolItems(coolers?.find((co) => co.name === coolBrand.name).Item),
             setCoolSelected(coolers?.find((co) => co.name === coolBrand.name).Item.name)
     )
   }, [coolBrand]);
   useEffect(() => {

     return(setCoolerItems(coolSelected?.Item)),
     setCoolerSelected(coolSelected?.Item?.name)
    
  }, [coolSelected]);

  // cas fans 
  useEffect(()=>{
    return(
      setCasItems(CasFans.find((cf) => cf.name === fans.name).Item),
      setCasSelected(CasFans.find((cf) => cf.name === fans.name).Item.name)
      )
  },[fans])


   


  const cabBrandRef = useRef();
  const cabRef = useRef();
  const proRef = useRef();
  const moRef = useRef();
  // console.log("eSddItems", eSddItems);
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
    <form className="form flex flex-col gap-4 ">
       <div className="grid grid-cols-2 justify-around ">
      <div className="w-[30%]" >
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

      {/* Graphics Card brand */}
      <div ref={moRef} className="w-[30%] ">
        <Listbox value={gpuBrand} onChange={setGpuBrand}>
          <Label className="block text-sm/6 font-medium text-gray-900">
            Graphics Card
          </Label>
          <div className="relative mt-2">
            <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pl-3 pr-2 text-left text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
              <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                <span className="block truncate">{gpuBrand.name}</span>
              </span>
            </ListboxButton>

            <ListboxOptions
              transition
              className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
            >
              {GPU.map((pro) => (
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
      {/* Graphics Card  */}
      <div ref={moRef} className="w-[30%] ">
        <Listbox value={gpuSelected} onChange={setGpuSelected}>
          <Label className="block text-sm/6 font-medium text-gray-900">
            {gpuBrand?.name} Graphics card
          </Label>
          <div className="relative mt-2">
            <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pl-3 pr-2 text-left text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
              <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                <span className="block truncate">
                  {gpuSelected?.name ? gpuSelected.name : " please select"}
                </span>
              </span>
            </ListboxButton>

            <ListboxOptions
              transition
              className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
            >
              {gpuItems?.map((pro) => (
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

      {/* SMPS brand */}
      <div ref={moRef} className="w-[30%] ">
        <Listbox value={smpsBrand} onChange={setSmpsBrand}>
          <Label className="block text-sm/6 font-medium text-gray-900">
            Power Supply
          </Label>
          <div className="relative mt-2">
            <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pl-3 pr-2 text-left text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
              <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                <span className="block truncate">{smpsBrand.name}</span>
              </span>
            </ListboxButton>

            <ListboxOptions
              transition
              className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
            >
              {SMPS.map((pro) => (
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

      {/* SMPS  */}
      <div ref={moRef} className="w-[30%] ">
        <Listbox value={smpSelected} onChange={setSmpSelected}>
          <Label className="block text-sm/6 font-medium text-gray-900">
            {smpsBrand?.name} Power Supply
          </Label>
          <div className="relative mt-2">
            <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pl-3 pr-2 text-left text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
              <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                <span className="block truncate">
                  {smpSelected?.name ? smpSelected.name : " please select"}
                </span>
              </span>
            </ListboxButton>

            <ListboxOptions
              transition
              className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
            >
              {smpItems?.map((pro) => (
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

      {/* internal SSD  brand */}
      <div ref={moRef} className="w-[30%] ">
        <Listbox value={ssdBrand} onChange={setSsdBrand}>
          <Label className="block text-sm/6 font-medium text-gray-900">
            Internal Storage
          </Label>
          <div className="relative mt-2">
            <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pl-3 pr-2 text-left text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
              <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                <span className="block truncate">{ssdBrand.name}</span>
              </span>
            </ListboxButton>

            <ListboxOptions
              transition
              className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
            >
              {internalSSD.map((pro) => (
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
      {/* internal SSD */}
      <div ref={moRef} className="w-[30%] ">
        <Listbox value={iSddSelected} onChange={setISsdSelected}>
          <Label className="block text-sm/6 font-medium text-gray-900">
            {ssdBrand?.name} SSD
          </Label>
          <div className="relative mt-2">
            <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pl-3 pr-2 text-left text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
              <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                <span className="block truncate">
                  {iSddSelected?.name ? iSddSelected.name : " please select"}
                </span>
              </span>
            </ListboxButton>

            <ListboxOptions
              transition
              className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
            >
              {iSddItems?.map((pro) => (
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

      {/* External SSD  brand */}
      <div ref={moRef} className="w-[30%] ">
        <Listbox value={esdBrand} onChange={setEsdBrand}>
          <Label className="block text-sm/6 font-medium text-gray-900">
            External Storage
          </Label>
          <div className="relative mt-2">
            <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pl-3 pr-2 text-left text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
              <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                <span className="block truncate">{esdBrand.name}</span>
              </span>
            </ListboxButton>

            <ListboxOptions
              transition
              className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
            >
              {HddSdd.map((pro) => (
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
      {/* external SSD */}
      
      <div ref={moRef} className="w-[30%] ">
        <Listbox value={eSddSelected} onChange={setESddSelected}>
          <Label className="block text-sm/6 font-medium text-gray-900">
            {esdBrand?.name}
          </Label>
          <div className="relative mt-2">
            <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pl-3 pr-2 text-left text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
              <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                <span className="block truncate">
                  {eSddSelected?.name ? eSddSelected.name : " please select"}
                </span>
              </span>
            </ListboxButton>

            <ListboxOptions
              transition
              className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
            >
              {eSddItems?.map((pro) => (
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
        <Listbox value={exSddSelected} onChange={setExSddSelected}>
          <Label className="block text-sm/6 font-medium text-gray-900">
            {eSddSelected?.name} Storage
          </Label>
          <div className="relative mt-2">
            <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pl-3 pr-2 text-left text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
              <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                <span className="block truncate">{exSddSelected?.name ? exSddSelected?.name : "please select"}</span>
              </span>
            </ListboxButton>

            <ListboxOptions
              transition
              className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
            >
              {exSddItems?.map((pro) => (
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

       {/* RAMS brand */}
       <div ref={moRef} className="w-[30%] ">
        <Listbox value={ramBrand} onChange={setRamBrand}>
          <Label className="block text-sm/6 font-medium text-gray-900">
            RAMS
          </Label>
          <div className="relative mt-2">
            <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pl-3 pr-2 text-left text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
              <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                <span className="block truncate">{ramBrand?.name}</span>
              </span>
            </ListboxButton>

            <ListboxOptions
              transition
              className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
            >
              {RAMS.map((pro) => (
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

      {/* RAMS  */}
      <div ref={moRef} className="w-[30%] ">
        <Listbox value={ramSelected} onChange={setRamSelected}>
          <Label className="block text-sm/6 font-medium text-gray-900">
            {ramBrand?.name} RAM
          </Label>
          <div className="relative mt-2">
            <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pl-3 pr-2 text-left text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
              <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                <span className="block truncate">
                  {ramSelected?.name ? ramSelected.name : " please select"}
                </span>
              </span>
            </ListboxButton>

            <ListboxOptions
              transition
              className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
            >
              {ramItems?.map((pro) => (
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

           {/* Coolers  brand */}
           <div ref={moRef} className="w-[30%] ">
        <Listbox value={coolBrand} onChange={setCoolBrand}>
          <Label className="block text-sm/6 font-medium text-gray-900">
            Cooler
          </Label>
          <div className="relative mt-2">
            <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pl-3 pr-2 text-left text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
              <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                <span className="block truncate">{coolBrand.name}</span>
              </span>
            </ListboxButton>

            <ListboxOptions
              transition
              className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
            >
              {coolers.map((pro) => (
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
      {/* Coolers */}
      
      <div ref={moRef} className="w-[30%] ">
        <Listbox value={coolSelected} onChange={setCoolSelected}>
          <Label className="block text-sm/6 font-medium text-gray-900">
            {coolBrand?.name} 
          </Label>
          <div className="relative mt-2">
            <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pl-3 pr-2 text-left text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
              <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                <span className="block truncate">
                  {coolSelected?.name ? coolSelected.name : " please select"}
                </span>
              </span>
            </ListboxButton>

            <ListboxOptions
              transition
              className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
            >
              {coolItems?.map((pro) => (
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
        <Listbox value={coolerSelected} onChange={setCoolerSelected}>
          <Label className="block text-sm/6 font-medium text-gray-900">
            {coolSelected?.name} 
          </Label>
          <div className="relative mt-2">
            <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pl-3 pr-2 text-left text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
              <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                <span className="block truncate">{coolerSelected?.name ? coolerSelected?.name : "please select"}</span>
              </span>
            </ListboxButton>

            <ListboxOptions
              transition
              className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
            >
              {coolerItems?.map((pro) => (
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

      {/* Wi-Fi  */}
      <div ref={moRef} className="w-[30%] ">
        <Listbox value={wifi} onChange={setWifi}>
          <Label className="block text-sm/6 font-medium text-gray-900">
            Wi-Fi
          </Label>
          <div className="relative mt-2">
            <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pl-3 pr-2 text-left text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
              <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                <span className="block truncate">{wifi.name}</span>
              </span>
            </ListboxButton>

            <ListboxOptions
              transition
              className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
            >
              {wifiAndBt.map((pro) => (
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

 {/* Cas Fans  */}
 <div ref={moRef} className="w-[30%] ">
        <Listbox value={fans} onChange={setFans}>
          <Label className="block text-sm/6 font-medium text-gray-900">
            Cas Fans
          </Label>
          <div className="relative mt-2">
            <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pl-3 pr-2 text-left text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
              <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                <span className="block truncate">{fans.name}</span>
              </span>
            </ListboxButton>

            <ListboxOptions
              transition
              className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
            >
              {CasFans.map((pro) => (
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
        <Listbox value={casSelected} onChange={setCasSelected}>
          <Label className="block text-sm/6 font-medium text-gray-900">
            {fans?.name} fans 
          </Label>
          <div className="relative mt-2">
            <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pl-3 pr-2 text-left text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
              <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                <span className="block truncate">
                  {casSelected?.name ? casSelected.name : " please select"}
                </span>
              </span>
            </ListboxButton>

            <ListboxOptions
              transition
              className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
            >
              {casItems?.map((pro) => (
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

       {/* Operating System */}
 <div ref={moRef} className="w-[30%] ">
        <Listbox value={os} onChange={setOs}>
          <Label className="block text-sm/6 font-medium text-gray-900">
            Operating System
          </Label>
          <div className="relative mt-2">
            <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pl-3 pr-2 text-left text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
              <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                <span className="block truncate">{os.name}</span>
              </span>
            </ListboxButton>

            <ListboxOptions
              transition
              className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
            >
              {system.map((pro) => (
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
        <button className="bg-Primary text-2xl text-white p-2 rounded-2xl text-center w-96">Download PDF</button>
    </form>
    
  );
};

export default test;
