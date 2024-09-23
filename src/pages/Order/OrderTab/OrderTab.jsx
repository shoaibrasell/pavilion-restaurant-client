// import React from "react";
// import FoodCard from "../../../components/FoodCard/FoodCard";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination } from "swiper/modules";

// const OrderTab = ({ items }) => {
//   const pagination = {
//     clickable: true,
//     renderBullet: function (index, className) {
//       return '<span class="' + className + '">' + (index + 1) + "</span>";
//     },
//   };
//   return (
//     <div>
//       <Swiper
//         pagination={pagination}
//         modules={[Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <div className="grid lg:grid-cols-3 gap-10">
//             {items.map((item) => (
//               <FoodCard key={item._id} item={item}></FoodCard>
//             ))}
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default OrderTab;
import React from "react";
import FoodCard from "../../../components/FoodCard/FoodCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const OrderTab = ({ items }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  // Function to chunk the items array into groups of 6
  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  // Create an array of chunks with 6 items per chunk
  const chunkedItems = chunkArray(items, 6);

  return (
    <div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        {chunkedItems.map((chunk, index) => (
          <SwiperSlide key={index}>
            <div className="grid lg:grid-cols-3 gap-8">
              {chunk.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OrderTab;
