import dashboard from "../../assets/images/dashboard.jpeg";

export default function PhoneMockup() {

  return (

<div className="relative flex justify-center">

<div className="absolute w-96 h-96 bg-blue-600/20 blur-3xl rounded-full"></div>

<div className="relative bg-black rounded-[40px] p-4 border-[8px] border-slate-700 shadow-2xl">

<img

src={dashboard}

alt="Dashboard"

className="w-[300px] rounded-[25px]"

 />

</div>

</div>

  );

}