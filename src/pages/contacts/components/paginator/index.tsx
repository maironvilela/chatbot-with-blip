import { PaginateItem } from "./paginate-item";

type PaginatorProps = {
  numberOfRecords?: number
  currentPage: number;
  itemsPerPage: number;
  handleChangePage: (page: number) => void;

}

export function Paginator({ numberOfRecords = 0, itemsPerPage, currentPage, handleChangePage }: PaginatorProps) {

  let initialPage: number;
  let finalPage: number;


  const pageSize = Math.ceil(numberOfRecords / itemsPerPage);


  if ((pageSize <= 1) && (pageSize <= 5)) {
    initialPage = 1;
    finalPage = pageSize
  } else {
    initialPage = 0
    finalPage = pageSize
  }

  const array = new Array(pageSize)

  for (let i = 0; i < pageSize; i++) {
    array[i] = i;
  }

  return (

    <div className="flex flex-row gap-4 bg-red h-10">
      {array.map((_, index) => {
        if (index >= initialPage && index < finalPage) {
          return (
            <PaginateItem page={index} key={index} isSelected={index === currentPage} handleChangePage={handleChangePage} />
          )
        }
      }
      )}
    </div >
  )
}



