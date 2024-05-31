import { ToDoInput, ToDoItem} from "./components";
import NavBar from "./navbar";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation"
;

export default async function Home() {
  const supabase = createServerComponentClient({cookies})
  const { data: { user }} = await supabase.auth.getUser();
  const {data: todos} = await supabase.from("ToDos").select("*").eq("user_id", user?.id);
  //  console.info(todos)
  return (
    <>
      <NavBar></NavBar>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          <h1 className="font-bold text-5xl">To Do List</h1>
          <br/>
          <br/>
          <ToDoInput></ToDoInput>
          {
            todos?.map((todo) => (
              <ToDoItem todo={todo} key={todo.id} />
            )) 
          }
        </div>
      </main>
    </>
  );
}
