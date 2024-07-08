import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function Profile() {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="bg-primary text-primary-foreground p-6 flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold">John Doe</h2>
          <p className="text-sm text-primary-foreground/80">0x123456789abcdef0123456789abcdef01234567</p>
        </div>
        <Button>Edit Profile</Button>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid gap-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" defaultValue="John Doe" />
          </div>
          <div>
            <Label htmlFor="wallet">Wallet Address</Label>
            <Input id="wallet" defaultValue="0x123456789abcdef0123456789abcdef01234567" />
          </div>
          <Button>Save Changes</Button>
        </div>
      </CardContent>
    </Card>
  )
}