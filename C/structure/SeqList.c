#include <stdio.h>

typedef struct
{
    int list[10];
    int length;
} SeqList;
int main()
{

    void InitList（SeqList *L）
    {
        L->length = 0; // 把线性表的长度设为0
    }
}