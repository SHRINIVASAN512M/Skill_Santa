function foo1()
{
return {
bar: "hello"
};
}


function foo2()
{
return
{
bar: "hello"
};
}

//output
/*
Yes,Both the function will return same value,Hence the value is not "printed".There is case of strin in
this program,So that should be asked to prrint it in a well manner
But It will not return anything beceause "bar" is not defined keyword

*/