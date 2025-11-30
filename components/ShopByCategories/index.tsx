"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sofaIcon from '../../public/categories/sofaIcon.png';
import { categories } from "@/lib/data/categories";

export default function ShopByCategories() {


  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
   <section className="mx-auto max-w-7xl px-6 py-12 bg-[#FFF8ED]">
  <div className="flex items-start gap-32"> 
    {/* LEFT SIDE */}
    <div className="w-[292px] h-[272px]">
      <div>
        <h3 className="text-3xl font-bold">Shop</h3>
        <h3 className="text-3xl font-bold">by categories</h3>
      </div>

      <div className="flex items-center gap-4 mt-4">
        <div className="w-12 h-12 rounded-full flex items-center justify-center">
          <Image src={sofaIcon} alt="Sofa" width={80} height={80} />
        </div>
        <div>
          <div className="text-sm text-zinc-600">+200 Unique</div>
          <div className="text-sm font-semibold">Products</div>
        </div>
      </div>

      <div className="mt-6">
        <a href="/shop" className="text-zinc-700 hover:text-zinc-900 font-medium ">
          <span className="underline">ALL CATEGORIES</span> <span>→</span>
        </a>
      </div>
    </div>

    {/* RIGHT SIDE — SLIDER */}
    <div className="w-[988px] h-[320px] category-slider">
      <style dangerouslySetInnerHTML={{__html: `
        .category-slider .slick-prev,
        .category-slider .slick-next {
          width: 52px !important;
          height: 52px !important;
          background-color: #333333 !important;
          border-radius: 66px !important;
          padding: 10px !important;
          z-index: 10 !important;
        }
        .category-slider .slick-prev:before,
        .category-slider .slick-next:before {
          font-size: 20px !important;
          color: #fff !important;
        }
        .category-slider .slick-prev {
          left: -10px !important;
        }
        .category-slider .slick-next {
          right: -8px !important;
        }
      `}} />
      <Slider {...settings}>
        {categories.map((category) => (
          <div key={category.id} className="px-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="h-48 w-full relative mb-4">
                <Image
                  src={category.img}
                  alt={category.title}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="text-center text-lg font-semibold">
                {category.title}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </div>
</section>

  );
}
