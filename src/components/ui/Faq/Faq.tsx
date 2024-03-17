import { useState } from "react";

const Item = ({ title, children }:any) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="border-b">
        <button
          type="button"
          aria-label="Open item"
          title="Open item"
          className="flex items-center justify-between w-full p-4 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="text-lg font-medium">{title}</p>
          <svg
            viewBox="0 0 24 24"
            className={`w-3 text-gray-600 transform transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {isOpen && (
          <div className="p-4 pt-0">
            <p className="text-gray-700">{children}</p>
          </div>
        )}
      </div>
    );
  };
  
  export const Faq = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="232db96b-4aa2-422f-9086-5a77996d1df1"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#232db96b-4aa2-422f-9086-5a77996d1df1)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">Frequently Asked Question</span>
              </span>{' '}
            </h2>

          </div>
          <div className="space-y-4">
            <Item title="What is the difference between soybean meal and cake?">
            Today, these two terms are used interchangeably to referred to the soybean byproduct resulting after the extraction of oil by a solvent. The residual product is called soybean meal and contains about 1 to 2 percent remaining oil. Older methods were less efficient, and the resulting product had a higher percentage of oil, hence the term cake. In other protein sources, such terminology remains valid. For example, cottonseed meal and cottonseed cake are two different products.
            </Item>
            <Item title="Why are calcium levels in soybean meal always high?">
            Soybean meal producers add at manufacturing about 0.5 percent limestone (which can be of variable calcium content, unless it is pure calcium carbonate) to increase the flowability of the meal. This causes an increase of about 0.1 to 0.2 percentage units in calcium concentration in soybean meal. It is not much, but it adds up as limestone is used in many other products (such as premixes, medicines, additives).     </Item>
            <Item title="Can raw soybean meal be fed to animals? ">
            Raw soybean meal can be fed to animals, but only to certain species, and within certain limits. Perhaps in the future, with the development of proper enzymes or probiotics, it may be possible to feed whole raw soybeans to all animals, but we are not there yet. Thus, with a few notable exceptions — that are best left unmentioned and discussed only with a very qualified nutritionist — soybeans should be fed only after some form of thermal treatment (like most, but not all, legumes). 
            </Item>
            <Item title="Why is soya so important for livestock feed? ">
            Soya, usually as soyabean meal, is used in animal feeds because of its unique characteristics in its amino acid profile, protein concentration, nutrient density, digestibility and palatability to livestock.

Given these characteristics, soya complements other feeds such as cereal grains. It also ensures less nitrogen being excreted in the manure from animals. It is therefore an essential part of livestock feed.
            </Item>
          </div>
        </div>
      </div>
    );
  };