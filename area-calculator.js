const calculateRectangleArea = function (length, width){
  const calculateRectangleArea = length * width;
  if (length  < 0 || width < 0){
    return undefined
  } else {
    return calculateRectangleArea;
  }
}

const calculateTriangleArea = function (base, height){
  const calculateTriangleArea = (base * height) / 2;
  if (base  < 0 || height < 0){
    return undefined
  } else {
    return calculateTriangleArea;
  }
}

const calculateCircleArea = function (radius){
  const calculateCircleArea = (Math.PI * (radius * radius));
  if (radius  < 0){
    return undefined
  } else {
    return calculateCircleArea;
  }
}

console.log(calculateRectangleArea(10, 5));    
console.log(calculateRectangleArea(1.5, 2.5));  
console.log(calculateRectangleArea(10, -5));

console.log(calculateTriangleArea(10, 5)); 
console.log(calculateTriangleArea(3, 2.5)); 
console.log(calculateTriangleArea(10, -5));

console.log(calculateCircleArea(10)); 
console.log(calculateCircleArea(3.5)); 
console.log(calculateCircleArea(-1));