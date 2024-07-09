import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function Component() {
  return (
    <div className="flex flex-col items-center gap-8 p-4 sm:p-4">
      <div className="flex flex-col items-center gap-4 rounded-lg bg-background shadow-sm">
        <Avatar className="h-24 w-24">
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="grid gap-1 text-center">
          <div className="text-xl font-semibold">John Doe</div>
          <div className="text-sm text-muted-foreground">@johndoe</div>
          <div className="text-sm text-muted-foreground">0x123456789abcdef0123456789abcdef01234567</div>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              Edit Profile
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit Profile</DialogTitle>
              <DialogDescription>Update your profile information.</DialogDescription>
            </DialogHeader>
            <div className="space-y-2">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="johndoe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="wallet-address">Wallet Address</Label>
                <Input id="wallet-address" defaultValue="0x123456789abcdef0123456789abcdef01234567" disabled />
              </div>
            </div>
            <DialogFooter>
              <Button type="button">Save Changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle>Played Games</CardTitle>
          <CardDescription>View the games you have played and your performance.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            <div className="flex flex-col items-center gap-2 rounded-lg bg-muted p-4 text-center">
              <img src="/placeholder.svg" width={64} height={64} alt="Game Thumbnail" className="rounded-md" />
              <div className="text-sm font-medium">Elden Ring</div>
              <div className="text-xs text-muted-foreground">Playtime: 120 hrs</div>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg bg-muted p-4 text-center">
              <img src="/placeholder.svg" width={64} height={64} alt="Game Thumbnail" className="rounded-md" />
              <div className="text-sm font-medium">Apex Legends</div>
              <div className="text-xs text-muted-foreground">Playtime: 80 hrs</div>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg bg-muted p-4 text-center">
              <img src="/placeholder.svg" width={64} height={64} alt="Game Thumbnail" className="rounded-md" />
              <div className="text-sm font-medium">Valorant</div>
              <div className="text-xs text-muted-foreground">Playtime: 60 hrs</div>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg bg-muted p-4 text-center">
              <img src="/placeholder.svg" width={64} height={64} alt="Game Thumbnail" className="rounded-md" />
              <div className="text-sm font-medium">Fortnite</div>
              <div className="text-xs text-muted-foreground">Playtime: 40 hrs</div>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg bg-muted p-4 text-center">
              <img src="/placeholder.svg" width={64} height={64} alt="Game Thumbnail" className="rounded-md" />
              <div className="text-sm font-medium">Minecraft</div>
              <div className="text-xs text-muted-foreground">Playtime: 30 hrs</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
