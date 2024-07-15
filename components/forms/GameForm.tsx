"use client";

import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import { toast } from "@/components/ui/use-toast";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Icons } from "@/components/icons";

import { createGameSchema } from "@/type";
import { gameTypes } from "@/lib/game-type";
import { Checkbox } from "../ui/checkbox";
import { getArFSClient } from "@/lib/getArFSClient";
import { Drive } from "arfs-js";


export function FormCreateGame() {
  const form = useForm<z.infer<typeof createGameSchema>>({
    resolver: zodResolver(createGameSchema),
    
  });
  const router = useRouter();
  console.log("Form Data", form.getValues())
  async function onSubmit(data: z.infer<typeof createGameSchema>) {
    console.log("Submitting form data:", data);
    toast({
      title: "Game Created",
      description: "Game Created Successfully!",
    })
    router.push(`/game`);
  }

 
  async function fileUpload({isPrivate, file}: {name: string, isPrivate: boolean, file: File}) {
    const userAddress = "demo2";
  
    if (!userAddress) {
      // TODO: use toast maybe?
      return;
    }
  
    const arfsClient = getArFSClient();
    try {
      const drives = await arfsClient.drive.listAll();
      if(!drives) {
        return;
      }
      let drive = drives.find((d: Drive) => d.name ==="demo2");
      toast({
        title: "Drive Created",
        description: "New Drive Created Successfully!",
      });
  
      if (!drive) {
        drive = await arfsClient.drive.create(userAddress, { visibility: isPrivate ? 'private' : 'public' });
      }
      await waitFor(1000);
      // debugger;
      // Create a file in the root folder of the drive
      if (file && drive && drive.rootFolderId && drive.id) {
        const fileBuffer = await file.arrayBuffer();
  
        try {
          const fileEntity = await arfsClient.file.create({
            name: file.name,
            size: file.size,
            driveId: drive.driveId,
            dataContentType: file.type,
            parentFolderId: drive.rootFolderId,
            file: fileBuffer,
            visibility: isPrivate ? 'private' : 'public'
          });
          toast({
            title: "File Uploaded",
            description: "File Uploaded Successfully!",
          });
          
          console.log({ fileEntity });
        } catch (error) {
          console.log({ error });
          // TODO: use toast maybe?
        }
      }
      
      console.log(drives);
    } catch (error) {
      console.log({ error });
      // TODO: use toast maybe?
    }
    await waitFor(500);
}
 


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-20 gap-y-6 overscroll-auto max-w-2xl">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Game Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Deal Name" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public game name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Game Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter More Information about your game..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Website (optional)</FormLabel>
                <FormControl>
                  <Input placeholder="Enter website url" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="borrowerAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Wallet Address</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Your Wallet Address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gameType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Game Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value?.toString()}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Game Type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {gameTypes.map(({ name }) => {
                      return (
                        <SelectItem key={name} value={name}>
                          {name}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="buildDocument"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Upload Build Document: </FormLabel>
                <FormControl className="ml-2">
                  <input
                    type="file"
                    accept="*/*"
                    onChange={async (e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        await fileUpload({
                          name: file.name,
                          isPrivate: false, // Set according to your requirement
                          file,
                        });
                        field.onChange(file);
                      }
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex items-center gap-2 mt-5">
            <Checkbox id="udl" />
            <p>
              I acknowledge that I have reviewed and agree to the{" "}
              <Link href="#" prefetch={false}>
                Universal Data License (UDL)
              </Link>
            </p>
          </div>
        <Separator className="mt-3" />
        <div className="py-10">
          <Button type="submit" className="gap-3">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}
export function waitFor(delay: number | undefined) {
  return new Promise((res) => setTimeout(res, delay))
}


