import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

interface Props {
  page: number;
  totalPage: number;
  onChangePage: (page: number) => void;
}

export function PaginationList({ onChangePage, page, totalPage }: Props) {
  
  // Hàm tạo mảng các số trang cần hiển thị
  const getVisiblePages = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPage <= maxVisible) {
      // Nếu tổng số trang ít hơn 5, hiện tất cả
      for (let i = 1; i <= totalPage; i++) pages.push(i);
    } else {
      // Logic khi có nhiều hơn 5 trang
      if (page <= 3) {
        // Gần đầu: 1 2 3 4 ... cuối
        pages.push(1, 2, 3, 4, "ellipsis-end", totalPage);
      } else if (page >= totalPage - 2) {
        // Gần cuối: 1 ... cuối-3 cuối-2 cuối-1 cuối
        pages.push(1, "ellipsis-start", totalPage - 3, totalPage - 2, totalPage - 1, totalPage);
      } else {
        // Ở giữa: 1 ... mid-1 mid mid+1 ... cuối
        pages.push(1, "ellipsis-start", page - 1, page, page + 1, "ellipsis-end", totalPage);
      }
    }
    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <Pagination>
      <PaginationContent>
        {/* Nút Previous */}
        <PaginationItem>
          <PaginationPrevious 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (page > 1) onChangePage(page - 1);
            }}
            className={page <= 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
          />
        </PaginationItem>

        {/* Danh sách các trang số */}
        {visiblePages.map((p, index) => {
          if (p === "ellipsis-start" || p === "ellipsis-end") {
            return (
              <PaginationItem key={`ellipsis-${index}`}>
                <PaginationEllipsis />
              </PaginationItem>
            );
          }

          return (
            <PaginationItem key={p}>
              <PaginationLink
                href="#"
                isActive={page === p}
                onClick={(e) => {
                  e.preventDefault();
                  onChangePage(p as number);
                }}
              >
                {p}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {/* Nút Next */}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (page < totalPage) onChangePage(page + 1);
            }}
            className={page >= totalPage ? "pointer-events-none opacity-50" : "cursor-pointer"}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}