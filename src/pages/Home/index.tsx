import Button from "@/components/Button";
import Input from "@/components/Input";

export default function Home() {
  return (
    <main className="w-screen flex justify-center">
      <section className="w-1/3">
        <form action="" className="flex flex-col gap-6">
          <Input label="Name" />
          <Input label="Email" />
          <Button text="Submit" />
        </form>
      </section>
    </main>
  );
}
