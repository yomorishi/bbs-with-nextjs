import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BellRing, Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type CardProps = React.ComponentProps<typeof Card>;

export default function Home({ className, ...props }: CardProps) {
  return (
    <main className="grid lg:grid-cols-3 px-4 py-4 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>You have 3 unread messages.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
          reiciendis nisi assumenda maxime placeat adipisci, deleniti non
          delectus doloremque, quae, aliquid corrupti. Ea non corrupti
          asperiores atque maxime, aut magnam!
        </CardContent>
        <CardFooter>
          <Link href={"/bbs-posts/1"} className="text-blue-500">
            read more
          </Link>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>You have 3 unread messages.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
          reiciendis nisi assumenda maxime placeat adipisci, deleniti non
          delectus doloremque, quae, aliquid corrupti. Ea non corrupti
          asperiores atque maxime, aut magnam!
        </CardContent>
        <CardFooter>
          <Link href={"/bbs-posts/1"} className="text-blue-500">
            read more
          </Link>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>You have 3 unread messages.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
          reiciendis nisi assumenda maxime placeat adipisci, deleniti non
          delectus doloremque, quae, aliquid corrupti. Ea non corrupti
          asperiores atque maxime, aut magnam!
        </CardContent>
        <CardFooter>
          <Link href={"/bbs-posts/1"} className="text-blue-500">
            read more
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
}
