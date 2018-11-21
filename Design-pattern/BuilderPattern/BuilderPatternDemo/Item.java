//规定食物条目特征
public interface Item {
	public String name();		//食物名称
	public Packing packing();		//食物包装
	public float price();		//食物价格
}