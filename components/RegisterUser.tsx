'use client'
import { useState, useEffect } from 'react';
import { useActiveAddress } from "arweave-wallet-kit";
import { createDataItemSigner, message, result } from "@permaweb/aoconnect";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const RegisterUser = () => {
  const [name, setName] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const activeAddress = useActiveAddress();
  const processId = "9aGueINd4SC0y0B7J15LbIUoV_nXMw4V57AQnSEiqLo";

  useEffect(() => {
    // Check if user is already registered
    // This is a placeholder. You should implement the actual check based on your backend logic
    const checkRegistration = async () => {
      // Implement your check here
      // For now, we'll just use localStorage as an example
      const storedName = localStorage.getItem('registeredName');
      if (storedName) {
        setName(storedName);
        setIsRegistered(true);
      }
    };

    checkRegistration();
  }, []);

  const registerAuthor = async () => {
    try {
      const res = await message({
        process: processId,
        tags: [{ name: "Action", value: "Register-User" }, { name: "Name", value: name }],
        data: "",
        signer: createDataItemSigner(window.arweaveWallet),
      });

      const registerResult = await result({
        process: processId,
        message: res,
      });

      console.log("Registration result:", registerResult);
      setIsRegistered(true);
      localStorage.setItem('registeredName', name); 
      setIsOpen(false);
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>{isRegistered ? `Welcome ${name}` : 'Register'}</Button>
      </DialogTrigger>
      {!isRegistered && (
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Register User</DialogTitle>
          </DialogHeader>
          <Input
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button onClick={registerAuthor} disabled={!activeAddress || !name}>
            Register
          </Button>
        </DialogContent>
      )}
    </Dialog>
  );
};

export default RegisterUser;