'use client';
import React, { useState } from 'react';
import { TrendingUp } from 'lucide-react';
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from 'recharts';
import { Skeleton } from '@/components/ui/skeleton';

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
  { day: '1-4', desktop: 3 },
  { day: '5-9', desktop: 15 },
  { day: '10-14', desktop: 1 },
  { day: '15-19', desktop: 7 },
  { day: '20-25', desktop: 0 },
  { day: '25-30', desktop: 0 },
];
const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'hsl(var(--chart-2))',
  },
  mobile: {
    label: 'Mobile',
    color: 'hsl(var(--chart-2))',
  },
};

const Linechart = () => {
  const totalCounts = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.desktop, 0);
  }, [chartData]);

  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    setIsLoading(false);
  });
  return (
    <div className="w-full max-h-[50vh]">
      <Card className="bg-white dark: h-full">
        <CardHeader>
          <CardTitle className="text_gradient">Day Wise Analysis</CardTitle>
          <CardDescription>
            Total of {totalCounts} Proposals of August 2024
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex flex-col gap-4">
              <Skeleton className="h-14 w-[350px]" />
              <Skeleton className="h-10 w-[250px]" />
              <Skeleton className="h-5 w-[250px]" />
            </div>
          ) : (
            <ChartContainer
              className="max-h-[24vh] w-full"
              config={chartConfig}
            >
              <LineChart
                accessibilityLayer
                data={chartData}
                margin={{
                  top: 20,
                  left: 12,
                  right: 12,
                }}
              >
                {/* <CartesianGrid vertical={false} /> */}
                <XAxis
                  dataKey="day"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={10}
                  tickFormatter={(value) => value}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="line" />}
                />
                <Line
                  dataKey="desktop"
                  type="natural"
                  stroke="var(--color-desktop)"
                  strokeWidth={2}
                  dot={{
                    fill: 'var(--color-desktop)',
                  }}
                  activeDot={{
                    r: 6,
                  }}
                >
                  <LabelList
                    position="top"
                    offset={12}
                    className="fill-foreground"
                    fontSize={12}
                  />
                </Line>
              </LineChart>
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

export default Linechart;
