import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";

function Carousel() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, dragFree: true, align: "start" },
    [Autoplay({ delay: 3000, stopOnInteraction: false }), Fade()]
  );

  return (
    <div className="  overflow-hidden   relative " ref={emblaRef}>
      <div className="flex 0  h-[400px] w-full  ">
        {[
          "https://www.rudraksha-ratna.com/assets/Consultation/astrology-consultation/Astrology-Consultation-main-image.jpg",
          "https://images.news18.com/ibnlive/uploads/2025/01/image-2025-01-0d30784f02d0444df49447ab9649e8dd-16x9.jpg?impolicy=website&width=640&height=360",
          "https://5.imimg.com/data5/HN/SM/MY-7887529/vedic-astrolger-in-canada.jpg",
        ].map((src, i) => (
          <div
            key={i}
            className="flex-[0_0_100%] min-w-0 flex justify-center items-center h-auto "
          >
            <img
              src={src}
              alt={`Slide ${i + 1}`}
              className="w-[100%] h-[100%]  rounded "
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center p-4 w-full h-full ">
        <h1 className="text-2xl text-center  w-auto bg-red-500 py-1 px-2 rounded">
          Best Astrological Guruji
        </h1>
      </div>
    </div>
  );
}
export default Carousel;
