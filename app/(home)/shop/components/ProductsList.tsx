import { Button } from "@headlessui/react";

const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "48",
    imageSrc:
      "https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "35",
    imageSrc:
      "https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "89",
    imageSrc:
      "https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "35",
    imageSrc:
      "https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    name: "Earthen Bottle",
    href: "#",
    price: "48",
    imageSrc:
      "https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-04-image-card-05.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 6,
    name: "Nomad Tumbler",
    href: "#",
    price: "35",
    imageSrc:
      "https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-04-image-card-06.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  // More products...
];

export default function ProductsList() {
  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {new Array(10)
            .fill(products)
            .flat()
            .map((product, i) => (
              <a
                key={i}
                href={product.href}
                className="group bg-white border rounded-xl overflow-hidden relative"
              >
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="aspect-square w-full rounded-t-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
                />
                <div className="flex justify-between p-2 items-end">
                  <div>
                    <h3 className="mt-4 text-sm text-gray-700">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">
                      {product.price} Dh
                    </p>
                  </div>
                </div>
              </a>
            ))}
        </div>
      </div>
    </div>
  );
}
