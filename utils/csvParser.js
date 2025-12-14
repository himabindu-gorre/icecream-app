function parseCSV(data) {
  const lines = data.trim().split("\n");
  const records = [];

  for (let i = 1; i < lines.length; i++) {
    const row = lines[i].split(",");
    if (row.length !== 5) continue;

    records.push({
      date: row[0],
      month: row[0].slice(0, 7),
      item: row[1],
      unitPrice: Number(row[2]),
      quantity: Number(row[3]),
      totalPrice: Number(row[4])
    });
  }

  return records;
}

module.exports = parseCSV;
