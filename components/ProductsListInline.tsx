import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://5.imimg.com/data5/KJ/YM/NZ/SELLER-45823138/computer-printer.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "1050 Dh",
    color: "white",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://www.singhalinfosystems.in/Uploads/ProductsImages/Product_c858514f-71af-4dc4-aec7-1bef370c2740_0_1108.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "1350 Dh",
    color: "black",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://aidea.com.my/image/aidea/image/cache/data/all_product_images/product-733/d574658164953366b5104cf8a7729283-1000x1000.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "2135 Dh",
    color: "white",
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxWERVbbeHxZn24KS09KnLqzitTHy8c06pcTubyOrZiJZCtVpZGlZGYivY-rfqUSWRC7c&usqp=CAU",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "1350 Dh",
    color: "white",
  },
];

export default function ProductsListInline() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Most Popular
          </h2>
          <Link
            href="/shop"
            className="text-sm gap-2 flex items-center font-semibold text-indigo-600"
          >
            View all
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group border overflow-hidden rounded-2xl relative"
            >
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full p-4 rounded-md bg-white object-contain group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 pt-0 p-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
