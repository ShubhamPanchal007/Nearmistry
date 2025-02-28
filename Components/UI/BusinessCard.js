// Card ui for businesses
import Image from "next/image";
import React, { useState } from "react";
import { DotsHorizontalIcon } from "@heroicons/react/outline";
import { PhoneIcon } from "@heroicons/react/solid";
import ImageShowcaseModal from "../Modals/ImageShowcaseModal";
import PropsType from "prop-types"
function BusinessCard({
  bName,
  bAge,
  phoneNumber,
  imgUrlArray,
  ownerImg,
  tags,
  address,
}) {
  const [showModal, setShowModal] = useState(false);
  const modalHandler = () => {
    console.log("lskjfldkjlfjsldjfljsdljfl");
    setShowModal((prevState) => !prevState);
  };
  return (
    <div>
      <ImageShowcaseModal
        showModal={showModal}
        click={modalHandler}
        selectedFile={imgUrlArray || null}
        imgUrlArray={imgUrlArray || null}
      />
      <div className="flex shadow-md m-4 rounded-md bg-white max-w-[360px] max-h-[215px]">
        <div className="relative h-[13rem]  min-w-[155px] m-1 lg:m-1">
          <Image
            src={ownerImg || imgUrlArray[0]}
            layout="responsive"
            objectFit="cover"
            width={160}
            height={210}
            className="rounded-md"
            placeholder="blur"
            blurDataURL="LF7d,x_3xuRj~q_3xuRj_3?bt7Rj"
            onClick={() => setShowModal(!showModal)}
            alt={bName}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[190px] left-[1px] h-3 w-3 p-0"
            viewBox="0 0 20 20"
            // fill=""
          >
            <path
              fillRule="evenodd"
              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="mt-1 items-center">
          <div className="">
            <h1 className="text-[1.2rem] lg:text-lg whitespace-nowrap overflow-hidden s-phones:w-[165px] n-phones:w-48  text-ellipsis">
              {bName}
            </h1>
            <div className="text-xs font-medium text-gray-600 mt-1 whitespace-nowrap overflow-hidden s-phones:w-[165px] n-phones:w-48  text-ellipsis">
              {address}
            </div>
            <div className="mt-2 h-20 text-ellipsis overflow-y-auto  lg:scrollbar-hide">
              <h2 className="tag">#{bAge} years</h2>
              {tags?.split(",")?.map((tag, index) => (
                <h2 className="tag" key={index}>
                  #{tag.trim()}
                </h2>
              ))}
            </div>
            <button className="block mx-auto text-black active:bg-gray-200 active:px-2 active:scale-110 transition duration-100">
              <DotsHorizontalIcon className="h-6" />
            </button>
          </div>
          <div>
            <a
              style={{ textDecoration: "none" }}
              href={`tel:${phoneNumber}`}
              className="flex mt-2 border-[1px]  border-blue-600 text-blue-600
          rounded-[3px] active:scale-90 transition duration-150 items-center justify-center "
            >
              <PhoneIcon className="h-5" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
/*bName,
  bAge,
  phoneNumber,
  imgUrlArray,
  ownerImg,
  tags,
  address,*/
  BusinessCard.propsType = {
    bName:PropsType.string,
  bAge:PropsType.string,
  phoneNumber:PropsType.string,
  imgUrlArray:PropsType.array,
  ownerImg:PropsType.string,
  tags:PropsType.array,
  address:PropsType.string,
  }
export default BusinessCard;
