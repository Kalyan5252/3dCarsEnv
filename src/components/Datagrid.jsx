'use client';

import * as React from 'react';
import Image from 'next/image';
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { ArrowUpDown, ChevronDown, MoreHorizontal } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { IoCopyOutline } from 'react-icons/io5';

import { Bounce, Flip, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CircularProgress from '@mui/material/CircularProgress';

// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

// const data = [
//   {
//     _id: '66bdedf05daf11898bed8a53',
//     clientName: 'Cate Garcia',
//     carModel: 'corvette',
//     color: '#ca1b1b',
//     email: 'Cate@gmail.com',
//     material: 'metallic',
//     texture: '/textures/fire_pattern.jpeg',
//     createdAt: '2024-08-15T12:00:48.898Z',
//     status: 'approved',
//   },
//   {
//     _id: '66bd8e7c96bc9823d6f33533',
//     clientName: 'canadey',
//     carModel: 'corvette',
//     color: '#00fc20',
//     material: 'metallic',
//     createdAt: '2024-08-15T05:13:32.955Z',
//     updatedAt: '2024-08-15T05:13:32.955Z',
//     __v: 0,
//     email: 'canadey@gmail.com',
//     status: 'approved',
//   },
//   {
//     _id: '66bcecc9fd7c960777be908a',
//     clientName: 'sunil',
//     carModel: 'audiCoupe',
//     color: '#a14a28',
//     material: 'carbon',
//     createdAt: '2024-08-14T17:43:37.985Z',
//     updatedAt: '2024-08-14T17:43:37.985Z',
//     __v: 0,
//     email: 'sunil@gmail.com',
//     status: 'pending',
//   },
//   {
//     _id: '66bcec80fd7c960777be9088',
//     clientName: 'Keras',
//     carModel: 'audiCoupe',
//     color: '#a14a28',
//     material: 'matte',
//     createdAt: '2024-08-14T17:42:24.636Z',
//     updatedAt: '2024-08-14T17:42:24.636Z',
//     __v: 0,
//     email: 'Keras@gmail.com',
//     status: 'rejected',
//   },
//   {
//     _id: '66bcebdafd7c960777be9085',
//     clientName: 'Keras',
//     carModel: 'audiCoupe',
//     color: '#611f1f',
//     material: 'Select Body Material',
//     createdAt: '2024-08-14T17:39:38.571Z',
//     updatedAt: '2024-08-14T17:39:38.571Z',
//     __v: 0,
//     email: 'Keras@gmail.com',
//     status: 'approved',
//   },
//   {
//     _id: '66bcca3cec046a99d8c681af',
//     clientName: 'Goerge',
//     carModel: 'corvette',
//     color: '#480563',
//     material: 'metallic',
//     createdAt: '2024-08-14T15:16:12.096Z',
//     updatedAt: '2024-08-14T15:16:12.096Z',
//     __v: 0,
//     email: 'Goerge@gmail.com',
//     status: 'pending',
//   },
//   {
//     _id: '667e3051abcdfed5b81afede',
//     clientName: 'Mr.K',
//     carModel: 'hyundai',
//     color: '#000000',
//     material: 'Select Body Material',
//     createdAt: '2024-06-28T03:38:57.235Z',
//     updatedAt: '2024-06-28T03:38:57.235Z',
//     __v: 0,
//     email: 'Mr.K@gmail.com',
//     status: 'approved',
//   },
//   {
//     _id: '667e304fabcdfed5b81afedc',
//     clientName: 'Mr.K',
//     carModel: 'hyundai',
//     color: '#000000',
//     material: 'Select Body Material',
//     createdAt: '2024-06-28T03:38:55.391Z',
//     updatedAt: '2024-06-28T03:38:55.391Z',
//     __v: 0,
//     email: 'Mr.K@gmail.com',
//     status: 'approved',
//   },
//   {
//     _id: '667bdad9cb54b714a7c2e493',
//     clientName: 'pavan',
//     carModel: 'corvette',
//     color: '#6e6c08',
//     material: 'carbon',
//     createdAt: '2024-06-26T09:09:45.361Z',
//     updatedAt: '2024-06-26T09:09:45.361Z',
//     __v: 0,
//     email: 'pavan@gmail.com',
//     status: 'rejected',
//   },
//   {
//     _id: '667bd9eccb54b714a7c2e481',
//     clientName: 'suneel',
//     carModel: 'corvette',
//     color: '#e01b1b',
//     material: 'metallic',
//     createdAt: '2024-06-26T09:05:48.017Z',
//     updatedAt: '2024-06-26T09:05:48.017Z',
//     __v: 0,
//     email: 'suneel@gmail.com',
//     status: 'approved',
//   },
//   {
//     _id: '6670403bd68949e4f30928f1',
//     clientName: 'Vasavi',
//     carModel: 'rrModel',
//     color: '#1b061b',
//     material: 'Select Body Material',
//     createdAt: '2024-06-17T13:55:07.018Z',
//     updatedAt: '2024-06-17T13:55:07.018Z',
//     __v: 0,
//     email: 'Vasavi@gmail.com',
//     status: 'approved',
//   },
//   {
//     _id: '66703ff9d68949e4f30928ef',
//     clientName: 'Sufiya',
//     carModel: 'hyundai',
//     color: '#11082c',
//     material: 'metallic',
//     createdAt: '2024-06-17T13:54:01.949Z',
//     updatedAt: '2024-06-17T13:54:01.949Z',
//     __v: 0,
//     email: 'Sufiya@gmail.com',
//     status: 'approved',
//   },
//   {
//     _id: '666f1a4a979e38bcfef880c6',
//     clientName: 'dfghjkhg',
//     carModel: 'audiCoupe',
//     color: '#383838',
//     material: 'matte',
//     createdAt: '2024-06-16T17:00:58.106Z',
//     updatedAt: '2024-06-16T17:00:58.106Z',
//     __v: 0,
//     email: 'dfghjkhg@gmail.com',
//     status: 'approved',
//   },
//   {
//     _id: '666b0258c2f7b7a502159a6a',
//     clientName: 'presentative ',
//     carModel: 'corvette',
//     color: '#d30d0d',
//     material: 'metallic',
//     createdAt: '2024-06-13T14:29:44.016Z',
//     updatedAt: '2024-06-13T14:29:44.016Z',
//     __v: 0,
//     email: 'presentative @gmail.com',
//     status: 'pending',
//   },
//   {
//     _id: '666aad01a0e20d627c91d562',
//     clientName: 'vamsi',
//     carModel: 'audiCoupe',
//     color: '#df0000',
//     material: 'metallic',
//     createdAt: '2024-06-13T08:25:37.854Z',
//     updatedAt: '2024-06-13T08:25:37.854Z',
//     __v: 0,
//     email: 'vamsi@gmail.com',
//     status: 'rejected',
//   },
//   {
//     _id: '66686c10c54774f23177a904',
//     clientName: 'Project K',
//     carModel: 'rrModel',
//     color: '#474747',
//     material: 'matte',
//     createdAt: '2024-06-11T15:24:00.758Z',
//     updatedAt: '2024-06-11T15:24:00.758Z',
//     __v: 0,
//     email: 'Project K@gmail.com',
//     status: 'approved',
//   },
//   {
//     _id: '666854f5e34bf79d6bc02b77',
//     clientName: 'Kalyan',
//     carModel: 'rrModel',
//     color: '#272727',
//     material: 'matte',
//     createdAt: '2024-06-11T13:45:25.396Z',
//     updatedAt: '2024-06-11T13:45:25.396Z',
//     __v: 0,
//     email: 'Kalyan@gmail.com',
//     status: 'approved',
//   },
//   {
//     _id: '66685358e34bf79d6bc02b75',
//     clientName: 'Linus',
//     carModel: 'rrModel',
//     color: '#350046',
//     material: 'matte',
//     createdAt: '2024-06-11T13:38:32.647Z',
//     updatedAt: '2024-06-11T13:38:32.647Z',
//     __v: 0,
//     email: 'Linus@gmail.com',
//     status: 'approved',
//   },
//   {
//     _id: '6668531ee34bf79d6bc02b70',
//     clientName: 'Alex',
//     carModel: 'audiCoupe',
//     color: '#fff',
//     material: 'carbon',
//     createdAt: '2024-06-11T13:37:34.220Z',
//     updatedAt: '2024-06-11T13:37:34.220Z',
//     __v: 0,
//     email: 'Alex@gmail.com',
//     status: 'approved',
//   },
//   {
//     _id: '66684ec5b6de2644efe9eca9',
//     clientName: 'trail1',
//     carModel: 'corvette',
//     color: '#ffc900',
//     material: 'metallic',
//     createdAt: '2024-06-11T13:19:01.122Z',
//     updatedAt: '2024-06-11T13:19:01.122Z',
//     __v: 0,
//     email: 'trail1@gmail.com',
//     status: 'approved',
//   },
// ];

const getToast = (message, type) =>
  toast(message, {
    position: 'bottom-right',
    autoClose: 1000,
    pauseOnHover: false,
    type: type,
    transition: Flip,
    progress: false,
    pauseOnFocusLoss: false,
    hideProgressBar: true,
    draggable: true,
    closeOnClick: true,
  });

const formatTexture = (textureName) => {
  //   console.log(textureName);
  //   console.log('1:', );
  //   console.log(texture.split('/')[-1]?.split('.')[0]);
  return textureName.split('/').slice(-1)[0]?.split('.')[0];
};

// const filterValue = event.target.value.toLowerCase();
// const filteredData = data.filter(
//   (row) =>
//     row.clientName.toLowerCase().includes(filterValue) ||
//     row.email.toLowerCase().includes(filterValue)
// );

// const [textureModel, setTextureModel] = useState(null);

const handleApproval = async ({ model, email, approval }) => {
  console.log(email);
  const promise = await fetch('/api/approveDesign', {
    method: 'POST',
    body: JSON.stringify({
      model,
      email,
      approved: approval,
    }),
    'Content-Type': 'application/json',
  });
  const res = await promise.json();
  console.log(res);
};

export const columns = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'clientName',
    header: 'Client',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('clientName')}</div>
    ),
  },
  {
    accessorKey: 'carModel',
    header: 'Car Model',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('carModel')}</div>
    ),
  },
  {
    accessorKey: 'email',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase flex gap-2 items-center max-w-[20ch]">
        <p className="flex-1 overflow-hidden">{row.getValue('email')}</p>
        <button
          className="hover:scale-125 transition-all self-end p-1 hover:bg-gray-200 dark:hover:bg-gray-500 rounded-full"
          onClick={() => {
            navigator.clipboard.writeText(row.getValue('email'));
            // return getToast('Email Id copied', 'success');
            return toast('Email Id copied', {
              position: 'bottom-right',
              autoClose: 1000,
              pauseOnHover: false,
              type: 'success',
              transition: Flip,
              progress: false,
              pauseOnFocusLoss: false,
              hideProgressBar: true,
              draggable: true,
              closeOnClick: true,
            });
          }}
        >
          <IoCopyOutline size={15} />
        </button>
      </div>
    ),
  },
  {
    accessorKey: 'createdAt',
    // header: ({ column }) => {return <div className="text-right">Proposal Date</div>},
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-right"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Proposal Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const amount = row.getValue('createdAt');

      const date = new Date(amount);
      //   console.log('date:', date);
      const day = date.getDate();
      const month = date.getMonth();
      const Year = date.getFullYear();

      return (
        <div className="ml-8 font-medium">{`${String(day).padStart(
          2,
          '0'
        )}/${String(month + 1).padStart(2, '0')}/${Year}`}</div>
      );
    },
  },
  {
    accessorKey: 'color',
    header: () => <p className="ml-10">Color</p>,
    cell: ({ row }) => (
      <div
        className="p-2 rounded-lg flex gap-2 items-center"
        style={
          {
            //   background: `${row.getValue('color')}`,
            //   mixBlendMode: 'difference',
          }
        }
      >
        <div
          className="h-5 w-5 rounded-full"
          style={{
            background: `${row.getValue('color')}`,
            //   mixBlendMode: 'difference',
          }}
        ></div>
        <p>{row.getValue('color')}</p>
      </div>
    ),
  },
  {
    accessorKey: 'material',
    header: 'Material',
    cell: ({ row }) => (
      <div className="capitalize">
        {row.getValue('material') !== 'Select Body Material'
          ? row.getValue('material')
          : 'Default'}
      </div>
    ),
  },
  {
    accessorKey: 'texture',
    header: () => <p className="ml-6">Texture</p>,
    cell: ({ row }) =>
      //   <div className="flex items-center capitalize" onClick={() => {}}>
      //     {row.getValue('texture') && (
      //       <div className="">
      //         <Image
      //           src={row.getValue('texture')}
      //           alt="img"
      //           height={25}
      //           width={25}
      //         />
      //       </div>
      //     )}
      //     <p>
      //       {row.getValue('texture')
      //         ? formatTexture(row.getValue('texture'))
      //         : '-'}
      //     </p>
      //   </div>
      row.getValue('texture') ? (
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link">
              {formatTexture(row.getValue('texture'))}
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-fit">
            {/* <Avatar>
                <AvatarImage src={row.getValue('texture')} />
                <AvatarFallback>VC</AvatarFallback>
              </Avatar> */}
            {/* <div className="space-y-1">
                <h4 className="text-sm font-semibold">@nextjs</h4>
                <p className="text-sm">
                  The React Framework – created and maintained by @vercel.
                </p>
                <div className="flex items-center pt-2">
                  <span className="text-xs text-muted-foreground">
                    Joined December 2021
                  </span>
                </div>
              </div> */}
            <Image
              src={row.getValue('texture')}
              alt="pattern"
              height={50}
              width={100}
            />
          </HoverCardContent>
        </HoverCard>
      ) : (
        <p className="text-center -ml-10">-</p>
      ),
  },
  {
    accessorKey: 'status',
    header: () => <p className="ml-4">Approval</p>,
    cell: ({ row }) => {
      const val = row.getValue('status');
      return (
        <div
          className={`capitalize py-1 px-2 rounded-full  text-center ${
            val === 'approved'
              ? 'bg-green-500 text-white'
              : val === 'rejected'
              ? 'border-red-600 text-red-600 border-[1px]'
              : 'border-yellow-500 text-yellow-500 border-[1px]'
          }`}
        >
          {val}
        </div>
      );
    },
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const cell = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                console.log('approving for design:');
                handleApproval({
                  client: row.getValue('clientName'),
                  email: row.getValue('email'),
                  color: row.getValue('color'),
                  model: row.getValue('carModel'),
                  approval: true,
                });
                getToast(
                  `Approved ${row.getValue('clientName')} Model`,
                  'success'
                );
              }}
            >
              Approve
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                console.log('approving for design:');
                handleApproval({
                  client: row.getValue('clientName'),
                  email: row.getValue('email'),
                  color: row.getValue('color'),
                  model: row.getValue('carModel'),
                  approval: false,
                });
                getToast(
                  `Rejected ${row.getValue('clientName')} Model`,
                  'failure'
                );
              }}
            >
              Reject
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(cell.email)}
            >
              Copy Email ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

const Datagrid = () => {
  const [data, setData] = React.useState([]);
  const [sorting, setSorting] = React.useState([]);
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      const res = await fetch('/api/cars', {
        method: 'GET',
      });
      let response = await res.json();
      console.log(res);
      if (res.ok) {
        setData(response.data);
      }
      setIsLoading(false);
    };
    getData();
  }, []);

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });
  //   console.log(table.getAllColumns());

  return (
    <div className="w-full h-full overflow-hidden bg-white dark:bg-[#1b1b1b] text-black dark:text-white">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter Clients..."
          value={table.getColumn('clientName')?.getFilterValue() ?? ''}
          onChange={(event) =>
            table.getColumn('clientName')?.setFilterValue(event.target.value)
          }
          className="max-w-sm bg-white"
        />

        {/* <Input
          placeholder="Filter client names or emails..."
          value={filterValue}
          onChange={(event) => {
            const value = event.target.value;
            setFilterValue(value); // Assuming you have a state to store the filter value
            table.getColumn('clientName')?.setFilterValue(value);
            table.getColumn('email')?.setFilterValue(value);
          }}
          className="max-w-sm"
        /> */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border dark:border-gray-600 overflow-scroll max-h-[70vh]">
        <Table className="dark:border-gray-700">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="dark:border-gray-600">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="max-h-64 overflow-y-auto">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  className="dark:border-gray-700"
                  key={row._id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  {/* No results. */}
                  {isLoading ? <CircularProgress /> : 'No Results'}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of {}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Datagrid;
