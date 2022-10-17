// init framer
import MotionDiv from "../components/utils/MotionDiv";

// components
import PhoneDisplay from "../components/home/PhoneDIsplay";
import Macs from "../components/home/Macs";
import Grid from "../components/home/Grid";
import PageFooter from "../components/home/PageFooter";

const Home = () => {
  const phones = [
    {
      phoneName: "iPhone 14 Pro",
      pro: true,
      src: "../assets/img/14pro.png",
      header: "Pro. Beyond.",
    },
    {
      phoneName: "iPhone 14",
      pro: false,
      src: "../assets/img/14.png",
      header: "Big and Bigger",
    },
  ];
  return (
    <MotionDiv>
      {phones.map((phone) => (
        <PhoneDisplay phone={phone} key={phone.phoneName} />
      ))}
      <Macs />
      <Grid />
      <PageFooter />
    </MotionDiv>
  );
};

export default Home;
