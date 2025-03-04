'use client';
import React, { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { TrendingUp } from 'lucide-react';
import { Label, Pie, PieChart, ResponsiveContainer } from 'recharts';
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

const chartData = [
  { label: 'hyundai', visitors: 0, fill: 'hsl(var(--chart-1))' },
  { label: 'audiCoupe', visitors: 0, fill: 'hsl(var(--chart-2))' },
  { label: 'Corvette', visitors: 0, fill: 'hsl(var(--chart-3))' },
  { label: 'rrModal', visitors: 0, fill: 'hsl(var(--chart-4))' },
  // { label: 'edge', visitors: 173, fill: 'var(--color-edge)' },
];

const chartConfig = {
  visitors: {
    label: 'Visitors',
  },
  hyundai: {
    label: 'hyundai',
    color: 'hsl(var(--chart-1))',
  },
  audiCoupe: {
    label: 'audiCoupe',
    color: 'hsl(var(--chart-2))',
  },
  corvette: {
    label: 'Corvette',
    color: 'hsl(var(--chart-3))',
  },
  rrModel: {
    label: 'Range Rover',
    color: 'hsl(var(--chart-4))',
  },
  // other: {
  //   label: 'Other',
  //   color: 'hsl(var(--chart-5))',
  // },
};

const Piechart = ({}) => {
  // const carModelCounts = data.reduce((acc, item) => {
  //   acc[item.carModel] = (acc[item.carModel] || 0) + 1;
  //   return acc;
  // }, {});
  // console.log(data);
  const [isLoading, setIsLoading] = useState(true);
  const fills = [
    'hsl(var(--chart-1))',
    'hsl(var(--chart-2))',
    'hsl(var(--chart-3))',
    'hsl(var(--chart-4))',
    'hsl(var(--chart-5))',
  ];
  const [MODELS_CHART_DATA, setMODELS_CHART_DATA] = useState([{}]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('/api/cars', {
        method: 'GET',
      });
      let response = await res.json();
      if (res.ok) {
        // setData(response.data);
        console.log(response.data);
        const approvedData = response.data.reduce((acc, item) => {
          acc[item.carModel] = (acc[item.carModel] || 0) + 1;
          return acc;
        }, {});
        const changedData = Object.keys(approvedData).map((key, i) => ({
          name: key,
          value: approvedData[key],
          label: key,
          fill: fills[i % fills.length],
        }));
        setMODELS_CHART_DATA(changedData);
        // console.log(MODELS_CHART_DATA);
        setIsLoading(false);
      }
    };
    getData();
  }, []);
  const totalVisitors = React.useMemo(() => {
    return MODELS_CHART_DATA.reduce((acc, curr) => acc + curr.value, 0);
  });
  // Convert counts to data array for the chart
  // const MODELS_CHART_DATA = Object.keys(carModelCounts).map((key, i) => ({
  //   name: key,
  //   value: carModelCounts[key],
  //   label: key,
  //   fill: fills[i % fills.length],
  // }));
  // console.log('chart Data1:', MODELS_CHART_DATA);

  // React.useEffect(() => {});

  return (
    <div className="h-full">
      <Card className="flex flex-col bg-white dark:">
        <CardHeader className="items-center pb-0">
          <CardTitle className="text_gradient">Car Models Chart</CardTitle>
          <CardDescription>January - August 2024</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pb-0 h-[30rem]">
          {isLoading ? (
            <div className="flex items-center mt-12 mb-12 flex-col gap-4">
              <Skeleton className="h-[150px] w-[150px] rounded-full" />
            </div>
          ) : (
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-[250px]"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={MODELS_CHART_DATA}
                  dataKey="value"
                  nameKey="label"
                  innerRadius={60}
                  strokeWidth={5}
                >
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="dark:fill-white fill-gray-700 text-3xl font-bold"
                            >
                              {totalVisitors.toLocaleString()}
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 24}
                              className="dark:fill-gray-200 fill-gray-900"
                            >
                              Clients
                            </tspan>
                          </text>
                        );
                      }
                    }}
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
          )}
        </CardContent>
      </Card>
    </div>
    //   <CardFooter className="flex-col gap-2 text-sm">
    //     <div className="flex items-center gap-2 font-medium leading-none">
    //       Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
    //     </div>
    //     <div className="leading-none text-muted-foreground">
    //       Showing total visitors for the last 6 months
    //     </div>
    //   </CardFooter>
    //
  );
};

export default Piechart;
