import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import Link from "next/link"
import { JSX, SVGProps } from "react"

export default function Component() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-primary text-primary-foreground rounded-xl">
          <CardHeader>
            <CardTitle>Earned Tokens</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <div className="text-4xl font-bold">100</div>
            <CoinsIcon className="w-8 h-8" />
          </CardContent>
        </Card>
        <Card className="bg-secondary text-secondary-foreground rounded-xl">
          <CardHeader>
            <CardTitle>Redeemable Tokens</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <div className="text-4xl font-bold">56</div>
            <GiftIcon className="w-8 h-8" />
          </CardContent>
        </Card>
        <Card className="bg-muted text-muted-foreground rounded-xl">
          <CardHeader>
            <CardTitle>Total Sessions</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <div className="text-4xl font-bold">12</div>
            <ActivityIcon className="w-8 h-8" />
          </CardContent>
        </Card>
      </div>
      <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="rounded-xl">
          <CardHeader>
            <CardTitle>User Profile</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="w-12 h-12">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Nisarg</div>
                  <div className="text-muted-foreground">@itznishu</div>
                </div>
              </div>
            </div>
            <Separator />
            <div className="grid gap-1">
              <div className="text-sm font-medium text-muted-foreground">Total Time Played</div>
              <div className="text-2xl font-bold">
                <span>125</span>
                <span className="text-muted-foreground"> hours</span>
              </div>
              <div className="text-sm font-medium text-muted-foreground">Achievements Unlocked</div>
              <div className="text-2xl font-bold">
                <span>15</span>
                <span className="text-muted-foreground"></span>
              </div>
              <div className="text-sm font-medium text-muted-foreground">Total Games Played
              </div>
              <div className="text-2xl font-bold">
                <span>5</span>
                <span className="text-muted-foreground"></span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-2 rounded-xl">
          <CardHeader>
            <CardTitle>Friends</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Avatar</TableHead>
                  <TableHead>Username</TableHead>
                  <TableHead>Last Active</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>AK</AvatarFallback>
                    </Avatar>
                  </TableCell>
                  <TableCell>
                    <Link href="#" className="font-medium" prefetch={false}>
                      pawan
                    </Link>
                  </TableCell>
                  <TableCell>
                    <div className="text-muted-foreground">2 hours ago</div>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="icon">
                      <MessageCircleIcon className="w-4 h-4" />
                      <span className="sr-only">Chat</span>
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>MY</AvatarFallback>
                    </Avatar>
                  </TableCell>
                  <TableCell>
                    <Link href="#" className="font-medium" prefetch={false}>
                      mystic
                    </Link>
                  </TableCell>
                  <TableCell>
                    <div className="text-muted-foreground">1 day ago</div>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="icon">
                      <MessageCircleIcon className="w-4 h-4" />
                      <span className="sr-only">Chat</span>
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>HP</AvatarFallback>
                    </Avatar>
                  </TableCell>
                  <TableCell>
                    <Link href="#" className="font-medium" prefetch={false}>
                      haard
                    </Link>
                  </TableCell>
                  <TableCell>
                    <div className="text-muted-foreground">3 days ago</div>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="icon">
                      <MessageCircleIcon className="w-4 h-4" />
                      <span className="sr-only">Chat</span>
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function ActivityIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    </svg>
  )
}


function CoinsIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="8" r="6" />
      <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
      <path d="M7 6h1v4" />
      <path d="m16.71 13.88.7.71-2.82 2.82" />
    </svg>
  )
}


function MessageCircleIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  )
}


function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

function GiftIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13" />
      <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
      <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
    </svg>
  )
}