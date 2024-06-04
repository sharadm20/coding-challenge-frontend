import Image from "next/image";


export default function Product({items}) {
    return (
<div className="max-w-sm rounded overflow-hidden shadow-lg">
  <Image className="w-full" src={items.image} alt={items.title} height={200} width={200} quality={90}></Image>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{items.title}</div>
    <p className="text-gray-700 text-base">
      {items.description}
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{items.category}</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>
    );
}