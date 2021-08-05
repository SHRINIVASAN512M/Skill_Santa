function Hero(name, level)
{
name = name;
level = level;
}

/*
The above constructor function is not Correct.The Keyword of "this" used be used in front of the objeccts.
The correct code is:
function Hero(name, level)
{
this.name = name;
this.level = level;
}
Where this should be printed by calling the function and printing it in a required environment.
*/