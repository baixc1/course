#include<stdio.h>
#include <stdlib.h>

typedef struct GLNode{
    int tag;//标志域
    union{
        int atom;//原子结点的值域
        struct GLNode *hp;//子表结点的指针域，hp指向表头
    };
    struct GLNode * tp;//这里的tp相当于链表的next指针，用于指向下一个数据元素
}*Glist;

Glist creatGlist(Glist C){
    C=(Glist)malloc(sizeof(Glist));
    C->tag=1;
    C->hp=(Glist)malloc(sizeof(Glist));
    C->tp=NULL;
    //表头原子a
    C->hp->tag=0;
    C->atom='a';
    C->hp->tp=(Glist)malloc(sizeof(Glist));
    C->hp->tp->tag=1;
    C->hp->tp->hp=(Glist)malloc(sizeof(Glist));
    C->hp->tp->tp=NULL;
    //原子b
    C->hp->tp->hp->tag=0;
    C->hp->tp->hp->atom='b';
    C->hp->tp->hp->tp=(Glist)malloc(sizeof(Glist));
    //原子c
    C->hp->tp->hp->tp->tag=0;
    C->hp->tp->hp->tp->atom='c';
    C->hp->tp->hp->tp->tp=(Glist)malloc(sizeof(Glist));
    //原子d
    C->hp->tp->hp->tp->tp->tag=0;
    C->hp->tp->hp->tp->tp->atom='d';
    C->hp->tp->hp->tp->tp->tp=NULL;
    return C;
}

int main(){
    Glist C;
    creatGlist(C);
    return 0;
}