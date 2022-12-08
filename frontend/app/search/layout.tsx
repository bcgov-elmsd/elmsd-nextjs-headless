import Search from "./Search";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex space-x-4 divide-x-2 p-5">
      <div>
        <h1>Search</h1>
      </div>
      <div className=" flex-1 pl-5">
        {/* lay out presents what will be on the page with the other children, like react router main router */}
        {/* @ts-ignore */}
        <Search />
        <div>{children}</div>
      </div>
    </main>
  );
}
