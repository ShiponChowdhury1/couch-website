"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sofaIcon from '../../public/categories/sofaIcon.png';
export default function ShopByCategories() {
  const categories = [
    { id: 1, title: 'Sofa', img: '/cat-sofa.png' },
    { id: 2, title: 'Table', img: '/cat-table.png' },
    { id: 3, title: 'Dining Chair', img: '/cat-chair.png' },
    { id: 4, title: 'Bed', img: '/cat-bed.png' },
    { id: 5, title: 'Desk', img: '/cat-desk.png' },
    { id: 6, title: 'Storage', img: '/cat-storage.png' },
    { id: 7, title: 'Lamp', img: '/cat-lamp.png' },
    { id: 8, title: 'Bookshelf', img: '/cat-bookshelf.png' },
  ];

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
   <section className="mx-auto max-w-7xl px-6 py-12 bg-[#F5F3EF]">
  <div className="flex items-start gap-32"> 
    {/* LEFT SIDE */}
    <div className="w-[292px] h-[272px]">
      <div>
        <h3 className="text-3xl font-bold">Shop</h3>
        <h3 className="text-3xl font-bold">by categories</h3>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <div className="w-12 h-12 rounded-full flex items-center justify-center">
          <Image src={sofaIcon} alt="Sofa" width={80} height={80} />
        </div>
        <div>
          <div className="text-sm text-zinc-600">+200 Unique</div>
          <div className="text-sm font-semibold">Products</div>
        </div>
      </div>

      <div className="mt-6">
        <a href="/shop" className="text-zinc-700 hover:text-zinc-900 font-medium">
          ALL CATEGORIES <span>→</span>
        </a>
      </div>
    </div>

    {/* RIGHT SIDE — SLIDER */}
    <div className="w-[988px] h-[320px]">
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
