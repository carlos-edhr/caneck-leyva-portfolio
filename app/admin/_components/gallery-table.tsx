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
import { Edit, Trash, MoreHorizontal, PlusIcon } from "lucide-react";
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
import Image from "next/image";

type GalleryCategory =
  | "astrophotography"
  | "portraits"
  | "landscapes"
  | "marketing"
  | "artistic"
  | "education";

interface GalleryItem {
  id: string;
  image: string;
  name: string;
  description: string;
  category: GalleryCategory;
  location: string;
  price: number;
  dimensions: string;
  onSale: boolean;
  sold: number;
}

// Helper function to truncate description
const truncateDescription = (text: string, words: number = 20) => {
  const wordArray = text.split(" ");
  if (wordArray.length > words) {
    return wordArray.slice(0, words).join(" ") + "...";
  }
  return text;
};

const ITEMS_PER_PAGE = 7;
const galleryItems: GalleryItem[] = [
  {
    id: "1",
    image: "/img/1.jpg",
    name: "Stellar Nebula",
    category: "astrophotography",
    description:
      "A breathtaking view of the Orion Nebula captured using long-exposure photography. This image showcases the vibrant colors and intricate dust patterns of deep space...",
    location: "Death Valley, CA",
    price: 2500,
    dimensions: "60x90 cm",
    onSale: true,
    sold: 3,
  },
  {
    id: "2",
    image: "/img/2.jpg",
    name: "Galaxy Cluster",
    category: "astrophotography",
    description:
      "A breathtaking view of the Orion Nebula captured using long-exposure photography. This image showcases the vibrant colors and intricate dust patterns of deep space...",
    location: "Swiss Alps",
    price: 1800,
    dimensions: "50x75 cm",
    onSale: false,
    sold: 12,
  },
  // Add more items as needed...
];

const GalleryTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(galleryItems.length / ITEMS_PER_PAGE);

  const currentItems = galleryItems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <div className="bg-stone-200/50 p-6 rounded-lg shadow-sm border border-slate-700 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Artwork Inventory</h2>
        <Button className="bg-slate-400 hover:bg-slate-600 text-slate-900">
          <PlusIcon className="mr-2 h-4 w-4" />
          Add Artwork
        </Button>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead>Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="min-w-[200px]">Description</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Price (USD)</TableHead>
              <TableHead>Dimensions</TableHead>
              <TableHead>On Sale</TableHead>
              <TableHead>Sold</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentItems.map((item) => (
              <TableRow key={item.id} className="hover:bg-stone-200/50">
                <TableCell>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="w-12 h-12 object-cover rounded"
                  />
                </TableCell>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell
                  className="max-w-[300px] truncate"
                  title={item.description} // Show full description on hover
                >
                  {truncateDescription(item.description)}
                </TableCell>
                <TableCell className="capitalize">{item.category}</TableCell>
                <TableCell>{item.location}</TableCell>
                <TableCell>${item.price.toLocaleString()}</TableCell>
                <TableCell>{item.dimensions}</TableCell>
                <TableCell>{item.onSale ? "Yes" : "No"}</TableCell>
                <TableCell>{item.sold}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="hover:bg-stone-300 p-2 rounded-lg">
                      <MoreHorizontal className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-stone-200 border-slate-700">
                      <DropdownMenuItem className="hover:bg-stone-200">
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem className="hover:bg-stone-200 text-red-400">
                        <Trash className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mt-6">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                className="text-slate-300 hover:bg-slate-300"
                onClick={(e) => {
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
                      ? "bg-slate-500 text-slate-900"
                      : "hover:bg-slate-700 text-slate-900"
                  }`}
                  onClick={(e) => {
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
                className="text-slate-300 hover:bg-slate-400"
                onClick={(e) => {
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

export default GalleryTable;
