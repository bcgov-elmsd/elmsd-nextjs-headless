import ToDoList from "./ToDoList";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex">
      <div>
        {/* lay out presents what will be on the page with the other children, like react router main router */}
        {/* @ts-ignore */}
        <ToDoList />
      </div>
      <div className="flex-l">{children}</div>
    </main>
  )
}