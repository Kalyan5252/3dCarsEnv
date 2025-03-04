'use client';
import React, { useState, useEffect } from 'react';
import { TrendingUp } from 'lucide-react';
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from 'recharts';

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

const chartConfig = {
  value: {
    label: 'Value',
    color: 'hsl(var(--chart-2))',
  },
};

const Barchart = () => {
  const [chartData, setChartData] = useState([
    { index: 0, month: 'January', value: 186 },
    { index: 1, month: 'February', value: 305 },
    { index: 2, month: 'March', value: 237 },
    { index: 3, month: 'April', value: 73 },
    { index: 4, month: 'May', value: 209 },
    { index: 5, month: 'June', value: 214 },
    { index: 6, month: 'July', value: 214 },
    { index: 7, month: 'August', value: 214 },
    { index: 8, month: 'September', value: 214 },
    { index: 9, month: 'October', value: 214 },
    { index: 10, month: 'Novomber', value: 214 },
    { index: 11, month: 'December', value: 214 },
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
        // const approvedData = response.data.reduce((acc, item) => {
        //   acc[item.status] = (acc[item.status] || 0) + 1;
        //   return acc;
        // }, {});
        const approvedData = [
          { index: 0, month: 'January', value: 0 },
          { index: 1, month: 'February', value: 0 },
          { index: 2, month: 'March', value: 0 },
          { index: 3, month: 'April', value: 0 },
          { index: 4, month: 'May', value: 0 },
          { index: 5, month: 'June', value: 0 },
          { index: 6, month: 'July', value: 0 },
          { index: 7, month: 'August', value: 0 },
          { index: 8, month: 'September', value: 0 },
          { index: 9, month: 'October', value: 0 },
          { index: 10, month: 'Novomber', value: 0 },
          { index: 11, month: 'December', value: 0 },
        ];
        response.data.map((ele) => {
          const dd = new Date(ele.createdAt);
          approvedData[dd.getMonth()].value++;
        });
        // const changedData = Object.keys(approvedData).map((key, i) => ({
        //   title: key,
        //   value: approvedData[key],
        //   label: key,
        //   // fill: fills[i % fills.length],
        // }));
        // setAPPROVED_CHA  RT_DATA(changedData);
        setChartData(approvedData);
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  const totalCount = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.value, 0);
  }, [chartData]);

  // const totalVisitors = React.useMemo(() => {
  //   return MODELS_CHART_DATA.reduce((acc, curr) => acc + curr.value, 0);
  // });

  return (
    <div className="max-h-[50vh]">
      <Card className="bg-white dark: max-h-[50vh]">
        <CardHeader>
          <CardTitle className="text_gradient">Monthly Analysis</CardTitle>
          <CardDescription>
            Total of {totalCount} Proposals of 2024
          </CardDescription>
        </CardHeader>
        <CardContent className="max-h-[50vh] h-[30vh]">
          {isLoading ? (
            <div className="flex items-end h-full gap-4">
              <Skeleton className="h-full w-[50px]" />
              <Skeleton className="h-1/2 w-[50px]" />
              <Skeleton className="h-3/4 w-[50px]" />
              <Skeleton className="h-1/2 w-[50px]" />
              <Skeleton className="h-1/4 w-[50px]" />
              <Skeleton className="h-2/6 w-[50px]" />
              <Skeleton className="h-4/5 w-[50px]" />
              <Skeleton className="h-full w-[50px]" />
            </div>
          ) : (
            <ChartContainer
              className="max-h-[25vh] w-full"
              config={chartConfig}
            >
              <BarChart
                accessibilityLayer
                data={chartData}
                margin={{
                  top: 20,
                }}
                // animationDelay={10000}
                animationDuration={1000} // Animation duration in milliseconds
                animationEasing="ease-in"
              >
                {/* <CartesianGrid vertical={false} /> */}
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Bar dataKey="value" fill="#219fbc" radius={8}>
                  <LabelList
                    position="top"
                    offset={12}
                    className="fill-white"
                    fontSize={12}
                  />
                </Bar>
              </BarChart>
            </ChartContainer>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Barchart;
