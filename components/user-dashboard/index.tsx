"use client";
import { useState } from "react";

const UserDashboard = () => {
  const [selected, setSelected] = useState(0);
  const [currentViewName] = useState(["Drafts", "Completed"]);
  const [currentView] = useState(["Drafts", "Completed"]);
  
  return (
    <div className="my-14 xl:my-20">
      <h3 className="font-semibold text-[#292B2F] text-lg mb-10 lg:text-xl xl:text-4xl">
        My Resume
      </h3>

      <div className="w-full text-[#292B2F] font-semibold text-sm flex gap-x-10 pb-5 lg:text-base cursor-pointer border-b border-[#BDBDBD] ">
        {currentViewName.map((view, id) => {
          return (
            <div
              key={id}
              onClick={() => setSelected(id)}
              className={
                selected === id
                  ? " flex gap-x-1 items-center relative ease-in-out duration-300 before:bg-primaryColor before:absolute before:w-full before:rounded-md before:-bottom-[23px] before:h-[3px]"
                  : " flex gap-x-1 items-center "
              }
            >
              <span>{view}</span>
              <span className="text-[#B9BBBE]">1</span>
            </div>
          );
        })}
      </div>

      <div className="mt-12 xl:mt-16">{currentView[selected]}</div>
    </div>
  );
};

export default UserDashboard;
