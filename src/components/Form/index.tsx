import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";

export default function Form() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted:", { name, email });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6"
      data-testid="form"
    >
      <Input
        id="name"
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <Input
        id="email"
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}
