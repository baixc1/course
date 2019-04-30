#include<stdio.h>
#define number 10

typedef struct {
    int i,j;
    int data;
}triple;
typedef struct {
    triple data[number];
    int n,m,num;
}TSMatrix;

TSMatrix transposeMatrix(TSMatrix M,TSMatrix T){
    T.m=M.n;
    T.n=M.m;
    T.num=M.num;
    if (T.num) {
        int q=0;        //下标
        for (int col=1;col<=M.m; col++) {   //遍历列，按续查找
            for (int p=0; p<M.num; p++) {   
                if (M.data[p].j==col) {
                    T.data[q].i=M.data[p].j;
                    T.data[q].j=M.data[p].i;
                    T.data[q].data=M.data[p].data;
                    q++;
                }
            }
        }
    }
    return T;
}

int main() {
    TSMatrix M;
    M.m=2;
    M.n=3;
    M.num=4;
    M.data[0].i=1;
    M.data[0].j=2;
    M.data[0].data=1;
    M.data[1].i=2;
    M.data[1].j=2;
    M.data[1].data=3;
    M.data[2].i=3;
    M.data[2].j=1;
    M.data[2].data=6;
    M.data[3].i=3;
    M.data[3].j=2;
    M.data[3].data=5;
    TSMatrix T;
    T=transposeMatrix(M, T);
    for (int i=0; i<T.num; i++) {
        printf("(%d,%d,%d)\n",T.data[i].i,T.data[i].j,T.data[i].data);
    }
    return 0;
}