function printReports(reports) {
  console.log("===== Total Sales =====");
  console.log("Total Sales of Store: ₹", reports.totalSales);

  console.log("\n===== Month-wise Sales Totals =====");
  for (const m in reports.monthTotals) {
    console.log(`${m}: ₹ ${reports.monthTotals[m]}`);
  }

  console.log("\n===== Most Popular Item Each Month =====");
  for (const m in reports.monthItems) {
    let popularItem = null;
    let maxQty = 0;

    for (const item in reports.monthItems[m]) {
      if (reports.monthItems[m][item] > maxQty) {
        maxQty = reports.monthItems[m][item];
        popularItem = item;
      }
    }

    console.log(`${m}: ${popularItem} → Quantity Sold: ${maxQty}`);
  }

  console.log("\n===== Top Revenue Item Each Month =====");
  for (const m in reports.monthRevenue) {
    let topItem = null;
    let maxRevenue = 0;

    for (const item in reports.monthRevenue[m]) {
      if (reports.monthRevenue[m][item] > maxRevenue) {
        maxRevenue = reports.monthRevenue[m][item];
        topItem = item;
      }
    }

    console.log(`${m}: ${topItem} → Revenue: ₹ ${maxRevenue}`);
  }
}

module.exports = printReports;
