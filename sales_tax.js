const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [100, 200, 400]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [80, 20, 10, 100, 90, 500]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [500, 100]
  }
];
const calculateSalesTax = (salesData, taxRates) => {
  let newObj = {};

  for (let data of salesData) {
    let totalSales = newObj[data.name] ? newObj[data.name].totalSales : 0;
    let totalTaxes = newObj[data.name] ? newObj[data.name].totalTaxes : 0;
    
    let sumSalesOfData = 0;
    data.sales.forEach(e => sumSalesOfData += e);
    
    const sumTaxOfData = sumSalesOfData * salesTaxRates[data.province];
    
    totalSales += sumSalesOfData;
    totalTaxes += sumTaxOfData;
    newObj[data.name] = {totalSales, totalTaxes};
  }
  console.log(newObj);
};

