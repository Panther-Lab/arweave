import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"

export default function History() {
  return (
    <div className="grid grid-cols-1 gap-8 p-8">
      <div>
        <Card className="rounded-2xl overflow-hidden">
          <CardHeader className="bg-primary text-primary-foreground p-6">
            <div className="flex items-center gap-4">
              <div>
                <div className="text-lg font-semibold">Nisarg</div>
                <div className="text-sm text-primary-foreground/80">@nisarg</div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6 grid gap-4">
            <div className="grid gap-1">
              <div className="text-sm text-muted-foreground">Last Game Played</div>
              <div className="flex items-center gap-2">
                <div>Meze Pepe</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card className="rounded-2xl overflow-hidden">
          <CardHeader className="bg-secondary text-secondary-foreground p-6">
            <div className="flex items-center justify-between">
              <div className="text-lg font-semibold">Game History</div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Token Name</TableHead>
                  <TableHead>Game Name</TableHead>
                  <TableHead>No of Assets Used</TableHead>
                  <TableHead>Timestamp</TableHead>
                  <TableHead>Tx Hash</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>HH</TableCell>
                  <TableCell>Meze Pepe</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>2023-04-15 12:34:56</TableCell>
                  <TableCell>0x123...456</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>NN</TableCell>
                  <TableCell>Soul Eater</TableCell>
                  <TableCell>4</TableCell>
                  <TableCell>2023-04-10 09:45:23</TableCell>
                  <TableCell>0x789...012</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>HH</TableCell>
                  <TableCell>Our of Sight</TableCell>
                  <TableCell>4</TableCell>
                  <TableCell>2023-03-28 16:20:00</TableCell>
                  <TableCell>0xabc...def</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}