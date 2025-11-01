export default function Welcome({ userEmail }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-stone-300">
      <h1 className="text-5xl font-extralight text-shadow-lg mb-4">
        Welcome, {userEmail}
      </h1>
      <p className="text-xl font-extralight text-shadow-lg mb-4">
        You have successfully logged in 🎉
      </p>
      <button className="cursor-pointer text-3xl">ᯓ➤</button>
    </div>
  );
}
