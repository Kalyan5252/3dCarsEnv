'use client';
import { useEffect, useState } from 'react';
import { DataGrid, useGridApiRef } from '@mui/x-data-grid';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Datagrid from '@/components/Datagrid';

import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

const dashboard = () => {
  const router = useRouter();
  // const apiRef = useGridApiRef();
  const [rows, setRows] = useState([]);
  // const getData = async () => {
  //   const res = await fetch('/api/cars', {
  //     method: 'GET',
  //   });
  //   let data = await res.json();
  //   data = data.data;
  //   if (res.ok) {
  //     setRows(data);
  //   }
  // };

  // useEffect(() => {
  //   console.log(rows);
  // }, [rows]);

  const verify = async () => {
    console.log(document.cookie.split(';'));
    const res = await fetch('/api/auth/', {
      method: 'GET',
    });
    if (!res.ok) {
      router.push('/login');
    }
  };

  const handleLogout = async () => {
    await fetch('/api/auth/logout');
    verify();
  };

  // useEffect(() => {
  //   verify();
  //   getData();
  // }, []);

  const DATA = [
    {
      _id: '66bd8e7c96bc9823d6f33533',
      clientName: 'canadey',
      carModel: 'corvette',
      color: '#00fc20',
      material: 'metallic',
      createdAt: '2024-08-15T05:13:32.955Z',
      updatedAt: '2024-08-15T05:13:32.955Z',
      __v: 0,
    },
    {
      _id: '66bcecc9fd7c960777be908a',
      clientName: 'sunil',
      carModel: 'audiCoupe',
      color: '#a14a28',
      material: 'carbon',
      createdAt: '2024-08-14T17:43:37.985Z',
      updatedAt: '2024-08-14T17:43:37.985Z',
      __v: 0,
    },
    {
      _id: '66bcec80fd7c960777be9088',
      clientName: 'Keras',
      carModel: 'audiCoupe',
      color: '#a14a28',
      material: 'matte',
      createdAt: '2024-08-14T17:42:24.636Z',
      updatedAt: '2024-08-14T17:42:24.636Z',
      __v: 0,
    },
    {
      _id: '66bcebdafd7c960777be9085',
      clientName: 'Keras',
      carModel: 'audiCoupe',
      color: '#611f1f',
      material: 'Select Body Material',
      createdAt: '2024-08-14T17:39:38.571Z',
      updatedAt: '2024-08-14T17:39:38.571Z',
      __v: 0,
    },
    {
      _id: '66bcca3cec046a99d8c681af',
      clientName: 'Goerge',
      carModel: 'corvette',
      color: '#480563',
      material: 'metallic',
      createdAt: '2024-08-14T15:16:12.096Z',
      updatedAt: '2024-08-14T15:16:12.096Z',
      __v: 0,
    },
    {
      _id: '667e3051abcdfed5b81afede',
      clientName: 'Mr.K',
      carModel: 'hyundai',
      color: '#000000',
      material: 'Select Body Material',
      createdAt: '2024-06-28T03:38:57.235Z',
      updatedAt: '2024-06-28T03:38:57.235Z',
      __v: 0,
    },
    {
      _id: '667e304fabcdfed5b81afedc',
      clientName: 'Mr.K',
      carModel: 'hyundai',
      color: '#000000',
      material: 'Select Body Material',
      createdAt: '2024-06-28T03:38:55.391Z',
      updatedAt: '2024-06-28T03:38:55.391Z',
      __v: 0,
    },
    {
      _id: '667bdad9cb54b714a7c2e493',
      clientName: 'pavan',
      carModel: 'corvette',
      color: '#6e6c08',
      material: 'carbon',
      createdAt: '2024-06-26T09:09:45.361Z',
      updatedAt: '2024-06-26T09:09:45.361Z',
      __v: 0,
    },
    {
      _id: '667bd9eccb54b714a7c2e481',
      clientName: 'suneel',
      carModel: 'corvette',
      color: '#e01b1b',
      material: 'metallic',
      createdAt: '2024-06-26T09:05:48.017Z',
      updatedAt: '2024-06-26T09:05:48.017Z',
      __v: 0,
    },
    {
      _id: '6670403bd68949e4f30928f1',
      clientName: 'Vasavi',
      carModel: 'rrModel',
      color: '#1b061b',
      material: 'Select Body Material',
      createdAt: '2024-06-17T13:55:07.018Z',
      updatedAt: '2024-06-17T13:55:07.018Z',
      __v: 0,
    },
    {
      _id: '66703ff9d68949e4f30928ef',
      clientName: 'Sufiya',
      carModel: 'hyundai',
      color: '#11082c',
      material: 'metallic',
      createdAt: '2024-06-17T13:54:01.949Z',
      updatedAt: '2024-06-17T13:54:01.949Z',
      __v: 0,
    },
    {
      _id: '666f1a4a979e38bcfef880c6',
      clientName: 'dfghjkhg',
      carModel: 'audiCoupe',
      color: '#383838',
      material: 'matte',
      createdAt: '2024-06-16T17:00:58.106Z',
      updatedAt: '2024-06-16T17:00:58.106Z',
      __v: 0,
    },
    {
      _id: '666b0258c2f7b7a502159a6a',
      clientName: 'presentative ',
      carModel: 'corvette',
      color: '#d30d0d',
      material: 'metallic',
      createdAt: '2024-06-13T14:29:44.016Z',
      updatedAt: '2024-06-13T14:29:44.016Z',
      __v: 0,
    },
    {
      _id: '666aad01a0e20d627c91d562',
      clientName: 'vamsi',
      carModel: 'audiCoupe',
      color: '#df0000',
      material: 'metallic',
      createdAt: '2024-06-13T08:25:37.854Z',
      updatedAt: '2024-06-13T08:25:37.854Z',
      __v: 0,
    },
    {
      _id: '66686c10c54774f23177a904',
      clientName: 'Project K',
      carModel: 'rrModel',
      color: '#474747',
      material: 'matte',
      createdAt: '2024-06-11T15:24:00.758Z',
      updatedAt: '2024-06-11T15:24:00.758Z',
      __v: 0,
    },
    {
      _id: '666854f5e34bf79d6bc02b77',
      clientName: 'Kalyan',
      carModel: 'rrModel',
      color: '#272727',
      material: 'matte',
      createdAt: '2024-06-11T13:45:25.396Z',
      updatedAt: '2024-06-11T13:45:25.396Z',
      __v: 0,
    },
    {
      _id: '66685358e34bf79d6bc02b75',
      clientName: 'Linus',
      carModel: 'rrModel',
      color: '#350046',
      material: 'matte',
      createdAt: '2024-06-11T13:38:32.647Z',
      updatedAt: '2024-06-11T13:38:32.647Z',
      __v: 0,
    },
    {
      _id: '6668531ee34bf79d6bc02b70',
      clientName: 'Alex',
      carModel: 'audiCoupe',
      color: '#fff',
      material: 'carbon',
      createdAt: '2024-06-11T13:37:34.220Z',
      updatedAt: '2024-06-11T13:37:34.220Z',
      __v: 0,
    },
    {
      _id: '66684ec5b6de2644efe9eca9',
      clientName: 'trail1',
      carModel: 'corvette',
      color: '#ffc900',
      material: 'metallic',
      createdAt: '2024-06-11T13:19:01.122Z',
      updatedAt: '2024-06-11T13:19:01.122Z',
      __v: 0,
    },
  ];

  // {
  //   id: 'm5gr84i9',
  //   amount: 316,
  //   status: 'success',
  //   email: 'ken99@yahoo.com',
  // },

  // {
  //   _id: '66bd8e7c96bc9823d6f33533',
  //   clientName: 'canadey',
  //   carModel: 'corvette',
  //   color: '#00fc20',
  //   material: 'metallic',
  //   createdAt: '2024-08-15T05:13:32.955Z',
  //   updatedAt: '2024-08-15T05:13:32.955Z',
  //   __v: 0,
  //   email: 'canadey@gmail.com',
  // },

  // useEffect(() => {
  //   if (apiRef.current) {
  //     // setTimeout(() => {
  //     //   apiRef.current.autosizeColumns({ expand });
  //     // }, 1000);
  //     apiRef.current.autosizeColumns({ expand });
  //   }
  // });

  const columns = [
    {
      field: 'clientName',
      headerName: 'Client Name',
      headerClassName: 'super-app-theme--header',
      cellClassName: 'super-app-theme--cell cell_layout',
    },
    {
      field: 'createdAt',
      headerName: 'Date',
      headerClassName: 'super-app-theme--header',
      cellClassName: 'super-app-theme--cell cell_layout',
      renderCell: (el) => {
        const date = new Date(el.value);
        const day = date.getDate();
        const month = date.getMonth();
        const Year = date.getFullYear();
        return `${String(day).padStart(2, '0')}/${String(month).padStart(
          2,
          '0'
        )}/${Year}`;

        // return date;
      },
    },
    {
      field: 'carModel',
      headerName: 'Car Model',
      headerClassName: 'super-app-theme--header',
      cellClassName: 'super-app-theme--cell cell_layout',
    },
    {
      field: 'material',
      headerName: 'Body Material',
      headerClassName: 'super-app-theme--header',
      cellClassName: 'super-app-theme--cell cell_layout',
    },
    {
      field: 'color',
      headerName: 'Paint',
      headerClassName: 'super-app-theme--header',
      cellClassName: 'super-app-theme--cell cell_layout',
    },
  ];
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="bg-white dark:bg-[#1b1b1b] h-screen max-h-screen overflow-hidden p-4 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <Link href="/3dscene" className="w-fit">
            <button className="font-medium transition-all text-center bg-gray-700 dark:bg-[#1b1b1b] hover_gradient text-white outline outline-gray-700 hover:outline-offset-4 px-4 py-3 hover:bg-gray-600">
              Go to 3D Environment
            </button>
          </Link>
          <Link href="/analytics" className="w-fit">
            <button className="font-medium transition-all text-center bg-gray-700 dark:bg-[#1b1b1b] hover_gradient text-white outline outline-gray-700 hover:outline-offset-4 px-4 py-3 hover:bg-gray-600">
              Go to Analytics
            </button>
          </Link>
          <Link href="/3dscene" className="w-fit">
            <button
              className="font-medium transition-all text-center bg-gray-700 dark:bg-[#1b1b1b] hover:bg-red-700 dark:hover:bg-red-700 outline outline-gray-700 hover:outline-red-700 text-white hover:outline-offset-4 px-4 py-3"
              onClick={handleLogout}
            >
              Log out
            </button>
          </Link>
        </div>
        <div className="flex items-center space-x-2">
          <Switch
            id="airplane-mode"
            checked={isDark}
            onCheckedChange={(e) => setIsDark(!isDark)}
          />
          <Label className={`${!isDark ? 'text-black' : 'text-white'}`}>
            {!isDark ? 'Light Mode' : 'Dark Mode'}
            {/* {`${mode} Mode`} */}
          </Label>
        </div>
      </div>
      <div className="bg-white dark:[#1b1b1b] h-full" style={{ width: '100%' }}>
        {/* <DataGrid
          apiRef={apiRef}
          autosizeOnMount={true}
          columns={columns}
          rows={rows}
          disableColumnSorting={true}
          disableColumnSelector={true}
          disableColumnFilter={true}
          disableColumnMenu={true}
          // hideFooter={true}
          getRowId={(el) => el._id}
        /> */}
        <Datagrid />
      </div>
    </div>
  );
};

export default dashboard;
