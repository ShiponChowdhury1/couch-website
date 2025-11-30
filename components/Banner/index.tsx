import Image from "next/image";
import bannerImage from '../../public/categories/banner.png';
export default function Banner() {
  return (
    <section className="w-full text-white" style={{ backgroundColor: '#254EA4', height: '706px' }}>
      <div className="mx-auto px-6 py-16 flex flex-col-reverse gap-8 md:flex-row md:items-center" style={{ maxWidth: '1440px', height: '100%' }}>
        <div className="md:w-1/2">
          <h2 
            className="font-bold" 
            style={{ 
              width: '631px', 
              height: '192px', 
              fontSize: '56px', 
              lineHeight: '64px', 
              letterSpacing: '-1.1%', 
              color: '#FFFFFF',
              fontWeight: 700
            }}
          >
            Affordable &amp; Sustainable Furniture for Students
          </h2>
          <p 
            className="mt-4" 
            style={{ 
              width: '631px', 
              height: '87px', 
              fontSize: '18px', 
              lineHeight: '160%', 
              letterSpacing: '-1.1%', 
              color: '#E6E6E6',
              fontWeight: 400
            }}
          >
            Couch makes it easy for students to buy and rent affordable, high-quality second-hand furniture. Our mission is to create a sustainable, budget-friendly solution for furnishing student spaces effortlessly.
          </p>
          <div className="mt-6 flex gap-4">
            <a className="rounded-md bg-amber-400 px-4 py-2 font-medium text-zinc-900 shadow-sm" href="#">Shop Now</a>
            <a className="rounded-md border border-white/30 px-4 py-2 text-white" href="#">Sell Your Furniture</a>
          </div>
          <div className="flex gap-12 mt-14">
              <div>
                <h3 className="font-poppins text-[#FFFFFF] font-semibold text-[32px] leading-none tracking-[-0.011em]">25K</h3>
                <p className="text-[18px] text-[#E6E6E6] font-normal">Unique Styles</p>
              </div>
              <div>
                <h3 className="font-poppins text-[#FFFFFF] font-semibold text-[32px] leading-none tracking-[-0.011em]">20K</h3>
                <p className="text-[18px] text-[#E6E6E6] font-normal">Happy Customer</p>
              </div>
              <div>
                <h3 className="font-poppins text-[#FFFFFF] font-semibold text-[32px] leading-none tracking-[-0.011em]">100</h3>
                <p className="text-[18px] text-[#E6E6E6] font-normal">Certified Outlets</p>
              </div>
           </div>
        </div>
           
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="relative" style={{ width: '731px', height: '593px' }}>
            <Image src={bannerImage} alt="chair" fill style={{objectFit: 'contain'}} priority />
          </div>
        </div>
      </div>
    </section>
  );
}
