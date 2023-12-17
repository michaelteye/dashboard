import ApexCharts from 'apexcharts';
import { useEffect, useRef } from 'react';
import config from '../config/config';

const ChartComponent = () => {
  const profileReportChartEl = useRef(null);

  useEffect(() => {
    let cardColor, headingColor, axisColor, shadeColor, borderColor;

    // Assuming config is available or imported properly
    cardColor = config.colors.cardColor;
    headingColor = config.colors.headingColor;
    axisColor = config.colors.axisColor;
    borderColor = config.colors.borderColor;

    const profileReportChartConfig = {
      chart: {
        height: 80,
        type: 'line',
        toolbar: {
          show: false
        },
        dropShadow: {
          enabled: true,
          top: 10,
          left: 5,
          blur: 3,
          color: config.colors.warning,
          opacity: 0.15
        },
        sparkline: {
          enabled: true
        }
      },
      grid: {
        show: false,
        padding: {
          right: 8
        }
      },
      colors: [config.colors.warning],
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 5,
        curve: 'smooth'
      },
      series: [
        {
          data: [110, 270, 145, 245, 205, 285]
        }
      ],
      xaxis: {
        show: false,
        lines: {
          show: false
        },
        labels: {
          show: false
        },
        axisBorder: {
          show: false
        }
      },
      yaxis: {
        show: false
      }
    };

    if (profileReportChartEl.current !== null) {
      const profileReportChart = new ApexCharts(profileReportChartEl.current, profileReportChartConfig);
      profileReportChart.render();
    }
  }, []);

  return <div ref={profileReportChartEl} id="profileReportChart"></div>;
};

export default ChartComponent;
