import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";

const SubCategoryPageSkeleton = () => {
  return (
    <div className="max-w-5xl mx-auto px-5 md:px-0">
      <div className="bg-white border-b border-gray-200">
        <div className="px-4 py-2 flex gap-5 items-center">
          <Skeleton className="md:text-2xl text-2xl font-semibold w-1/4" />
          <ul className="flex space-x-4 text-sm px-4 py-2 mt-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <Skeleton key={index} className="w-16 h-4" />
            ))}
          </ul>
        </div>
      </div>

      <div className="flex mt-5">
        <div className="flex-1 mr-4">
          <div className="md:col-span-8 col-span-12 flex bg-gray-100">
            <Skeleton className="max-w-[480px] h-auto" />
            <div className="ml-4 flex flex-col mt-5">
              <Skeleton className="font-semibold text-lg mb-2" />
              <Skeleton className="md:text-sm text-xs" />
            </div>
          </div>
          <div className="border-b border-gray-300 h-auto mt-5"></div>
          <div className="flex flex-col mb-5">
            <div className="md:col-span-8 col-span-12 w-full">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="border-b py-4 w-full">
                  <Link to="#" className="flex flex-col gap-2 w-full">
                    <Skeleton className="md:text-lg text-sm font-semibold" />
                    <div className="flex gap-2">
                      <Skeleton className="max-w-44 w-full h-fit" />
                      <div>
                        <Skeleton className="md:text-sm text-xs" />
                        <div className="flex items-center gap-2 text-gray-400">
                          <Skeleton circle={true} height={20} width={20} />
                          <Skeleton className="text-xs" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-l border-gray-300 h-auto mx-4"></div>
        <div className="w-1/4">
          <div className="md:col-span-7 col-span-12">
            {Array.from({ length: 2 }).map((_, index) => (
              <div key={index} className="py-4">
                <Skeleton className="md:text-xl text-lg font-semibold text-gray-800 border-b border-red-800" />
                <div className="flex flex-col">
                  <div className="border-b py-2">
                    <Skeleton className="w-full h-44 object-cover" />
                    <div className="bg-gray-100 p-4">
                      <Skeleton className="text-sm font-semibold mb-3" />
                      <Skeleton className="text-xs" />
                    </div>
                  </div>
                  {Array.from({ length: 2 }).map((_, subIndex) => (
                    <Skeleton key={subIndex} className="border-b py-2" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCategoryPageSkeleton;
