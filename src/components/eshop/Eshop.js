import React from 'react'
import Title from '../contact/Title';
import { eshop1, eshop2, eshop3, eshop4, eshop5, eshop6 } from "../../assets/index";
import EshopCard from './EshopCard';

const Eshop = () => {
  return (
    <div className="w-full h-auto bg-slate-950 text-lightText px-4">
      <div className="max-w-screen-xl mx-auto">
        <section
          id="contact"
          className="w-full py-16 lgl:py-20 lgl:pb-28 border-b-[1px] border-b-white"
        >
          <div className="flex justify-center items-center text-center">
            <Title title="E-SHOP" des="Product List" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
            <EshopCard
              title="Diamond Luxury Kit"
              des="O3+ Diamond Luxury System Facial Kit For Bridal Makeup And Ultra Glow Treatments - Perfect For All Skin Type To Increase Shine And Glow On Face."
              src={eshop1}
              chatLink="https://wa.me/919803922728?"
              text="hello"
            />
            <EshopCard
              title="Moisture Kick Shampoo"
              des="Schwarzkopf Professional Bonacure Moisture Kick Shampoo with Glycerol | For Dry Hair."
              src={eshop2}
              chatLink="https://wa.me/919803922728?"
              text=""
            />
            <EshopCard
              title="Time Restore Shampoo"
              des="Schwarzkopf Professional Bonacure Time Restore Shampoo with Q10+ | For Mature Hair - 250 ml"
              src={eshop3}
              chatLink="https://wa.me/919803922728?"
              text=""
            />
            <EshopCard
              title="Repair Rescue Shampoo Arginine"
              des="Schwarzkopf Professional Bc Peptide Repair Rescue Micellar Shampoo, Red, 250 Ml & Professional Bc Peptide Repair Rescue Sealed Ends, Red, 75 Ml."
              src={eshop4}
              chattLink="https://wa.me/919803922728?"
              text=""
            />
            <EshopCard
              title="Root Activating Shampoo"
              des="Schwarzkopf Professional Boncaure Scalp Genesis Root Activating Shampoo(200ml). BC Scalp Genesis Root Activating Shampoo with Carnitine Tartrate, Taurine and Echinacea."
              src={eshop5}
              chatLink="https://wa.me/919803922728?"
              text=""
            />
            <EshopCard
              title="Frizz Away Shampoo"
              des="Schwarzkopf Professional Bonacure Frizz Away Shampoo with Babassu Oil | 250 ml. The Keratin treatment protects hair cell provide nourishment for a healthy and protective outer layer of hair."
              src={eshop6}
              chattLink="https://wa.me/919803922728?"
              text=""
            />
          </div>

        </section>
      </div>
    </div>
  )
}

export default Eshop;


