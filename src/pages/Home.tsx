import banner from "../assets/images/banner2.png";
import iphone13promax from "../assets/images/iPhone-13-Pro-Max-silver-1000x1000 1.png";
import caseWhite from "../assets/images/white-case_iphone.png";
import caseGreen from "../assets/images/green-case-iphone.png";
import caseDark from "../assets/images/darck-case-iphone.png";
import apple1 from "../assets/images/Image.png";
import apple2 from "../assets/images/Image-2.png";
import apple3 from "../assets/images/Image-3.png";
import star from "../assets/images/Vector.png";
import apple4 from "../assets/images/Image-4.png";
import apple5 from "../assets/images/Image-5.png";
import apple6 from "../assets/images/Image-6.png";

type Props = {
  name: string;
};

const Home = (props: Props) => {
  return (
    <div>
      <h1>Home {props.name}</h1>
      <div className="relative my-5">
        <img src={banner} alt="banner" />
        {/* <img
          src={iphone13promax}
          alt="iphone"
          className="absolute right-20 top-0 sm:right-10 md:right-16 lg:right-20"
          width={300}
        /> */}
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-2 mx-auto">
          <div className="flex flex-col text-left w-full">
            <h1 className="text-[#838383] font-semibold">Чехлы</h1>
          </div>
          <div className="flex flex-wrap justify-between m-2 text-center">
            <div className=" md:w-1/4 sm:w-1/2 w-full">
              <div className="p-10 bg-white border-2 border-gray-200 rounded-lg">
                <img src={caseWhite} alt="" />
                <p className="leading-relaxed mt-2">Стеклянный</p>
              </div>
            </div>
            <div className=" md:w-1/4 sm:w-1/2 w-full">
              <div className="p-10 bg-white border-2 border-gray-200 rounded-lg">
                <img src={caseGreen} alt="case" className="py-1" />
                <p className="leading-relaxed mt-5">Стеклянный</p>
              </div>
            </div>
            <div className=" md:w-1/4 sm:w-1/2 w-full">
              <div className="p-10 bg-white border-2 border-gray-200 rounded-lg">
                <img src={caseWhite} alt="" />
                <p className="leading-relaxed mt-2">Стеклянный</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-2 mx-auto">
          <div className="flex flex-col text-left w-full">
            <h1 className="text-[#838383] font-semibold">Наушники</h1>
          </div>
          <div className="flex flex-wrap justify-between m-2 text-center">
            <div className=" md:w-1/4 sm:w-1/2 w-full">
              <div className="p-10 bg-white border-2 border-gray-200 rounded-lg">
                <img src={apple1} alt="" />
                <div className="flex justify-between  items-start">
                  <p className="leading-relaxed mt-2">Apple BYZ S8521</p>
                  <div className="text-[#FFA542]">
                    <p className="leading-relaxed mt-2">2927 ₸</p>
                    <p className="leading-relaxed mt-2 line-through">3527 ₸</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 aligh left-0">
                  <img src={star} alt="star" width={23} />
                  <p>4.7</p>
                </div>
              </div>
            </div>
            <div className=" md:w-1/4 sm:w-1/2 w-full">
              <div className="p-10 bg-white border-2 border-gray-200 rounded-lg">
                <img src={apple2} alt="apple" className="py-4" />
                <div className="flex justify-between  items-start">
                  <p className="leading-relaxed mt-2">Apple BYZ S8521</p>
                  <div className="text-[#FFA542]">
                    <p className="leading-relaxed mt-2">2327 ₸</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 aligh left-0">
                  <img src={star} alt="star" width={23} />
                  <p>4.7</p>
                </div>
              </div>
            </div>
            <div className=" md:w-1/4 sm:w-1/2 w-full">
              <div className="p-10 bg-white border-2 border-gray-200 rounded-lg">
                <img src={apple3} alt="apple" className="py-12" />
                <div className="flex justify-between  items-start">
                  <p className="leading-relaxed mt-2">Apple BYZ S8521</p>
                  <div className="text-[#FFA542]">
                    <p className="leading-relaxed mt-2">2327 ₸</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 aligh left-0">
                  <img src={star} alt="star" width={23} />
                  <p>4.7</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-between m-2 text-center">
            <div className=" md:w-1/4 sm:w-1/2 w-full">
              <div className="p-10 bg-white border-2 border-gray-200 rounded-lg">
                <img src={apple1} alt="" />
                <div className="flex justify-between  items-start">
                  <p className="leading-relaxed mt-2">Apple BYZ S8521</p>
                  <div className="text-[#FFA542]">
                    <p className="leading-relaxed mt-2">2927 ₸</p>
                    <p className="leading-relaxed mt-2 line-through">3527 ₸</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 aligh left-0">
                  <img src={star} alt="star" width={23} />
                  <p>4.7</p>
                </div>
              </div>
            </div>
            <div className=" md:w-1/4 sm:w-1/2 w-full">
              <div className="p-10 bg-white border-2 border-gray-200 rounded-lg">
                <img src={apple2} alt="apple" className="py-4" />
                <div className="flex justify-between  items-start">
                  <p className="leading-relaxed mt-2">Apple BYZ S8521</p>
                  <div className="text-[#FFA542]">
                    <p className="leading-relaxed mt-2">2327 ₸</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 aligh left-0">
                  <img src={star} alt="star" width={23} />
                  <p>4.7</p>
                </div>
              </div>
            </div>
            <div className=" md:w-1/4 sm:w-1/2 w-full">
              <div className="p-10 bg-white border-2 border-gray-200 rounded-lg">
                <img src={apple3} alt="apple" className="py-12" />
                <div className="flex justify-between  items-start">
                  <p className="leading-relaxed mt-2">Apple BYZ S8521</p>
                  <div className="text-[#FFA542]">
                    <p className="leading-relaxed mt-2">2327 ₸</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 aligh left-0">
                  <img src={star} alt="star" width={23} />
                  <p>4.7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-2 mx-auto">
          <div className="flex flex-col text-left w-full">
            <h1 className="text-[#838383] font-semibold">
              Беспроводные наушники
            </h1>
          </div>
          <div className="flex flex-wrap justify-between m-2 text-center">
            <div className=" md:w-1/4 sm:w-1/2 w-full">
              <div className="p-10 bg-white border-2 border-gray-200 rounded-lg">
                <img src={apple4} alt="" />
                <div className="flex justify-between  items-start">
                  <p className="leading-relaxed mt-2">Apple AirPods</p>
                  <div className="text-[#FFA542]">
                    <p className="leading-relaxed mt-2">2927 ₸</p>
                    <p className="leading-relaxed mt-2 line-through">3527 ₸</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 aligh left-0">
                  <img src={star} alt="star" width={23} />
                  <p>4.7</p>
                </div>
              </div>
            </div>
            <div className=" md:w-1/4 sm:w-1/2 w-full">
              <div className="p-10 bg-white border-2 border-gray-200 rounded-lg">
                <img src={apple6} alt="apple" className="" />
                <div className="flex justify-between  items-start">
                  <p className="leading-relaxed mt-2">GERLAX GH-04</p>
                  <div className="text-[#FFA542]">
                    <p className="leading-relaxed mt-2">2327 KZT</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 aligh left-0">
                  <img src={star} alt="star" width={23} />
                  <p>4.7</p>
                </div>
              </div>
            </div>
            <div className=" md:w-1/4 sm:w-1/2 w-full">
              <div className="p-10 bg-white border-2 border-gray-200 rounded-lg">
                <img src={apple3} alt="apple" className="py-12" />
                <div className="flex justify-between  items-start">
                  <p className="leading-relaxed mt-2">BOROFONE BO4</p>
                  <div className="text-[#FFA542]">
                    <p className="leading-relaxed mt-2">2327 KZT</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 aligh left-0">
                  <img src={star} alt="star" width={23} />
                  <p>4.7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
