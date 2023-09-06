

export default function Test(){
  const px0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) };
  const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
  const px0_200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) };

  return(
    <div className="w-[150px] border-2 border-red-500">
      test
    </div>
  )
}