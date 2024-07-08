import { ConnectButton } from "arweave-wallet-kit";

 
 const ConnectionButton = () => {
    return (
        <ConnectButton
          profileModal={true}
          showBalance={false}
          showProfilePicture={true}
        />
      );
 }
 
 export default ConnectionButton