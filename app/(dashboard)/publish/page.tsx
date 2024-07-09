const user = {
    name: "johndoe",
    walletAddress: "0x123456789abcdef0123456789abcdef01234567",
    email:"testing",
    phone:"1234567890",
}
import PublisherForm from "@/components/forms/PublisherForm"
export default function Home(){
    return(
        <main>
            
            <PublisherForm user={user}/>
            {/* <TestingTwo /> */}
            
        </main>
    )
}