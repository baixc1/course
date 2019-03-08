#include <stdio.h>
 
/* 函数声明 */
int factorial(int n);
 
int main ()
{
   /* 局部变量定义 */
   int ret;
 
   /* 调用函数来获取最大值 */
   ret = factorial(4);
 
   printf( "result : %d\n", ret );
 
   return 0;
}
 

//递归求n！函数实现
 
int factorial (int n){
 
    if(n ==0 )
        return 1;
 
    else
        return n*factorial(n-1);
}