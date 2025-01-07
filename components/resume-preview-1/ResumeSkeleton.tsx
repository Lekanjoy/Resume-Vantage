import React from 'react';

const ResumeSkeleton = () => {
  return (
    <div className="min-w-[250px] h-[300px] bg-white p-4 rounded-lg border overflow-hidden shadow lg:w-[30%] lg:min-w-full">
      <div className="h-full overflow-y-auto pr-4 -mr-4 scrollbar-hide">
        <div className="space-y-4">
          {/* Header / Personal Info */}
          <div className="animate-pulse">
            <div className="h-6 bg-gray-200 rounded-full w-3/4 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded-full w-1/2 mb-1"></div>
            <div className="h-3 bg-gray-200 rounded-full w-1/3"></div>
          </div>

          {/* Summary */}
          <div className="animate-pulse">
            <div className="h-3 bg-gray-200 rounded-full w-1/4 mb-2"></div>
            <div className="h-2 bg-gray-200 rounded-full w-full mb-1"></div>
            <div className="h-2 bg-gray-200 rounded-full w-full mb-1"></div>
            <div className="h-2 bg-gray-200 rounded-full w-3/4"></div>
          </div>

          {/* Experience */}
          <div className="animate-pulse">
            <div className="h-3 bg-gray-200 rounded-full w-1/3 mb-2"></div>
            {[...Array(2)].map((_, index) => (
              <div key={index} className="mb-2">
                <div className="h-2 bg-gray-200 rounded-full w-3/4 mb-1"></div>
                <div className="h-2 bg-gray-200 rounded-full w-1/2 mb-1"></div>
                <div className="h-2 bg-gray-200 rounded-full w-full"></div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="animate-pulse">
            <div className="h-3 bg-gray-200 rounded-full w-1/3 mb-2"></div>
            {[...Array(1)].map((_, index) => (
              <div key={index} className="mb-2">
                <div className="h-2 bg-gray-200 rounded-full w-3/4 mb-1"></div>
                <div className="h-2 bg-gray-200 rounded-full w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeSkeleton;