const ApexCharts = require('apexcharts')
// ——————————————————————————————————————————————————————————————————————————
// —————————————————————————————— Product ———————————————————————————————————
// ——————————————————————————————————————————————————————————————————————————
let dataN = JSON.parse(localStorage.getItem('dataN')) || [];
let dataS = JSON.parse(localStorage.getItem('dataS')) || [];
let dataP = JSON.parse(localStorage.getItem('dataP')) || [];

function addData() {
  const PP = document.querySelector('#productPurchases');
  const PS = document.querySelector('#productSales');
  const PN = document.querySelector('#productName');

  dataN.push(PN.value);
  dataS.push(PS.value);
  dataP.push(PP.value);
  
  localStorage.setItem('dataN', JSON.stringify(dataN));
  localStorage.setItem('dataS', JSON.stringify(dataS));
  localStorage.setItem('dataP', JSON.stringify(dataP));

  PP.value = "";
  PS.value = "";
  PN.value = "";
}

const reg1 = new Set();
const reg2 = new Set();
const reg3 = new Set();

  reg1.add(dataN)
  reg2.add(dataS)
  reg3.add(dataP)
  console.log(reg1.entries().next().value[0][0])

// —————————————————————————————————————————————————————————————————————————
// —————————————————————————————— END PRODUCT ——————————————————————————————
// —————————————————————————————————————————————————————————————————————————
// -------------------------------------------------------------------------
// —————————————————————————————————————————————————————————————————————————
// —————————————————————————————— Customer —————————————————————————————————
// —————————————————————————————————————————————————————————————————————————

let CNdata = JSON.parse(localStorage.getItem('CNdata')) || [];
let CEdata = JSON.parse(localStorage.getItem('CEdata')) || [];
let CPdata = JSON.parse(localStorage.getItem('CPdata')) || [];

function addData2() {
    const CN = document.querySelector('#customer');
    const CE = document.querySelector('#email');
    const CP = document.querySelector('#phone');

    CPdata.push(CP.value);
    CEdata.push(CE.value);
    CNdata.push(CN.value);
    
    localStorage.setItem('CNdata', JSON.stringify(CNdata));
    localStorage.setItem('CEdata', JSON.stringify(CEdata));
    localStorage.setItem('CPdata', JSON.stringify(CPdata));

    CN.value = ""
    CE.value = ""
    CP.value = ""
}
  
const reg4 = new Set();
const reg5 = new Set();
const reg6 = new Set();
reg4.add(CNdata)
reg5.add(CEdata)
reg6.add(CPdata)
  
// —————————————————————————————————————————————————————————————————————————
// —————————————————————————————— END CUSTOMER —————————————————————————————
// —————————————————————————————————————————————————————————————————————————
// -------------------------------------------------------------------------
// —————————————————————————————————————————————————————————————————————————
// —————————————————————————————— Inventory —————————————————————————————————
// —————————————————————————————————————————————————————————————————————————

let INdata = JSON.parse(localStorage.getItem('INdata')) || [];
let IEdata = JSON.parse(localStorage.getItem('IEdata')) || [];
let IPdata = JSON.parse(localStorage.getItem('IPdata')) || [];

function addData3() {
    const IN = document.querySelector('#item');
    const IE = document.querySelector('#quantity');
    const IP = document.querySelector('#Iprice');

    IPdata.push(IP.value);
    IEdata.push(IE.value);
    INdata.push(IN.value);
    
    localStorage.setItem('INdata', JSON.stringify(INdata));
    localStorage.setItem('IEdata', JSON.stringify(IEdata));
    localStorage.setItem('IPdata', JSON.stringify(IPdata));

    IN.value = ""
    IE.value = ""
    IP.value = ""
}
  
const reg7 = new Set();
const reg8 = new Set();
const reg9 = new Set();
reg7.add(INdata)
reg8.add(IEdata)
reg9.add(IPdata)
  
// —————————————————————————————————————————————————————————————————————————
// —————————————————————————————— END INVENTORY —————————————————————————————
// —————————————————————————————————————————————————————————————————————————
// -------------------------------------------------------------------------
// —————————————————————————————————————————————————————————————————————————
// —————————————————————————————— Services —————————————————————————————————
// —————————————————————————————————————————————————————————————————————————

let SNdata = JSON.parse(localStorage.getItem('SNdata')) || [];
let SEdata = JSON.parse(localStorage.getItem('SEdata')) || [];
let SPdata = JSON.parse(localStorage.getItem('SPdata')) || [];
let SCdata = JSON.parse(localStorage.getItem('SCdata')) || [];
let SIdata = JSON.parse(localStorage.getItem('SIdata')) || [];

function addData4() {
    const SN = document.querySelector('#serviceName');
    const SP = document.querySelector('#servicePrice');
    const SD = document.querySelector('#serviceDate');
    const SC = document.querySelector('#client');
    const SI = document.querySelector('#img');

    SPdata.push(SP.value);
    SEdata.push(SD.value);
    SNdata.push(SN.value);
    SCdata.push(SC.value);
    SIdata.push(SI.value);
    
    localStorage.setItem('SNdata', JSON.stringify(SNdata));
    localStorage.setItem('SEdata', JSON.stringify(SEdata));
    localStorage.setItem('SPdata', JSON.stringify(SPdata));
    localStorage.setItem('SCdata', JSON.stringify(SCdata));
    localStorage.setItem('SIdata', JSON.stringify(SIdata));

    SN.value = ""
    SD.value = ""
    SP.value = ""
    SC.value = ""
    SI.value = ""
}
  
const reg10 = new Set();
const reg11 = new Set();
const reg12 = new Set();
const reg13 = new Set();
const reg14 = new Set();
reg10.add(SNdata)
reg11.add(SEdata)
reg12.add(SPdata)
reg13.add(SCdata)
reg14.add(SIdata)
  
// —————————————————————————————————————————————————————————————————————————
// —————————————————————————————— END SERVICE ——————————————————————————————
// —————————————————————————————————————————————————————————————————————————
// —————————————————————————————————————————————————————————————————————————
// —————————————————————————————— CHARTS ———————————————————————————————————
// —————————————————————————————————————————————————————————————————————————


// Bar Charts //
const barChartOptions = {
    series: [{
      data: [reg2.entries().next().value[0][0], reg2.entries().next().value[0][1], reg2.entries().next().value[0][2], reg2.entries().next().value[0][3], reg2.entries().next().value[0][4]],
      name: "Products",
    }],
    chart: {
      type: 'bar',
    background: "transparent",
    height: 350,
    toolbar: {
      show: false,
    }
  },
  colors: [
    "#2962ff",
    "#d50000",
    "#2e7d32",
    "#ff6d00",
    "#583cb3",
  ],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: "40%"
    }
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    opacity: 1,
  },
  grids: {
    bordeColor: "#55596e",
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  legend: {
    labels: {
      colors: "#f5f7ff",
    },
    show: true,
    position: "top",
  },
  stroke: {
    colors: ["transparent"],
    show: true,
    width: 2,
  },
  tooltip: {
    shared: true,
    intersect: false,
    theme: "dark",
  },
  xaxis: {
    categories: [reg1.entries().next().value[0][7], reg1.entries().next().value[0][1], reg1.entries().next().value[0][10], reg1.entries().next().value[0][4], reg1.entries().next().value[0][8]
  ],
  title: {
    style: {
      color: "f5f7ff",
    },
  },
  axisBorder: {
    show: true,
    color: "#55596e",
  },
  axisTicks: {
    show: true,
    color: "#55596e",
  },
    labels: {
      style: {
        colors: "#f5f7ff",
      },
    },
  },
  yaxis: {
    title: {
      text: "Count",
      style: {
        colors: "#f5f7ff",
      },
    },
    axisBorder: {
      color: "#55596e",
      show: true,
    },
    axisTicks: {
      color: "#55596e",
      show: true,
    },
    labels: {
      style: {
        colors: "#f5f7ff",
      },
    },
  },
};

const barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
barChart.render();

// —————————————————————————————————————————————————————————————————————————
// —————————————————————————————— END BAR CHARTS ———————————————————————————
// —————————————————————————————————————————————————————————————————————————


// Area Charts //
const areaChartOptions = {
  series: [{
    name: 'Purchase Orders',
    data: [reg3.entries().next().value[0][0], reg3.entries().next().value[0][1], reg3.entries().next().value[0][2], reg3.entries().next().value[0][3], reg3.entries().next().value[0][4]]
  }, {
    name: 'Sales Orders',
    data: [reg2.entries().next().value[0][0], reg2.entries().next().value[0][1], reg2.entries().next().value[0][2], reg2.entries().next().value[0][3], reg2.entries().next().value[0][4]]
  }],
  chart: {
    type: 'area',
    background: "transparent",
    height: 350,
    stacked: false,
    toolbar: {
      show: false,
    },
  },
  colors: ["#00ab57", "#d50000"],
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  dataLabels: {
    enabled: false,
  },
  fill: {
    gradient: {
      opacityFrom: 0.4,
      opacityTo: 0.1,
      shadeIntensity: 1,
      stops: [0, 100],
      type:'vertical',
    },
    type: "gradient",
  },
  grid: {
    borderColor: "55596e",
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  legend: {
    labels: {
      colors: "#f5f7ff",
    },
    show: true,
    position: "top",
  },
  markers: {
    size: 6,
    strokeColors: "#1b2635",
    strokeWidth: 3,
  },
  xaxis: {
    axisBorder: {
      color: "#55596e",
      show: true,
    },
    axisTicks: {
      color: "#55596e",
      show: true,
    },
    labels: {
      offsetY: 5,
      style: {
        colors: "#f5f7ff",
      },
    },
  },
  yaxis: [
    {
      title: {
        text: "Purchase Orders",
        style: {
          color: "#f5f7ff",
        },
      },
      labels: {
        style: {
          colors: ["#f5f7ff"],
        },
      },
    },
    {
      opposite: true,
      title: {
        text: "Sales Orders",
        style: {
          color: "#f5f7ff",
        },
      },
      labels: {
        style: {
          colors: ["#f5f7ff"],
        },
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
    theme: "dark",
  },
};
const areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
areaChart.render();
// —————————————————————————————————————————————————————————————————————————
// —————————————————————————————— END AREA CHART ———————————————————————————
// —————————————————————————————————————————————————————————————————————————

// Pie Charts //
const pieOptions = {
  series: [44, 55, 13, 43, 22],
  chart: {
  width: 380,
  type: 'pie',
},
labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
legend: {
  labels: {
    colors: "#f5f7ff",
  },
  show: true,
  position: "bottom",
},
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 200
    },
    legend: {
      position: 'bottom'
    }
  }
}]
};

const pieChart = new ApexCharts(document.querySelector("#pie-chart"), pieOptions);
pieChart.render();

// —————————————————————————————————————————————————————————————————————————
// —————————————————————————————— END PIE CHART ————————————————————————————
// —————————————————————————————————————————————————————————————————————————

// Funnel Charts //
const funnelOptions = {
  series: [
  {
    name: "Funnel Series",
    data: [1380, 1100, 990, 880, 740, 548, 330, 200],
  },
],
  chart: {
  type: 'bar',
  height: 350,
  dropShadow: {
    enabled: true,
  },
  
},
plotOptions: {
  bar: {
    borderRadius: 5,
    horizontal: false,
    barHeight: '80%',
    isFunnel: true,
  },
},

dataLabels: {
  enabled: true,
  formatter: function (val, opt) {
    return opt.w.globals.labels[opt.dataPointIndex] + ':  ' + val
  },
  dropShadow: {
    enabled: true,
  },
},

title: {
  text: 'Recruitment Funnel',
  style: {
    color: ['#fff']
  },
  align: 'middle',
},
xaxis: {
  categories: [
    'Sourced',
    'Screened',
    'Assessed',
    'HR Interview',
    'Technical',
    'Verify',
    'Offered',
    'Hired',
  ],
},
legend: {
  show: true,
},
};

const funnelChart = new ApexCharts(document.querySelector("#funnel-chart"), funnelOptions);
funnelChart.render();

// —————————————————————————————————————————————————————————————————————————
// —————————————————————————————— END FUNNEL CHART —————————————————————————
// —————————————————————————————————————————————————————————————————————————

const radialBarChartOptions = {
  series: [70],
  chart: {
  height: 350,
  type: 'radialBar',
},
title: {
  text: 'Completion',
  style: {
    color: ['#fff']
  },
  align: 'middle',
},
plotOptions: {
  radialBar: {
    hollow: {
      size: '70%',
    },
    labels: {
      colors: "#fff",
    },
  },
},
legend: {
  labels: {
    colors: "#fff",
  },
  show: true,
  position: "right",
},
labels: ['Cricket'],
};

const radialBarChart = new ApexCharts(document.querySelector("#radialbar-chart"), radialBarChartOptions);
radialBarChart.render();

// —————————————————————————————————————————————————————————————————————————
// —————————————————————————————— END CIRCLE CHART —————————————————————————
// —————————————————————————————————————————————————————————————————————————


var timelineChartOptions = {
  series: [
  {
    data: [
      {
        x: 'Code',
        y: [
          new Date('2019-03-02').getTime(),
          new Date('2019-03-04').getTime()
        ],
        fillColor: '#008FFB'
      },
      {
        x: 'Test',
        y: [
          new Date('2019-03-04').getTime(),
          new Date('2019-03-08').getTime()
        ],
        fillColor: '#00E396'
      },
      {
        x: 'Validation',
        y: [
          new Date('2019-03-08').getTime(),
          new Date('2019-03-12').getTime()
        ],
        fillColor: '#775DD0'
      },
      {
        x: 'Deployment',
        y: [
          new Date('2019-03-12').getTime(),
          new Date('2019-03-18').getTime()
        ],
        fillColor: '#FEB019'
      }
    ]
  }
],
  chart: {
  height: 350,
  type: 'rangeBar'
},
plotOptions: {
  bar: {
    horizontal: true,
    distributed: true,
    dataLabels: {
      hideOverflowingLabels: false,
    }
  }
},
dataLabels: {
  enabled: false,
  style: {
    colors: ['#f3f4f5', '#111']
  }
},
xaxis: {
  type: 'datetime',
},
yaxis: {
  show: true
},
grid: {
  row: {
    colors: ['#333', '#fff'],
    opacity: 0.1
  }
}
};

const timelineChart = new ApexCharts(document.querySelector("#timeline-chart"), timelineChartOptions);
timelineChart.render();

module.exports = {reg1, reg2, reg3, reg4, reg5, reg6, reg7, reg8, reg9, reg10, reg11, reg12, reg13, reg14}