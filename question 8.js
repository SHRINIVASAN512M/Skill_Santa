const name = { firstName: 'Philip',
lastName: 'Fry' };
const details = {
job: 'Delivery Boy',
employer: 'Planet Express'
};
var emp={...name,...details};
console.log(emp);
//output
/*
{
  firstName: 'Philip',
  lastName: 'Fry',
  job: 'Delivery Boy',
  employer: 'Planet Express'
}
*/