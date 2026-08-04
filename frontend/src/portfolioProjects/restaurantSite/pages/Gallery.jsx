import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=900",
  "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=900",
  "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=900",
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=900",
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=900",
];

function Gallery() {
  return (
    <section id="gallery" className="bg-[#f8f4ee] py-28">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="luxury-font text-6xl text-center text-[#3b2b1f]">
          Food Gallery
        </h2>

        <p className="text-center text-gray-600 mt-5 text-lg">
  Every dish tells a story of flavour and elegance.
</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">

  {images.map((img, index) => (

            <motion.div
  whileHover={{ scale: 1.03 }}
  key={index}
  className="relative overflow-hidden rounded-[35px]"
>

  <img loading="lazy"
    src={img}
    alt=""
    loading="lazy"
    className="h-64 md:h-72 lg:h-80 w-full object-cover hover:scale-110 hover:brightness-110 duration-700"
/>

  <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 duration-500 flex items-center justify-center">

    <span className="bg-white px-6 py-3 rounded-full text-[#8b5e34] font-semibold">
      Explore Dish
    </span>

  </div>

</motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Gallery;