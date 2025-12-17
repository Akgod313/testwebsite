import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import './page1.css';
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (
      <main className="Main_Body">
        <h1 className="Login">LOGIN PAGE</h1>
      </main>

  );
}
