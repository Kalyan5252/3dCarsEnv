'use client';
import Reac, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { get } from 'http';

// import { PieChart } from '@mui/x-charts/PieChart';
import Piechart from '@/components/Piechart';
import { BarChart } from '@mui/x-charts/BarChart';
import Radialchart from '@/components/Radialchart';
import Linechart from '@/components/Linechart';
import ApprovalChart from '@/components/ApprovalChart';
import TickPlacementBars from '@/components/Barchart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

const analytics = () => {
  const router = useRouter();
  const [data, setData] = useState([]);

  const verify = async () => {
    // console.log(document.cookie.split(';'));
    const res = await fetch('/api/auth/', {
      method: 'GET',
    });
    if (!res.ok) {
      router.push('/login');
    }
  };

  const getData = async () => {
    const res = await fetch('/api/cars', {
      method: 'GET',
    });
    let response = await res.json();
    if (res.ok) {
      setData(response.data);
      // console.log(data);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/auth/logout');
    verify();
  };

  useEffect(() => {
    verify();
    getData();
  }, []);

  // const data = [
  //   {
  //     _id: '66684ec5b6de2644efe9eca9',
  //     clientName: 'trail1',
  //     carModel: 'corvette',
  //     color: '#ffc900',
  //     material: 'metallic',
  //   },
  //   {
  //     _id: '6668531ee34bf79d6bc02b70',
  //     clientName: 'Alex',
  //     carModel: 'audiCoupe',
  //     color: '#fff',
  //     material: 'carbon',
  //   },
  //   {
  //     _id: '66685358e34bf79d6bc02b75',
  //     clientName: 'Linus',
  //     carModel: 'rrModel',
  //     color: '#350046',
  //     material: 'matte',
  //   },
  //   {
  //     _id: '666854f5e34bf79d6bc02b77',
  //     clientName: 'Kalyan',
  //     carModel: 'rrModel',
  //     color: '#272727',
  //     material: 'matte',
  //   },
  //   {
  //     _id: '66686c10c54774f23177a904',
  //     clientName: 'Project K',
  //     carModel: 'rrModel',
  //     color: '#474747',
  //     material: 'matte',
  //   },
  //   {
  //     _id: '666aad01a0e20d627c91d562',
  //     clientName: 'vamsi',
  //     carModel: 'aud',
  //     color: '#000',
  //     material: 'metallic',
  //   },
  // ];

  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const fills = [
    'hsl(var(--chart-1))',
    'hsl(var(--chart-2))',
    'hsl(var(--chart-5))',
    'hsl(var(--chart-4))',
  ];

  // const carMaterialCounts = data.reduce((acc, item) => {
  //   acc[item.material] = (acc[item.material] || 0) + 1;
  //   return acc;
  // }, {});

  // const [chartData, setChartData] = useState([]);
  // const MATERIALS_CHART_DATA = Object.keys(carMaterialCounts).map((key, i) => ({
  //   name: key,
  //   value: carMaterialCounts[key],
  //   label: key,
  //   fill: fills[i % fills.length],
  // }));

  // setChartData(MATERIALS_CHART_DATA);

  return (
    <div
      className={`${
        isDark ? 'bg-black' : 'bg-white'
      } h-screen overflow-scroll p-4 flex flex-col gap-4`}
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-4 px-4">
          <Link href="/3dscene" className="w-fit">
            <button className="font-medium transition-all text-center bg-gray-700 dark:bg-[#1b1b1b] hover_gradient text-white outline outline-gray-700  hover:outline-offset-4 px-4 py-3">
              Go to 3D Environment
            </button>
          </Link>
          <Link href="/dashboard" className="w-fit">
            <button className="font-medium transition-all text-center bg-gray-700 dark:bg-[#1b1b1b] text-white outline hover_gradient outline-gray-700  hover:outline-offset-4 px-4 py-3">
              Admin Dashboard
            </button>
          </Link>
          <Link href="/3dscene" className="w-fit">
            <button
              className="font-medium transition-all text-center bg-gray-700 dark:bg-[#1b1b1b] hover:bg-red-700 dark:hover:bg-red-700 outline outline-gray-700 hover:outline-red-700 text-white hover:outline-offset-4 px-4 py-3 "
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
      <div className="h-[80vh]" style={{ width: '100%' }}>
        <div className="px-4 grid grid-row-2 w-full gap-2">
          <div className="h-full w-full my_grid1">
            <TickPlacementBars />
            <Linechart />
            {/* <div className="h-full w-full bg-gray-700"></div> */}
          </div>
          <div className="h-full my_grid2">
            {/* <div className="h-full w-full"> */}
            <Piechart data={data} />
            <Radialchart data={data} />
            <ApprovalChart data={data} />
            {/* </div> */}
            {/* <div className="h-full w-full bg-gray-700"></div> */}
          </div>
          {/* <div className="w-full h-full my_grid1">
            
          </div> */}

          {/* <div className="w-full h-full my_grid2">
            <Piechart />

            <div className="h-full w-full anColor shadow-lg chart4 rounded-lg">
              <BarChart
                xAxis={[
                  {
                    scaleType: 'band',
                    data: ['group A', 'group B', 'group C'],
                  },
                ]}
                series={[
                  { data: [4, 3, 5] },
                  { data: [1, 6, 3] },
                  { data: [2, 5, 6] },
                ]}
                width={500}
                height={300}
                sx={{
                  [`.${axisClasses.tickLabel}`]: {
                    fill: '#d0d0d0',
                    color: '#fff',
                  },
                }}
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default analytics;
