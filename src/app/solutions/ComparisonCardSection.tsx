import React from 'react'



type ComparisionCardSection= {
  data:{
    content:{
      titleicon:string;
      title:string;
      icon:string;
      points:string[];

    }[]
      footerText:string;
footerTextHighlight:string;
footerTextBack?:string;
  }
}

const ComparisonCardSection = ({data}:ComparisionCardSection) => {
  return (
    <div>
      <div className=" grid grid-cols-1 gap-md md:grid-cols-2">
        {data.content.map((card, index) => (
          <div
            key={index}
            className="w-full rounded-md border border-[#D3E6FF] bg-white p-md shadow-mobile-small md:shadow-web-small"
          >
            <img src={card.titleicon} alt={`${card.title} icon`} className="size-iconsize-xl scale-125 md:scale-105 " />
            <h3 className="mt-md text-base font-bold text-[#1B1C17]">
              {card.title}
            </h3>

            <div className="mt-sm space-y-sm text-xl text-[#2C2C2C]">
              {card.points.map((point, pointIndex) => (
                <div key={pointIndex} className="flex gap-xs">
                  <img
                    src={`/icons/${card.icon}.svg`}
                    alt="tick icon"
                    className=" size-iconsize-sm p-[0.1%]"
                  />
                  <span className="text-xl font-medium text-[#2C2C2C]">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {data.footerText && (
      <p className='mt-md text-center text-base font-medium'>{data.footerText}<span className='font-bold'> {data.footerTextHighlight}</span>{data.footerTextBack} </p>
       )} </div>
  )
}

export default ComparisonCardSection