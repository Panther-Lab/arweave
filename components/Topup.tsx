'use client'
import { useState } from 'react';
import { useActiveAddress } from "arweave-wallet-kit";
import { createDataItemSigner, message, result } from "@permaweb/aoconnect";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
export default function Topup() {
  const [token, setToken] = useState('');
  const [amount, setAmount] = useState('');
  const [recipientAddress, setRecipientAddress] = useState('');
  const activeAddress = useActiveAddress();
  const processId = "RdiOs7wNV7g-rZfb2IpnnrzTAMpljSwZZRNQOx8-cR8";
  const handleTopUp = async () => {
    try {
      const adjustedAmount = (parseFloat(amount) * 1).toString();
      const res = await message({
        process: processId,
        tags: [
          { name: "Action", value: "Transfer" },
          { name: "Recipient", value: recipientAddress },
          { name: "Quantity", value: amount }
        ],
        data: "",
        signer: createDataItemSigner(window.arweaveWallet),
      });
      const transferResult = await result({
        process: processId,
        message: res,
      });
      console.log("Transfer result:", transferResult);
      // Handle success (e.g., show a success message)
    } catch (error) {
      console.error("Transfer error:", error);
      // Handle error (e.g., show an error message)
    }
  };
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Token Top-Up</CardTitle>
        <CardDescription>Select a token and enter the amount to top up.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="token">Token</Label>
          <Select value={token} onValueChange={setToken}>
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
          <Input
            id="amount"
            type="number"
            min="0"
            max="999"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="recipient">Recipient Address</Label>
          <Input
            id="recipient"
            type="text"
            placeholder="Enter recipient's wallet address"
            value={recipientAddress}
            onChange={(e) => setRecipientAddress(e.target.value)}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          onClick={handleTopUp}
          disabled={!activeAddress || !token || !amount || !recipientAddress}
        >
          Top Up
        </Button>
      </CardFooter>
    </Card>
  )
}