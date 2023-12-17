import ApexCharts from 'apexcharts';
import React, { useEffect, useRef } from 'react';

// Your config object here
let config = {
  colors: {
    primary: '#696cff',
    secondary: '#8592a3',
    success: '#71dd37',
    info: '#03c3ec',
    warning: '#ffab00',
    danger: '#ff3e1d',
    dark: '#233446',
    black: '#000',
    white: '#fff',
    cardColor: '#fff',
    bodyBg: '#f5f5f9',
    bodyColor: '#697a8d',
    headingColor: '#566a7f',
    textMuted: '#a1acb8',
    borderColor: '#eceef1',
    axisColor:'#eceef1'
  }
};

const GrowthChart: React.FC = () => {
  const growthChartEl = useRef<HTMLDivElement>(null);
  const growthChartInstance = useRef<ApexCharts | null>(null);

  useEffect(() => {
    let cardColor, headingColor;

    // Assuming config is available or imported properly
    cardColor = config.colors.cardColor;
    headingColor = config.colors.headingColor;
    // Your options here
    const growthChartOptions = {
      series: [78],
      labels: ['Growth'],
      chart: {
        height: 240,
        type: 'radialBar'
      },
      plotOptions: {
        radialBar: {
          size: 150,
          offsetY: 10,
          startAngle: -150,
          endAngle: 150,
          hollow: {
            size: '55%'
          },
          track: {
            background: cardColor,
            strokeWidth: '100%'
          },
          dataLabels: {
            name: {
              offsetY: 15,
              color: headingColor,
              fontSize: '15px',
              fontWeight: '500',
              fontFamily: 'Public Sans'
            },
            value: {
              offsetY: -25,
              color: headingColor,
              fontSize: '22px',
              fontWeight: '500',
              fontFamily: 'Public Sans'
            }
          }
        }
      },
      colors: [config.colors.primary],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          shadeIntensity: 0.5,
          gradientToColors: [config.colors.primary],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 0.6,
          stops: [30, 70, 100]
        }
      },
      stroke: {
        dashArray: 5
      },
      grid: {
        padding: {
          top: -35,
          bottom: -10
        }
      },
      states: {
        hover: {
          filter: {
            type: 'none'
          }
        },
        active: {
          filter: {
            type: 'none'
          }
        }
      }
    };

    if (growthChartEl.current) {
      if (growthChartInstance.current) {
        growthChartInstance.current.destroy();
        growthChartInstance.current = null;
      }

      growthChartInstance.current = new ApexCharts(growthChartEl.current, growthChartOptions);
      growthChartInstance.current.render();
    }

    return () => {
      if (growthChartInstance.current) {
        growthChartInstance.current.destroy();
        growthChartInstance.current = null;
      }
    };
  }, []);

  return <div ref={growthChartEl} id="growthChart" />;
};

export default GrowthChart;
