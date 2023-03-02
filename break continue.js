for(var x=1;x<=100;x++)
{
    if(x==20){
        break;
    }
    document.write( " "+x);
}
var x=0;
while(x<=100)
{
    x++;
    if(x==20){
        continue;
    }
  
    document.write(" "+x);
}