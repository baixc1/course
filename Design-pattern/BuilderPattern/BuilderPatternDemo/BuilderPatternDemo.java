public class BuilderPatternDemo {
	public static void main(String[] args) {
		
		//菜单
		MealBuilder mealBuilder = new MealBuilder();
		
		//素套餐
		Meal mealVeg = mealBuilder.prepareVegMeal();
		
		//价格
		mealVeg.getCost();
	
		//详情
		mealVeg.showItems();
		
		
		Meal mealNonVeg = mealBuilder.prepareNonVegMeal();
		mealNonVeg.getCost();
		mealNonVeg.showItems();
	}
}