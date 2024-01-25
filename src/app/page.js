import Link from 'next/link'
import { Button } from '@nextui-org/react'
export default async function Home() {
  return (
    <main className="flex flex-col gap-2 p-4">
      <p>Home page</p>
      <Link href={'/list/1'}>
        <Button color="primary">
          перейти к списку
        </Button>
      </Link>
    </main>
  );
}
