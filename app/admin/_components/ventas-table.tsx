//product-table.tsx
"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Edit, Trash, MoreHorizontal, Plus, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination";
import { useState } from "react";

// Agrega estos datos antes del componente AdminDashboard
const products = [
  {
    product: "Apple Watch Series 7",
    category: "Electronics",
    price: "$296",
    sold: "22",
    profit: "$45",
  },
  {
    product: "Macbook Pro M1",
    category: "Electronics",
    price: "$546",
    sold: "12",
    profit: "$125",
  },
  {
    product: "Dell Inspiron 15",
    category: "Electronics",
    price: "$443",
    sold: "64",
    profit: "$247",
  },
  {
    product: "HP Probook 450",
    category: "Electronics",
    price: "$499",
    sold: "72",
    profit: "$103",
  },
  {
    product: "Apple Watch Series 7",
    category: "Electronics",
    price: "$296",
    sold: "22",
    profit: "$45",
  },
  {
    product: "Macbook Pro M1",
    category: "Electronics",
    price: "$546",
    sold: "12",
    profit: "$125",
  },
  {
    product: "Dell Inspiron 15",
    category: "Electronics",
    price: "$443",
    sold: "64",
    profit: "$247",
  },
  {
    product: "HP Probook 450",
    category: "Electronics",
    price: "$499",
    sold: "72",
    profit: "$103",
  },
  {
    product: "Apple Watch Series 7",
    category: "Electronics",
    price: "$296",
    sold: "22",
    profit: "$45",
  },
  {
    product: "Macbook Pro M1",
    category: "Electronics",
    price: "$546",
    sold: "12",
    profit: "$125",
  },
  {
    product: "Dell Inspiron 15",
    category: "Electronics",
    price: "$443",
    sold: "64",
    profit: "$247",
  },
  {
    product: "HP Probook 450",
    category: "Electronics",
    price: "$499",
    sold: "72",
    profit: "$103",
  },
  {
    product: "Apple Watch Series 7",
    category: "Electronics",
    price: "$296",
    sold: "22",
    profit: "$45",
  },
  {
    product: "Macbook Pro M1",
    category: "Electronics",
    price: "$546",
    sold: "12",
    profit: "$125",
  },
  {
    product: "Dell Inspiron 15",
    category: "Electronics",
    price: "$443",
    sold: "64",
    profit: "$247",
  },
  {
    product: "HP Probook 450",
    category: "Electronics",
    price: "$499",
    sold: "72",
    profit: "$103",
  },
];

const ITEMS_PER_PAGE = 7;

const VentasTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  //   const handleAddProduct = () => {
  //     // Lógica para añadir nuevo producto
  //     console.log("Añadir nuevo producto");
  //   };

  const currentProducts = products.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <div className="bg-stone-800 p-6 rounded-lg shadow-sm border border-slate-700 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Ventas realizadas</h2>
        {/* <Button
          //   onClick={handleAddProduct}
          className="bg-slate-700 hover:bg-slate-600 text-slate-300"
        >
          <PlusIcon className="mr-2 h-4 w-4" />
        </Button> */}
      </div>

      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-[300px]">Producto</TableHead>
            <TableHead>Categoría</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead>Vendidos</TableHead>
            <TableHead>Beneficio</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentProducts.map((product, index) => (
            <TableRow key={index} className="hover:bg-stone-700/50">
              <TableCell className="font-medium">{product.product}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.sold}</TableCell>
              <TableCell>{product.profit}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger className="hover:bg-stone-600 p-2 rounded-lg">
                    <MoreHorizontal className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-stone-800 border-slate-700">
                    <DropdownMenuItem className="hover:bg-stone-700">
                      <Edit className="mr-2 h-4 w-4" />
                      Editar
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-stone-700 text-red-400">
                      <Trash className="mr-2 h-4 w-4" />
                      Eliminar
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-6">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                className="text-slate-300 hover:bg-slate-700"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  setCurrentPage(Math.max(1, currentPage - 1));
                }}
              />
            </PaginationItem>

            {Array.from({ length: totalPages }, (_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  href="#"
                  className={`${
                    currentPage === i + 1
                      ? "bg-slate-700 text-slate-300"
                      : "hover:bg-slate-700 text-slate-400"
                  }`}
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.preventDefault();
                    setCurrentPage(i + 1);
                  }}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                href="#"
                className="text-slate-300 hover:bg-slate-700"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  setCurrentPage(Math.min(totalPages, currentPage + 1));
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default VentasTable;
