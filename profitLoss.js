
function findArrMin(arr){
    let min= Infinity
    let indexMin=-1
    for (let i=0; i < arr.length; i++) {
        if (arr[i] <= min){
        min = arr[i]
        indexMin = i    
        }
    } 
    return({
        'indexMin': indexMin,
        'min': min
      })

    }

function findArrMax(arr){
    let max= 0
    let indexMax=-1
    for (let i=0; i < arr.length; i++) {
        if (arr[i] >= max){
        max = arr[i]
        indexMax = i    
        }
    } 
    return({
        'indexMax': indexMax,
        'max': max
      })

}



function findProfit(prices){

let profit=0
let loss=0
let timesMoney= 1
const firstLenght = prices.length

while(prices.length >1){
  // 1.min
  let {indexMin,min}= findArrMin(prices)
  if(firstLenght== prices.length){
    loss = min
    
  }
  else{
    loss= 0
  }
    
  prices = prices.slice(indexMin+1)
  
  //2.min
  let {indexMin:indexMin2,min:min2} = findArrMin(prices)
 

  //1-2 min between array
  let temp = prices.slice(0,indexMin2)
  
  let{indexMax,max}= findArrMax(temp)

  profit = (max-loss)*timesMoney

  timesMoney = profit/min2

  prices = prices.slice(indexMin2)

 

}

return profit

}




let prices = prompt('Fiyat listesini arasında boşluk bırakarak giriniz ')


if(prices){
  var priceArray = prices.split(" ").map(Number)
 
  let prof = findProfit(priceArray)
  
  document.querySelector("#profit").innerHTML = prof
}



  
  













