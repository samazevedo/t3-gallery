import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/0ddb758f-a98d-4841-9cd4-af0b25be1db1-ed3tlt.png",
  "https://utfs.io/f/df81c186-bfd2-4ac2-8e9b-97fcc1f4e755-m04ot0.png",
  "https://utfs.io/f/c666f30b-01b7-4f6f-9d1c-51f77fe557c1-2w7uql.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center  text-white">
      <div className="flex flex-wrap gap-3">
        {[...mockImages, ...mockImages, ...mockImages, ...mockImages].map(
          (image) => (
            <div key={image.id} className="w-48">
              <img src={image.url} alt={image.url} />
            </div>
          ),
        )}
      </div>
    </main>
  );
}
