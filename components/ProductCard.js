function ProductCards({ title, Icon, bgColor }) {
  return (
    <a href="/biobazar/categoriaDePorduseSelectată">
      <div className="relative flex flex-grow !flex-row flex-col items-center rounded-[10px] rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
        <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
          <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
            <span
              className={` bg-${bgColor}-500 flex items-center text-brand-500 dark:text-white w-10 h-10  rounded-full justify-center`}
            >
              {Icon}
            </span>
          </div>
        </div>
        <div className="h-50 ml-4 flex w-auto flex-col justify-center">
          <p className="font-dm text-[13px] font-medium text-gray-600">
            Produse Bio
          </p>
          <h4 className="text-lg font-bold text-navy-700 dark:text-white">
            {title}
          </h4>
        </div>
      </div>
    </a>
  );
}

export default ProductCards;
