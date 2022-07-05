import Header from "../components/Header/Header";

import PngCoffee from "../assets/images/rocket-coffee.png";
import WebpCoffee from "../assets/images/rocket-coffee.webp";
import Image from "../components/Image/Image";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen h-full justify-between">
      <Header />
      <div className="flex flex-col items-center px-6 lg:px-40 mt-20 lg:mt-14 gap-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-10 sm:leading-tight md:leading-normal text-center block lg:hidden">
          O café que fará seu código decolar para o próximo nível.
        </h1>

        <button className="block lg:hidden rounded-md border border-violet-500 py-3 px-10 sm:py-5 sm:px-12 md:py-7 md:px-14 font-extrabold text-xs sm:text-2xl md:text-4xl uppercase focus:outline-none hover:bg-violet-500 hover:text-gray-200 transition-colors">
          Pegar meu café &gt;
        </button>

        <h1 className="flex flex-col text-center text-4xl sm:text-5xl md:text-7xl font-bold leading-[68px] sm:leading-tight md:leading-normal lg:leading-[109px]">
          Great Coffee
          <strong className="text-shadow-shadow text-neutral-900 mb-4 lg:mb-0">
            &lt;Great Code/&gt;
          </strong>
        </h1>
      </div>

      <Image webp={WebpCoffee} fallback={PngCoffee} alt="Rocket Coffe" />
    </div>
  );
};

export default Home;
