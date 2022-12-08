import ToDoList from "./ToDoList";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex">
      <div>
        {/* @ts-ignore */}
        <ToDoList />
      </div>
      <div className="flex-l">{children}</div>
    </main>
  )
}