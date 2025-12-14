function generateReports(records) {
  let totalSales = 0;
  const monthTotals = {};
  const monthItems = {};
  const monthRevenue = {};

  records.forEach(r => {
    totalSales += r.totalPrice;

    monthTotals[r.month] =
      (monthTotals[r.month] || 0) + r.totalPrice;

    monthItems[r.month] = monthItems[r.month] || {};
    monthItems[r.month][r.item] =
      (monthItems[r.month][r.item] || 0) + r.quantity;

    monthRevenue[r.month] = monthRevenue[r.month] || {};
    monthRevenue[r.month][r.item] =
      (monthRevenue[r.month][r.item] || 0) + r.totalPrice;
  });

  return {
    totalSales,
    monthTotals,
    monthItems,
    monthRevenue
  };
}

module.exports = generateReports;
