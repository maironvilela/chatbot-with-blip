
type PaginateItemProps = {
    page: number;
    isSelected: boolean;
    handleChangePage: (page: number) => void;
}

export function PaginateItem({ page, isSelected, handleChangePage }: PaginateItemProps) {
    return (
        <button className={`${isSelected ? "bg-violet-600 " : "bg-violet-400 "} px-4 py-1 rounded-full ${isSelected ? "" : "hover:brightness-75"}`}
            disabled={isSelected}
            onClick={() => handleChangePage(page)}>
            <span className="text-gray-100 text-md text-  ease-in-out ">{page + 1}</span>
        </button>
    )
}