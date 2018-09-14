import java.util.Hashtable;

public class ShapeCache {
	//��̬��ԱshapeMap
	private static Hashtable<String, Shape> shapeMap = new Hashtable<String, Shape>();
	
	//shapeMap��̬����
	public static Shape getShape(String shapeId) {
		Shape cachedShape = shapeMap.get(shapeId);		//ģ����
		return (Shape) cachedShape.clone();
	}
	
	//shapeMapģ��
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
		