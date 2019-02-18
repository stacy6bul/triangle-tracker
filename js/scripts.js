var triangle = function(sideA, sideB, sideC) {
  if ( Triangle(sideA, sideB, sideC));
   return triangleType(sideA, sideB, sideC);
} else {
  return "Not a triangle.";
  alert ("Not a triangle");
};

var triangleType = function(sideA ,sideB, sideC) {
  if (sideA===sideB===sideC);
  return "Equilateral triangle";
} else if (sideA===sideB) {
  return "Isosceles triangle";
  alert "Isosceles triangle";
}  else if (sideA===sideC) {
  return "Isosceles triangle";
  alert "Isosceles triangle";
}  else if (sideB===sideC) {
   return "Isosceles triangle";
   alert "Isosceles triangle";
