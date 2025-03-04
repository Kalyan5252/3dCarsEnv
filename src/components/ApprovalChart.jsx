'use client';
import React from 'react';
import { TrendingUp } from 'lucide-react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
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
import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const chartData = [
  { month: 'Approved', desktop: 186, mobile: 80 },
  { month: 'Rejected', desktop: 305, mobile: 200 },
  { month: 'Pending', desktop: 237, mobile: 120 },
];
const chartConfig = {
  title: {
    label: '',
    color: 'hsl(var(--chart-1))',
  },
  label: {
    label: '',
    color: 'hsl(var(--background))',
  },
  value: {
    color: 'hsl(var(--background))',
  },
};

const fills = [
  'hsl(var(--chart-1))',
  'hsl(var(--chart-2))',
  'hsl(var(--chart-3))',
  'hsl(var(--chart-4))',
  'hsl(var(--chart-5))',
];

const ApprovalChart = ({}) => {
  // let APPROVED_CHART_DATA = [];
  const [APPROVED_CHART_DATA, setAPPROVED_CHART_DATA] = React.useState([
    { title: 'Approved', value: 0, mobile: 0 },
    { title: 'Rejected', value: 0, mobile: 0 },
    { title: 'Pending', value: 0, mobile: 0 },
  ]);

  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch('/api/cars', {
        method: 'GET',
      });
      let response = await res.json();
      if (res.ok) {
        // setData(response.data);
        // console.log(data);
        const approvedData = response.data.reduce((acc, item) => {
          acc[item.status] = (acc[item.status] || 0) + 1;
          return acc;
        }, {});
        const changedData = Object.keys(approvedData).map((key, i) => ({
          title: key,
          value: approvedData[key],
          label: key,
          // fill: fills[i % fills.length],
        }));
        setAPPROVED_CHART_DATA(changedData);
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  // const APPROVED_CHART_DATA = [
  //   {
  //     title: 'approved',
  //     value: 24,
  //     label: 'approved',
  //   },
  //   {
  //     title: 'pending',
  //     value: 12,
  //     label: 'pending',
  //   },
  //   {
  //     title: 'rejected',
  //     value: 10,
  //     label: 'rejected',
  //   },
  // ];
  // console.log(APPROVED_CHART_DATA);

  // const APPROVED_CHART_DATA = React.useMemo(() => ({
  //   name:
  // }))

  return (
    <div className="h-full w-full">
      <Card className="w-full h-full bg-white dark:">
        <CardHeader>
          <CardTitle className="text_gradient">Approval Status</CardTitle>
          <CardDescription>January - August 2024</CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex flex-col gap-4">
              <Skeleton className="h-14 w-[350px]" />
              <Skeleton className="h-10 w-[250px]" />
              <Skeleton className="h-5 w-[250px]" />
            </div>
          ) : (
            <ChartContainer className="max-h-[25vh] w-3/4" config={chartConfig}>
              {/* <ResponsiveContainer> */}
              <BarChart
                accessibilityLayer
                data={APPROVED_CHART_DATA}
                layout="vertical"
                margin={{
                  right: 24,
                }}
                key={JSON.stringify(APPROVED_CHART_DATA)}
                animationDelay={5000}
                animationDuration={5000} // Animation duration in milliseconds
                animationEasing="ease-in-out"
              >
                {/* <CartesianGrid horizontal={false} /> */}
                <YAxis
                  dataKey="title"
                  type="category"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                  hide
                />
                <XAxis dataKey="value" type="number" hide />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="line" />}
                />
                <Bar
                  dataKey="value"
                  layout="vertical"
                  fill="hsl(var(--chart-5))"
                  radius={4}
                >
                  <LabelList
                    dataKey="title"
                    position="insideLeft"
                    offset={8}
                    className="fill-[--color-label]"
                    fontSize={12}
                  />
                  <LabelList
                    dataKey="value"
                    position="right"
                    offset={8}
                    className="fill-gray-800 dark:fill-white"
                    fontSize={12}
                  />
                </Bar>
              </BarChart>
              {/* </ResponsiveContainer> */}
            </ChartContainer>
          )}
        </CardContent>
        {/* <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 font-medium leading-none">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            Showing total visitors for the last 6 months
          </div>
        </CardFooter> */}
      </Card>
    </div>
  );
};

export default ApprovalChart;
