#include <stdio.h>
#include <stdlib.h>
#define Size 5
typedef struct Table{
    int * head;
    int length;
    int size;
}table;
table initTable(){
    table t;
    t.head=(int*)malloc(Size*sizeof(int));
    if (!t.head)
    {
        printf("��ʼ��ʧ��");
        exit(0);
    }
    t.length=0;
    t.size=Size;
    return t;
}
//���˳�����Ԫ�صĺ���
void displayTable(table t){
    for (int i=0;i<t.length;i++) {
        printf("%d ",t.head[i]);
    }
    printf("\n");
}
int main(){
    table t=initTable();
    //��˳��������Ԫ��
    for (int i=1; i<=Size; i++) {
        t.head[i-1]=i;
        t.length++;
    }
    printf("˳����д洢��Ԫ�طֱ��ǣ�\n");
    displayTable(t);
    return 0;
}