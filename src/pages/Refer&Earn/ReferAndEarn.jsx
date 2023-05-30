import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import EarningWidget from "../../components/EarningWidget/EarningWidget";
import HowDoesItWork from "../../components/HowDoesItWork/HowDoesItWork";
import Friends from "../../assets/Friends.svg";
import Wallet from "../../assets/Wallet.svg";
import Offer from "../../assets/Offer.svg";
import Rupees from "../../assets/Rupees.svg";
import Purchase from "../../assets/Purchase.svg";
import "./ReferAndEarn.scss";

const ReferAndEarn = () => {
  return (
    <>
      <Navbar />
      <div className="app__ReferAndEarn">
        <h4>UI/UX &gt; Refer & Earn</h4>
        <EarningWidget />
        <p>How It Works?</p>
        <div className="howDoes">
          <HowDoesItWork
            logo={Friends}
            heading="Invite Your Friends"
            content="Share the link tutedude.com withyour friends"
          />
          <HowDoesItWork
            logo={Purchase}
            heading="Friend purchases any courses"
            content="Using your REFERRAL CODE in the payments page"
          />
          <HowDoesItWork
            logo={Rupees}
            heading="You get ₹ 200 as referral money"
            content="On total purchase the friend makes, into your wallet"
          />
          <HowDoesItWork
            logo={Offer}
            heading="Your Friend gets ₹ 200 Off "
            content="On his overall fee on successful purchase using your referral code "
          />

          <HowDoesItWork
            logo={Wallet}
            heading="Transfer money from wallet"
            content="When the wallet balance reaches
            ₹200 or more, you can withdraw it"
          />
        </div>
        <div className="app__ReferAndEarn-footer">
          <h4>Friends Who Enrolled</h4>
          <h4>Terms & Conditions</h4>
        </div>
      </div>
    </>
  );
};

export default ReferAndEarn;
