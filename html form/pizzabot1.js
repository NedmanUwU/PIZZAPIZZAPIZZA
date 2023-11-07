    const pizzaPrice = 80;

      function totalCost(orderQuantity) {
          return orderQuantity * pizzaPrice; // calculates total cost of the order: number of pizzas * price
      }

      function cookingTime(orderQuantity) {
          if (orderQuantity <= 1) {
              return 10; // 10 minutes for 1 pizza
          } else if (orderQuantity >= 3 && orderQuantity <= 5) {
              return 15; // 15 minutes for 3-5 pizzas
          } else if (orderQuantity >= 6 && orderQuantity <= 10) {
              return 20; // 20 minutes for 6-10 pizzas
          }
      }

      function submitOrder() {
        const orderName = document.getElementById("orderName").value;
        const orderQuantity = parseInt(document.getElementById("orderQuantity").value, 10);

        const orderSummary = document.getElementById("orderSummary");

          if (checkOrderName(orderName)) {
              const orderTotal = totalCost(orderQuantity);

              if (orderQuantity >= 1 && orderQuantity <= 10) {
                const cookingTimeValue = cookingTime(orderQuantity);
                const message = `かしこまりました ${orderQuantity}  個 ${orderName} のピーザはいいですか? \nそれは、ごうけいは: ${orderTotal} SEK になります。\n ${cookingTimeValue} 分お待ち下さい`;

                  orderSummary.textContent = message;
                } else {
                    orderSummary.textContent = 'すみませんでした。\n1から10までの数字を入力してください。';
                }
            }
          }

      function checkOrderName(orderName) {
          const menu = ["vegetarian", "hawaiian", "pepperoni"];
          return menu.includes(orderName);
      }