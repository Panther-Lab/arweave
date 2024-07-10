import { FormCreateGame } from "@/components/forms/GameForm";
import ParentComponent from "@/components/forms/PublisherForm";

export const user ={
    name: "John Doe",
    email: "john@doe.com",
    password: "password",
    confirmPassword: "password",
}
export default function Home() {
  return (
    <div className="flex justify-center items-start w-full overflow-auto p-4 max-h-[100vh] overflow-y-auto">
      <div className="w-full max-w-2xl mb-10">
        <h1 className="text-2xl font-bold mb-2">Create A New Game</h1>
        <h3 className="header mb-4">Welcome 👋</h3>
        <FormCreateGame />
        {/* <ParentComponent user={user} /> */}
      </div>
    </div>
  );
}
