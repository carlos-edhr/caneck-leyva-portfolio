//users-table.tsx
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
import { Edit, Trash, MoreHorizontal, Plus } from "lucide-react";
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

const users = [
  {
    name: "Musharof Chowdhury",
    registered: "2023-01-15",
    email: "musharof@example.com",
    role: "USER",
  },
  {
    name: "Naimur Rahman",
    registered: "2023-02-20",
    email: "naimurrahman@example.com",
    role: "USER",
  },
  {
    name: "Shafiq Hammad",
    registered: "2023-03-10",
    email: "shafiq.hd@example.com",
    role: "STREAMER",
  },
  {
    name: "Alex Semuyei",
    registered: "2023-04-05",
    email: "alex.semuel@example.com",
    role: "ADMIN",
  },
  {
    name: "Sulium Kellym",
    registered: "2023-05-12",
    email: "sullym.info@example.com",
    role: "USER",
  },
  {
    name: "Jhon Smith",
    registered: "2023-06-18",
    email: "jhon.smith@example.com",
    role: "ADMIN",
  },
  {
    name: "Jenifer Lofess",
    registered: "2023-07-22",
    email: "loffes.cooper@example.com",
    role: "USER",
  },
  {
    name: "Devid Deekook",
    registered: "2023-08-30",
    email: "devid.deeok@example.com",
    role: "STREAMER",
  },
];

const ITEMS_PER_PAGE = 7;

const UsersTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(users.length / ITEMS_PER_PAGE);

  const currentUsers = users.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="bg-stone-800 p-6 rounded-lg shadow-sm border border-slate-700 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Usuarios registrados</h2>
        <Button className="bg-slate-700 hover:bg-slate-600 text-slate-300">
          <Plus className="mr-2 h-4 w-4" />
          Agregar Usuario
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead>NAME</TableHead>
            <TableHead>REGISTERED</TableHead>
            <TableHead>EMAIL</TableHead>
            <TableHead>ROLE</TableHead>
            <TableHead className="text-right">ACTIONS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentUsers.map((user, index) => (
            <TableRow key={index} className="hover:bg-stone-700/50">
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{formatDate(user.registered)}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger className="hover:bg-stone-600 p-2 rounded-lg">
                    <MoreHorizontal className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-stone-800 border-slate-700">
                    <DropdownMenuItem className="hover:bg-stone-700">
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-stone-700 text-red-400">
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

      <div className="mt-6">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                className="text-slate-300 hover:bg-slate-700"
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
                      ? "bg-slate-700 text-slate-300"
                      : "hover:bg-slate-700 text-slate-400"
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
                className="text-slate-300 hover:bg-slate-700"
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

export default UsersTable;
