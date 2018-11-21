//�ײ��������޸ġ���ѯ����
import java.util.ArrayList;
import java.util.List;

public class Meal {
	//�ײ���Ʒģ��
	private List<Item> items = new ArrayList<Item>();
	
	//������Ʒ
	public void addItem(Item item) {
		items.add(item);
	}
	
	//�ײ��ܼ�
	public void getCost() {
		float cost = 0.0f;
		for(Item item : items) {
			cost += item.price();
		}
		System.out.print("\n"+cost);
	}
	
	//�ײ���Ʒ����
	public void showItems() {
		for(Item item : items) {
			System.out.print("\n\n\tItem: " + item.name());
			System.out.print("\n\tPacking" + item.packing().pack());
			System.out.print("\n\tprice" + item.price()+"\n");
		}
	}
}