import { ToDoInput } from "./components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="font-bold text-5xl">To Do list</h1>
        <br/>
        <br/>
        <ToDoInput></ToDoInput>
      </div>
    </main>
  );
}
