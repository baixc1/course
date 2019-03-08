#include <stdio.h>

//迭代与递归
//递归：反复调用函数和占用额外的内存

/* 函数声明 */
int findMax(int a[], int n);

int main()
{
    /* 局部变量定义 */
    int ret;

    int a[] = {310, 301, 255, 211, 32, 102, 131, 276};

    /* 调用函数来获取最大值 */
    ret = findMax(a, sizeof(a) / sizeof(a[0]));

    printf("result : %d\n", ret);

    return 0;
}

int findMax(int a[], int n)
{

    int m;

    if (n <= 1)
        return a[0];

    else
    {
        m = findMax(a, n - 1);
        printf("%d is %d \n", n - 1, a[n - 1] >= m ? a[n - 1] : m);
        return a[n - 1] >= m ? a[n - 1] : m; //找到最大值
    }
}
