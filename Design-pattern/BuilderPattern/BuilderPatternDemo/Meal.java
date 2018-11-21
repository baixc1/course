//套餐新增、修改、查询操作
import java.util.ArrayList;
import java.util.List;

public class Meal {
	//套餐商品模型
	private List<Item> items = new ArrayList<Item>();
	
	//新增商品
	public void addItem(Item item) {
		items.add(item);
	}
	
	//套餐总价
	public void getCost() {
		float cost = 0.0f;
		for(Item item : items) {
			cost += item.price();
		}
		System.out.print("\n"+cost);
	}
	
	//套餐商品详情
	public void showItems() {
		for(Item item : items) {
			System.out.print("\n\n\tItem: " + item.name());
			System.out.print("\n\tPacking" + item.packing().pack());
			System.out.print("\n\tprice" + item.price()+"\n");
		}
	}
}