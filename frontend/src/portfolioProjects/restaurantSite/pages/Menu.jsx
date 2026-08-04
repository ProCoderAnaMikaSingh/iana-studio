import { motion } from "framer-motion";

const menu = [
  {
    name: "Butter Chicken",
    price: "₹499",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800",
    tag: "Best Seller",
  },
  {
    name: "Paneer Tikka",
    price: "₹349",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800",
    tag: "Popular",
  },
  {
    name: "Veg Biryani",
    price: "₹299",
    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=800",
    tag: "Chef Choice",
  },
  {
    name: "Pizza",
    price: "₹599",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800",
    tag: "Hot",
  },
  {
    name: "Pasta Alfredo",
    price: "₹399",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800",
    tag: "Italian",
  },
  {
    name: "Tandoori Chicken",
    price: "₹649",
    image: "https://images.unsplash.com/photo-1604908176997-431221d9d5e8?w=800",
    tag: "Chef Special",
  },
  {
    name: "Chocolate Lava Cake",
    price: "₹249",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800",
    tag: "Dessert",
  },
  {
    name: "Cold Coffee",
    price: "₹199",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800",
    tag: "Beverage",
  },
];

function Menu() {
  return (
    <section id="menu" className="bg-[#fffaf3] py-24">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center text-[#3b2b1f]">
          Signature Menu
        </h2>

        <p className="text-center text-gray-500 mt-5">
          Taste our chef's favourite dishes.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-20">

          {menu.map((item, index) => (

            <motion.div
              whileHover={{ y: -8 }}
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-xl flex flex-col md:flex-row"
            >

              <img loading="lazy"
                src={item.image}
                alt={item.name}
                className="w-full md:w-56 h-64 md:h-56 object-cover hover:scale-110 hover:brightness-110 duration-500"
              />

              <div className="p-8 flex-1">

                <span className="bg-[#8b5e34] text-white px-4 py-1 rounded-full text-sm">
                  {item.tag}
                </span>

                <h3 className="text-3xl font-bold mt-5 text-[#3b2b1f]">
                  {item.name}
                </h3>

                <p className="text-[#8b5e34] text-2xl font-bold mt-5">
                  {item.price}
                </p>

                <button className="mt-8 bg-[#8b5e34] text-white px-8 py-3 rounded-full hover:bg-[#6f4724] duration-300">
                  Order Now
                </button>

                <p className="text-sm text-gray-500 mt-3">
  Freshly Prepared • 20-25 min
</p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Menu;