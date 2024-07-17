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
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";

export default function Faucet() {
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('');
  const activeAddress = useActiveAddress();
  const processId = "RdiOs7wNV7g-rZfb2IpnnrzTAMpljSwZZRNQOx8-cR8";
  const [open, setOpen] = useState(false); // State to control dialog open/close

  const handleFaucetRequest = async () => {
    try {
      setStatus('Processing...');
      setOpen(true); // Open the dialog when processing starts
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
      if (error instanceof Error) {
        setStatus('Error: ' + error.message);
        console.error("Faucet error:", error);
      } else {
        setStatus('An unknown error occurred');
      }
    }
  };

  return (
    <Card className="w-full max-w-md rounded-xl">
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
            className='rounded-xl'
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button
              className="w-full rounded-xl"
              onClick={handleFaucetRequest}
            >
              Request Tokens
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] rounded-3xl">
            <DialogHeader className='rounded-xl'>
              <DialogTitle className='text-xl mb-2'>Faucet Status</DialogTitle>
              <DialogDescription className='text-lg'>
                {status}
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button onClick={() => setOpen(false)}>Close</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  )
}
