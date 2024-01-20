const sortArrMed = (arr1 , arr2) =>{

    let combArr = arr1.concat(arr2)

    let arrMed = 0

    if(combArr.length % 2 ==0){
     return arrMed = combArr[(combArr.length/2)-1] +0.5
    }
    else{
      return arrMed = combArr[Math.floor(combArr.length/2)]
    }
}