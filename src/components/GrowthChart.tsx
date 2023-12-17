import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

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
  let cardColor:string, headingColor:string, axisColor:string, shadeColor, borderColor;

  cardColor = config.colors.cardColor;
  headingColor = config.colors.headingColor;
  axisColor = config.colors.axisColor;
  borderColor = config.colors.borderColor;

  useEffect(() => {
     const growthChartOptions = {
    series: [78],
    labels: ['Growth'],
    chart: {
      height: 240,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        size: 150,
        offsetY: 10,
        startAngle: -150,
        endAngle: 150,
        hollow: {
          size: '55%',
        },
        track: {
          background: 'red', // Replace 'cardColor' with your variable or color value
          strokeWidth: '100%',
        },
        dataLabels: {
          name: {
            offsetY: 15,
            color: 'blue', // Replace 'headingColor' with your variable or color value
            fontSize: '15px',
            fontWeight: '500',
            fontFamily: 'Public Sans',
          },
          value: {
            offsetY: -25,
            color: 'blue', // Replace 'headingColor' with your variable or color value
            fontSize: '22px',
            fontWeight: '500',
            fontFamily: 'Public Sans',
          },
        },
      },
    },
    colors: ['green'], // Replace 'config.colors.primary' with your variable or color value
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        shadeIntensity: 0.5,
        gradientToColors: ['green'], // Replace 'config.colors.primary' with your variable or color value
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 0.6,
        stops: [30, 70, 100],
      },
    },
    stroke: {
      dashArray: 5,
    },
    grid: {
      padding: {
        top: -35,
        bottom: -10,
      },
    },
    states: {
      hover: {
        filter: {
          type: 'none',
        },
      },
      active: {
        filter: {
          type: 'none',
        },
      },
    },
  };
  //  const growthChartOptions = {
  //   series: [78],
  //   labels: ['Growth'],
  //   chart: {
  //     height: 240,
  //     type: 'radialBar'
  //   },
  //   plotOptions: {
  //     radialBar: {
  //       size: 150,
  //       offsetY: 10,
  //       startAngle: -150,
  //       endAngle: 150,
  //       hollow: {
  //         size: '55%'
  //       },
  //       track: {
  //         background: cardColor,
  //         strokeWidth: '100%'
  //       },
  //       dataLabels: {
  //         name: {
  //           offsetY: 15,
  //           color: headingColor,
  //           fontSize: '15px',
  //           fontWeight: '500',
  //           fontFamily: 'Public Sans'
  //         },
  //         value: {
  //           offsetY: -25,
  //           color: headingColor,
  //           fontSize: '22px',
  //           fontWeight: '500',
  //           fontFamily: 'Public Sans'
  //         }
  //       }
  //     }
  //   },
  //   colors: [config.colors.primary],
  //   fill: {
  //     type: 'gradient',
  //     gradient: {
  //       shade: 'dark',
  //       shadeIntensity: 0.5,
  //       gradientToColors: [config.colors.primary],
  //       inverseColors: true,
  //       opacityFrom: 1,
  //       opacityTo: 0.6,
  //       stops: [30, 70, 100]
  //     }
  //   },
  //   stroke: {
  //     dashArray: 5
  //   },
  //   grid: {
  //     padding: {
  //       top: -35,
  //       bottom: -10
  //     }
  //   },
  //   states: {
  //     hover: {
  //       filter: {
  //         type: 'none'
  //       }
  //     },
  //     active: {
  //       filter: {
  //         type: 'none'
  //       }
  //     }
  //   }
  // };

    if (growthChartEl.current) {
      const growthChart = new ApexCharts(growthChartEl.current, growthChartOptions);
      growthChart.render();
    }
  }, []);

  return <div ref={growthChartEl} id="growthChart" />;
};

export default GrowthChart;
