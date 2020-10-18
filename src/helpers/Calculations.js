export function calculate(arr) {
   return  arr.reduce((acc,item)=>(acc+=item),0).toFixed(2);
}