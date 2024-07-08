import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Topup() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Token Top-Up</CardTitle>
        <CardDescription>Select a token and enter the amount to top up.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="token">Token</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Token" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ang">ANG</SelectItem>
              <SelectItem value="nag">NAG</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="amount">Amount</Label>
          <Input id="amount" type="number" min="0" max="999" placeholder="Enter amount" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Top Up</Button>
      </CardFooter>
    </Card>
  )
}