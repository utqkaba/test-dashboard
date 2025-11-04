export default function PageHeader({ title }) {
  return (
    <div className="w-full flex justify-center mb-10">
      <h1 className="text-4xl font-light text-stone-900 text-shadow-lg tracking-wide text-center pb-2 w-fit">
        {title.toUpperCase()}
      </h1>
    </div>
  );
}
