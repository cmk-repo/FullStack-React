/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  //  return [];

  var summary = {}; // empty object
  for (var i = 0; i < transactions.length; i++) {
    var t = transactions[i];
    if (summary[t.category]) {
      summary[t.category] = summary[t.category] + t.price
    } else {
      summary[t.category] = t.price
    }
  }
  //console.log(summary)
  // since we need return type as array we need to push it to array 
  // Converting object to array ----
  var onlyKey = Object.keys(summary)
  console.log(summary);
  console.log(onlyKey);

  let answer = []
  for (var i = 0; i < onlyKey.length; i++) {
    var cat = onlyKey[i];
    // var obj = {
    //   category: cat,
    //   total_amount_Spent: summary[cat]
    // }
    // answer.push(obj)
    answer.push({
      category: cat,
      totalSpent: summary[cat]
    })

  }
  console.log(answer)
  //---------------------------------------------------------
  return answer
}

// disbabled for testing
// var transactions = [
//   {
//     item: "pepsi",
//     category: "drink",
//     price: 20,
//     timestamp: "12-may-1203"
//   },
//   {
//     item: "cola",
//     category: "drink",
//     price: 25,
//     timestamp: "13-may-1203"
//   },
//   {
//     item: "Cake",
//     category: "food",
//     price: 4,
//     timestamp: "13-may-1203"
//   }
// ]

// var f = calculateTotalSpentByCategory(transactions)

module.exports = calculateTotalSpentByCategory;
