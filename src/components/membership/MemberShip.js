import React from "react";
import Title from "../contact/Title";
import { membership, spa } from "../../assets/index";

const MemberShip = () => {
  return (
    <div className="w-full h-auto bg-slate-950 text-lightText px-4">
      <div className="max-w-screen-xl mx-auto">
        <section
          id="brands"
          className="w-full py-20 lgl:py-20 lgl:pb-28 border-b-[1px] border-b-white"
        >
          <div className="flex justify-center items-center text-center">
            <Title title="packages" des="Our MemberShip" />
          </div>

          <div className="mb-6 lgl:m-6 p-2 lgl:p-6 bg-gradient-to-r from-gol to-slate-900 rounded font-bold text-black font-lib cursor-default">
            MEMBERSHIP PACKAGES
          </div>

          <div className="lgl:flex">
            <div className="lgl:text-base text-xs  lgl:w-2/3">
              <div className="bg-gradient-to-r from-fuchsia-950 to-gol rounded m-0 lgl:m-6">
                <div className="flex flex-col">
                  <table className="text-black font-lib">
                    <thead>
                      <tr className="border border-solid border-l-0 border-r-0">
                        <th className=" py-2 lgl:py-3">You Pay</th>
                        <th className=" py-2 lgl:py-3">We Add</th>
                        <th className=" py-2 lgl:py-3">You Get</th>
                        <th className=" py-2 lgl:py-3">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-center">
                        <th className="py-3">
                          Rs. 5000
                        </th>
                        <td className="py-3">
                          Rs. 2000
                        </td>
                        <td className="py-3">
                        Rs. 7000
                        </td>
                        <td className="py-3">
                          1 Year
                        </td>
                      </tr>
                      <tr className="text-center">
                        <th className="py-3">
                        Rs. 10000
                        </th>
                        <td className="py-3">
                        Rs. 5000
                        </td>
                        <td className="py-3">
                        Rs. 15000
                        </td>
                        <td className="py-3">
                          1 Year
                        </td>
                      </tr>
                      <tr className="text-center">
                        <th className="py-3">
                        Rs. 15000
                        </th>
                        <td className="py-3">
                        Rs. 8000
                        </td>
                        <td className="py-3">
                        Rs. 23000
                        </td>
                        <td className="py-3">
                          1 Year
                        </td>
                      </tr>
                      <tr className="text-center">
                        <th className="py-3">
                        Rs. 25000
                        </th>
                        <td className="py-3">
                        Rs. 15000
                        </td>
                        <td className="py-3">
                        Rs. 40000
                        </td>
                        <td className="py-3">
                          1 Year
                        </td>
                      </tr>
                      <tr className="text-center">
                        <th className="py-3">
                        Rs. 50000
                        </th>
                        <td className="py-3">
                        Rs. 35000
                        </td>
                        <td className="py-3">
                        Rs. 85000
                        </td>
                        <td className="py-3">
                          1 Year
                        </td>
                      </tr>
                      <tr className="text-center">
                        <th className="py-3">
                        Rs. 100000
                        </th>
                        <td className="py-3">
                        Rs. 75000
                        </td>
                        <td className="py-3">
                        Rs. 175000
                        </td>
                        <td className="py-3">
                          1 Year
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="bg-gol rounded-full font-bold text-black text-center m-0 lgl:m-6 p-2 lgl:p-5 mt-10 cursor-pointer hover:text-white hover:bg-designColor uppercase text-xl"
              onClick={()=> window.open("https://wa.me/919803922728?","_blank","noopener noreferrer")}>Buy Membership Now</div>
            </div>
            <div className="lgl:w-1/3 flex justify-center">
              <img
                src={membership}
                alt="Membership"
                className="mt-6 m-0 sml:h-52 lgl:m-6 xl:h-4/6 lgl:h-3/4"
              />
            </div>
          </div>

          <div className="mb-6 mt-6 lgl:m-6 p-2 lgl:p-6 bg-gradient-to-r from-gol to-slate-900 rounded font-bold text-black font-lib cursor-default">
            MASSAGE PACKAGES (for Women Only)
          </div>


          <div className="lgl:flex">
          <div className="lgl:w-1/3 ">
            <img
              src={spa}
              alt="Spa Image"
              className="m-0 lgl:m-6 pr-0 lgl:pr-12 xl:h-5/6 lgl:h-3/4"
            />
          </div>
          <div className="lgl:text-base text-xs lgl:w-2/3">
            <div className="bg-gradient-to-r from-fuchsia-950 to-gol rounded m-0 lgl:m-6 mt-6">
              <div className="flex flex-col">
                <table className="text-black font-lib">
                  <thead>
                    <tr className="border border-solid border-l-0 border-r-0">
                      <th className="px-6 py-3">Massage Types</th>
                      <th className="px-6 py-3">Number Of Massages</th>
                      <th className="px-6 py-3">You Pay</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-center">
                      <th className="py-3">
                        Head Massages
                      </th>
                      <td className="py-3">
                        Five Massages
                      </td>
                      <td className="py-3">
                      Rs. 2500
                      </td>
                    </tr>
                    <tr className="text-center">
                      <th className="py-3">
                        Foot Massages
                      </th>
                      <td className="py-3">
                        Five Massages
                      </td>
                      <td className="py-3">
                      Rs. 2500
                      </td>
                    </tr>
                    <tr className="text-center">
                      <th className="py-3">
                        Body Massages
                      </th>
                      <td className="py-3">
                        Five Massages
                      </td>
                      <td className="py-3">
                      Rs. 10000
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-gol rounded-full font-bold text-black text-center lgl:m-6 p-2 lgl:p-5 mt-10 cursor-pointer hover:text-white hover:bg-designColor uppercase text-lg lgl:text-xl"
            onClick={()=> window.open("https://wa.me/919803922728?","_blank","noopener noreferrer")}>Buy Massage Packages Now</div>
          </div>
        </div>
        </section>
      </div>
    </div>
  );
};

export default MemberShip;
