'use client'
import { useState } from 'react';
import { useActiveAddress } from "arweave-wallet-kit";
import { createDataItemSigner, message, result } from "@permaweb/aoconnect";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import BalanceButton from './BalanceButton';

export default function Faucet() {
  const [amount, setAmount] = useState('');
  const [recipientAddress, setRecipientAddress] = useState('');
  const [status, setStatus] = useState('');
  const activeAddress = useActiveAddress();
  const processId = "RdiOs7wNV7g-rZfb2IpnnrzTAMpljSwZZRNQOx8-cR8";

  const handleFaucetRequest = async () => {
    try {
      setStatus('Processing...');
      const res = await message({
        process: processId,
        tags: [
          { name: "Action", value: "Mint" },
          { name: "Quantity", value: amount }
        ],
        data: "",
        signer: createDataItemSigner(window.arweaveWallet),
      });
      const faucetResult = await result({
        process: processId,
        message: res,
      });
      console.log("Faucet result:", faucetResult);
      setStatus('Success! Tokens transferred from faucet.');
    } catch (error) {
      console.error("Faucet error:", error);
      setStatus('Error: ' + error.message);
    }
  };

  return (
    
    <Card className="w-full max-w-md">
      <BalanceButton/>
      <CardHeader>
        <CardTitle>Token Faucet</CardTitle>
        <CardDescription>Request tokens from the faucet.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="amount">Amount</Label>
          <Input
            id="amount"
            type="number"
            min="0"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        {status && (
          <Alert>
            <AlertDescription>{status}</AlertDescription>
          </Alert>
        )}
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          onClick={handleFaucetRequest}
        >
          Request Tokens
        </Button>
      </CardFooter>
    </Card>
  )
}