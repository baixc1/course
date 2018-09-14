import java.util.Hashtable;

public class ShapeCache {
	//静态成员shapeMap
	private static Hashtable<String, Shape> shapeMap = new Hashtable<String, Shape>();
	
	//shapeMap静态方法
	public static Shape getShape(String shapeId) {
		Shape cachedShape = shapeMap.get(shapeId);		//模型项
		return (Shape) cachedShape.clone();
	}
	
	//shapeMap模型
	public static void loadCache() {
		Circle circle = new Circle();
		circle.setId("1");
		shapeMap.put(circle.getId(),circle);
		
		Square square = new Square();
		square.setId("2");
		shapeMap.put(square.getId(),square);
		
		Rectangle rectangle = new Rectangle();
		rectangle.setId("3");
		shapeMap.put(rectangle.getId(),rectangle);
	}
}
		