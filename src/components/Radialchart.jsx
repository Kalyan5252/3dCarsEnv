'use client';
import React, { useState, useEffect } from 'react';
import { TrendingUp } from 'lucide-react';
import {
  LabelList,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

import { Skeleton } from '@/components/ui/skeleton';

// const chartData = [
//   { browser: 'chrome', visitors: 275, fill: 'hsl(var(--chart-4))' },
//   { browser: 'safari', visitors: 200, fill: 'hsl(var(--chart-1))' },
//   { browser: 'firefox', visitors: 187, fill: 'hsl(var(--chart-2))' },
// ];

// const chartData = [
//   {
//     name: 'metallic',
//     value: 20,
//     label: 'metallic',
//     fill: 'hsl(var(--chart-1))',
//   },
//   {
//     name: 'matte',
//     value: 10,
//     label: 'matte',
//     fill: 'hsl(var(--chart-2))',
//   },
//   {
//     name: 'carbon',
//     value: 12,
//     label: 'carbon',
//     fill: 'hsl(var(--chart-5))',
//   },
//   {
//     name: 'others',
//     value: 4,
//     label: 'others',
//     fill: 'hsl(var(--chart-4))',
//   },
// ];

const fills = [
  'hsl(var(--chart-1))',
  'hsl(var(--chart-2))',
  'hsl(var(--chart-5))',
  'hsl(var(--chart-4))',
];

const chartConfig = {
  materials: {
    label: 'Materials',
  },
  others: {
    label: 'others',
    color: 'hsl(var(--chart-4))',
  },
  metallic: {
    label: 'metallic',
    color: 'hsl(var(--chart-1))',
  },
  matte: {
    label: 'matte',
    color: 'hsl(var(--chart-5))',
  },
  carbon: {
    label: 'carbon',
    color: 'hsl(var(--chart-3))',
  },
};

const Radialchart = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);
  // const [data, setData] = useState([]);
  const [chartData, setChartData] = useState([]);

  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await fetch('/api/cars', {
  //       method: 'GET',
  //     });
  //     let response = await res.json();
  //     if (res.ok) {
  //       setData(response.data);
  //     }
  //   };
  //   getData();
  // }, []);

  useEffect(() => {
    if (data.length !== 0) {
      const carMaterialCounts = data.reduce((acc, item) => {
        acc[item.material] = (acc[item.material] || 0) + 1;
        return acc;
      }, {});

      const MATERIALS_CHART_DATA = Object.keys(carMaterialCounts).map(
        (key, i) => ({
          name: key,
          value: carMaterialCounts[key],
          label: key,
          fill: fills[i % fills.length],
        })
      );
      setChartData(MATERIALS_CHART_DATA);
      // console.log(MATERIALS_CHART_DATA);
      setIsLoading(false);
    }
  }, [data]);

  return (
    <>
      <div className="max-h-[20rem] w-full">
        <Card className="flex flex-col  bbg-white dark:">
          <CardHeader className="items-center pb-0">
            <CardTitle className="text_gradient">Body</CardTitle>
            <CardDescription>Metallic | Matte | Carbon</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 max-h-[16rem]">
            {isLoading ? (
              <div className="flex items-center mt-12 mb-12 flex-col gap-4">
                <Skeleton className="h-[150px] w-[150px] rounded-full" />
              </div>
            ) : (
              <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square max-h-[14rem]"
              >
                <ResponsiveContainer>
                  <RadialBarChart
                    key={JSON.stringify(chartData)}
                    data={chartData}
                    startAngle={-90}
                    endAngle={380}
                    innerRadius={30}
                    outerRadius={110}
                    animationDelay={5000}
                    animationDuration={10000} // Animation duration in milliseconds
                    animationEasing="ease-in"
                  >
                    <ChartTooltip
                      cursor={false}
                      content={
                        <ChartTooltipContent hideLabel nameKey="label" />
                      }
                    />
                    <RadialBar dataKey="value">
                      <LabelList
                        position="insideStart"
                        dataKey="value"
                        className="fill-white capitalize mix-blend-luminosity"
                        fontSize={11}
                      />
                    </RadialBar>
                  </RadialBarChart>
                </ResponsiveContainer>
              </ChartContainer>
            )}
          </CardContent>
          {/* <CardFooter className="flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 font-medium leading-none">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            Showing total visitors for the last 6 months
          </div>
        </CardFooter> */}
        </Card>
      </div>
    </>
  );
};

export default Radialchart;
