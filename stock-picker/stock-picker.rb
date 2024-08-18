def stock_picker(stocks)
  max_profit = 0
  best_days = []

  stocks.each_with_index do |buy_price, buy_day|
    (buy_day + 1...stocks.length).each do |sell_day|
      sell_price = stocks[sell_day]
      profit = sell_price - buy_price

      if profit > max_profit
        max_profit = profit
        best_days = [buy_day, sell_day]
      end
    end
  end

  best_days
end
