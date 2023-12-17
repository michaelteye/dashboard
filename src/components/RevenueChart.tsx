import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const RevenueChart: React.FC = () => {
  const totalRevenueChartEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const totalRevenueChartOptions: ApexCharts.ApexOptions = {
      series: [
        {
          name: '2021',
          data: [18, 7, 15, 29, 18, 12, 9],
        },
        {
          name: '2020',
          data: [-13, -18, -9, -14, -5, -17, -15],
        },
      ],
      chart: {
        height: 300,
        stacked: true,
        type: 'bar',
        toolbar: { show: false },
      },
      // ... (rest of the options)
      // Add the rest of your options here as per your initial provided configuration
    };

    if (totalRevenueChartEl.current) {
      const totalRevenueChart = new ApexCharts(totalRevenueChartEl.current, totalRevenueChartOptions);
      totalRevenueChart.render();
    }
  }, []);

  return <div ref={totalRevenueChartEl} id="totalRevenueChart" />;
};

export default RevenueChart;
