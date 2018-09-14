public class BuilderPatternDemo {
	public static void main(String[] args) {
		
		//�˵�
		MealBuilder mealBuilder = new MealBuilder();
		
		//���ײ�
		Meal mealVeg = mealBuilder.prepareVegMeal();
		
		//�۸�
		mealVeg.getCost();
	
		//����
		mealVeg.showItems();
		
		
		Meal mealNonVeg = mealBuilder.prepareNonVegMeal();
		mealNonVeg.getCost();
		mealNonVeg.showItems();
	}
}