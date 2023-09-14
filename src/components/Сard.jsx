import React from "react";
import messageUser from "../assets/messageUser.svg";
import doubleUser from "../assets/doubleUser.svg";
import tripleUser from "../assets/tripleUser.svg";

function Card() {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl p-[16px] mt-[16px] mb-[16px] rounded-lg flex flex-col hover:scale-105 duration-300">
          <img
            src={messageUser}
            alt="Mes-User"
            className="w-[80px] mx-auto mt-[-3rem] "
          />
          <h2 className="text-[24px] font-bold mx-auto py-[32px]">
            Single User
          </h2>
          <p className="mx-auto text-[34px] font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-[8px] border-b mt-[32px] mx-[32px]">
              500 GB Storage
            </p>
            <p className="py-[8px] border-b mx-[32px]">1 Granted User</p>
            <p className="py-[8px] border-b mx-[32px]">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00DF9A] rounded-[6px] mx-auto my-[24px] py-[12px] px-[67px] font-medium">
            Start Trial
          </button>
        </div>
        <div className="w-full bg-[#F3F4F6] shadow-xl p-[16px] md:my-[0px] my-[80px]  rounded-lg flex flex-col hover:scale-105 duration-300">
          <img
            src={doubleUser}
            alt="Mes-User"
            className="w-[80px] mx-auto mt-[-3rem] "
          />
          <h2 className="text-[24px] font-bold mx-auto py-[32px]">
            Single User
          </h2>
          <p className="mx-auto text-[34px] font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-[8px] border-b mt-[32px] mx-[32px]">
              500 GB Storage
            </p>
            <p className="py-[8px] border-b mx-[32px]">1 Granted User</p>
            <p className="py-[8px] border-b mx-[32px]">Send up to 2 GB</p>
          </div>
          <button className="text-[#00DF9A] bg-black rounded-[6px] mx-auto my-[24px] py-[12px] px-[67px] font-medium">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl p-[16px] mt-[16px] mb-[16px] rounded-lg flex flex-col hover:scale-105 duration-300">
          <img
            src={tripleUser}
            alt="Mes-User"
            className="w-[80px] mx-auto mt-[-3rem] "
          />
          <h2 className="text-[24px] font-bold mx-auto py-[32px]">
            Single User
          </h2>
          <p className="mx-auto text-[34px] font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-[8px] border-b mt-[32px] mx-[32px]">
              500 GB Storage
            </p>
            <p className="py-[8px] border-b mx-[32px]">1 Granted User</p>
            <p className="py-[8px] border-b mx-[32px]">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00DF9A] rounded-[6px] mx-auto my-[24px] py-[12px] px-[67px] font-medium">
            Start Trial
          </button>
        </div>
      </div>
    </div>
    // <div className=" mx-auto flex items-center justify-center bg-primary p-8">
    //   <div className="flex flex-row bg-[#FFFFFF] w-[392px] p-[16px] pb-[27px]">
    //     <div className="flex flex-col items-center justify-center">
    //       <div>
    //         <img src={messageUser} alt="" className="w-[80px] h-[60px]" />
    //       </div>
    //       <div>
    //         <p className="text-[24px]">Single User</p>
    //       </div>
    //       <div>
    //         <p className="text-[34px]">$149</p>
    //       </div>
    //       <div className="min-w-[360px] flex flex-col pt-[32px] pl-[32px] pr-[32px]">
    //         <p className="text-[16px] p-[8px] m-auto">500 GB Storage</p>
    //         <hr className="" />
    //         <p className="text-[16px] p-[8px] m-auto">1 Granted User</p>
    //         <hr />
    //         <p className="text-[16px] p-[8px] m-auto">Send up to 2 GB</p>
    //         <hr />
    //       </div>
    //       <div className="pt-[24px] pb-[24px] pl-[80px] pr-[80px]">
    //         <button className=" bg-[#00DF9A] rounded-[6px] text-sky-[#000000] pt-[12px] pb-[12px] pl-[66.91px] pr-[66.91px]">
    //           Start Trial
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="bg-[#FFFFFF] w-[392px] p-[16px] pb-[27px] ml-[32px]">
    //     <div className="flex flex-col items-center justify-center ">
    //       <div>
    //         <img src={messageUser} alt="" className="w-[80px] h-[60px]" />
    //       </div>
    //       <div>
    //         <p className="text-[24px]">Single User</p>
    //       </div>
    //       <div>
    //         <p className="text-[34px]">$149</p>
    //       </div>
    //       <div className="min-w-[360px] flex flex-col pt-[32px] pl-[32px] pr-[32px]">
    //         <p className="text-[16px] p-[8px] m-auto">500 GB Storage</p>
    //         <hr className="" />
    //         <p className="text-[16px] p-[8px] m-auto">1 Granted User</p>
    //         <hr />
    //         <p className="text-[16px] p-[8px] m-auto">Send up to 2 GB</p>
    //         <hr />
    //       </div>
    //       <div className="pt-[24px] pb-[24px] pl-[80px] pr-[80px]">
    //         <button className=" bg-[#00DF9A] rounded-[6px] text-sky-[#000000] pt-[12px] pb-[12px] pl-[66.91px] pr-[66.91px]">
    //           Start Trial
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="bg-[#FFFFFF] w-[392px] p-[16px] pb-[27px] ml-[32px]">
    //     <div className="flex flex-col items-center justify-center">
    //       <div>
    //         <img src={messageUser} alt="" className="w-[80px] h-[60px]" />
    //       </div>
    //       <div>
    //         <p className="text-[24px]">Single User</p>
    //       </div>
    //       <div>
    //         <p className="text-[34px]">$149</p>
    //       </div>
    //       <div className="min-w-[360px] flex flex-col pt-[32px] pl-[32px] pr-[32px]">
    //         <p className="text-[16px] p-[8px] m-auto">500 GB Storage</p>
    //         <hr className="" />
    //         <p className="text-[16px] p-[8px] m-auto">1 Granted User</p>
    //         <hr />
    //         <p className="text-[16px] p-[8px] m-auto">Send up to 2 GB</p>
    //         <hr />
    //       </div>
    //       <div className="pt-[24px] pb-[24px] pl-[80px] pr-[80px]">
    //         <button className=" bg-[#00DF9A] rounded-[6px] text-sky-[#000000] pt-[12px] pb-[12px] pl-[66.91px] pr-[66.91px]">
    //           Start Trial
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Card;
