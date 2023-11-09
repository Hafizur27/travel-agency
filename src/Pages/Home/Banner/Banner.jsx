import { useState } from "react";
import img from "../../../assets/images/banner/banner.jpg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
const Banner = () => {
  const navigate = useNavigate();
  const [isError, setIsError] = useState({
    fromLocation: false,
    toLocation: false,
    depart: false,
    return: false,
    adultSeat: false,
    childSeat: false,
  });

  const allDistrict = [
    { id: 1, name: "France" },
    { id: 2, name: "Bandarban" },
    { id: 3, name: "Barguna" },
    { id: 4, name: "Barishal" },
    { id: 5, name: "Bhola" },
    { id: 6, name: "Bogra" },
    { id: 7, name: "Brahmanbaria" },
    { id: 8, name: "Chandpur" },
    { id: 9, name: "Chapainawabganj" },
    { id: 10, name: "Chattogram" },
    { id: 11, name: "Chuadanga" },
    { id: 12, name: "Comilla" },
    { id: 13, name: "Cox's Bazar" },
    { id: 14, name: "Dhaka" },
    { id: 15, name: "Dinajpur" },
    { id: 16, name: "Faridpur" },
    { id: 17, name: "Feni" },
    { id: 18, name: "Gaibandha" },
    { id: 19, name: "Gazipur" },
    { id: 20, name: "Gopalganj" },
    { id: 21, name: "Habiganj" },
    { id: 22, name: "Jamalpur" },
    { id: 23, name: "Jashore" },
    { id: 24, name: "Jhalokati" },
    { id: 25, name: "Jhenaidah" },
    { id: 26, name: "Joypurhat" },
    { id: 27, name: "Khagrachari" },
    { id: 28, name: "Khulna" },
    { id: 29, name: "Kishoreganj" },
    { id: 30, name: "Kurigram" },
    { id: 31, name: "Kushtia" },
    { id: 32, name: "Lakshmipur" },
    { id: 33, name: "Lalmonirhat" },
    { id: 34, name: "Madaripur" },
    { id: 35, name: "Magura" },
    { id: 36, name: "Manikganj" },
    { id: 37, name: "Meherpur" },
    { id: 38, name: "Moulvibazar" },
    { id: 39, name: "Munshiganj" },
    { id: 40, name: "Mymensingh" },
    { id: 41, name: "Naogaon" },
    { id: 42, name: "Narail" },
    { id: 43, name: "Narayanganj" },
    { id: 44, name: "Narsingdi" },
    { id: 45, name: "Natore" },
    { id: 46, name: "Nawabganj" },
    { id: 47, name: "Netrakona" },
    { id: 48, name: "Nilphamari" },
    { id: 49, name: "Noakhali" },
    { id: 50, name: "Pabna" },
    { id: 51, name: "Panchagarh" },
    { id: 52, name: "Patuakhali" },
    { id: 53, name: "Pirojpur" },
    { id: 54, name: "Rajbari" },
    { id: 55, name: "Rajshahi" },
    { id: 56, name: "Rangamati" },
    { id: 57, name: "Rangpur" },
    { id: 58, name: "Satkhira" },
    { id: 59, name: "Shariatpur" },
    { id: 60, name: "Sherpur" },
    { id: 61, name: "Sirajganj" },
    { id: 62, name: "Sunamganj" },
    { id: 63, name: "Sylhet" },
    { id: 64, name: "Tangail" },
    { id: 65, name: "Thakurgaon" },
  ];
  const travelTypes = [
    {
      id: 1,
      type: "Air Travel",
      description: "Traveling by airplane, usually for long-distance trips.",
    },
    {
      id: 2,
      type: "Road Trip",
      description: "Traveling by car or motorcycle, often for scenic journeys.",
    },
    {
      id: 3,
      type: "Cruise",
      description:
        "Traveling on a large ship, typically for leisure and exploration of coastal areas.",
    },
    {
      id: 4,
      type: "Train Journey",
      description:
        "Traveling by train, known for its scenic routes and relaxed pace.",
    },
    {
      id: 5,
      type: "Backpacking",
      description:
        "Traveling with minimal gear and relying on public transportation or walking.",
    },
    {
      id: 6,
      type: "RV Adventure",
      description:
        "Traveling in a recreational vehicle (RV) for a mobile home experience.",
    },
    {
      id: 7,
      type: "Hiking Expedition",
      description:
        "Traveling on foot through nature, often involving multi-day hikes and camping.",
    },
    {
      id: 8,
      type: "Biking Tour",
      description:
        "Traveling on a bicycle, ideal for exploring smaller, more local areas.",
    },
    {
      id: 9,
      type: "Camping Trip",
      description:
        "Traveling to campsites and spending nights in tents or under the stars.",
    },
    {
      id: 10,
      type: "Cultural Immersion",
      description:
        "Traveling to learn about and experience different cultures and traditions.",
    },
  ];

  const [data, setData] = useState({
    fromLocation: "",
    toLocation: "",
    depart: "",
    return: "",
    adultSeat: "",
    childSeat: "",
  });

  const handleSearchData = (e) => {
    e.preventDefault();

    setIsError({
      fromLocation: data.fromLocation === "" ? true : false,
      toLocation: data.toLocation === "" ? true : false,
      depart: data.depart === "" ? true : false,
      return: data.return === "" ? true : false,
      adultSeat: data.adultSeat === "" ? true : false,
      childSeat: data.childSeat === "" ? true : false,
    });
    if (data.fromLocation === "") {
      return;
    } else {
      navigate("/destination/" + data.fromLocation);
    }
    console.log(data);
  };

  return (
    <div className="bg-cover " style={{ backgroundImage: `url(${img})` }}>
      <div className="font-bold h-[100vh] flex items-center justify-center ">
        <div className="border bg-slate-800 p-4 opacity-100">
          {/* tab Content here */}
          <div className="relative pt-4">
            <div className="text-white grid grid-cols-8 gap-2 items-center pt-2 max-w-[900px]">
              {/* Flying from Location*/}
              <div className="col-span-2">
                <div className=" bg-white text-black px-6 py-3 rounded">
                  <h5 className="text-xs ps-1">Destination</h5>
                  <select
                    onClick={() =>
                      setIsError({ ...isError, fromLocation: true })
                    }
                    onChange={(e) => {
                      setData({ ...data, fromLocation: e.target.value });
                    }}
                    defaultValue={data.fromLocation}
                    className="outline-none"
                  >
                    <option selected>Pick a place</option>
                    {allDistrict?.map((item) => {
                      return (
                        <option value={item?.name} key={item?.id}>
                          {item?.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                {isError.fromLocation && data.fromLocation === "" && (
                  <p className="text-red-500 text-xs">
                    {"The field is required*"}
                  </p>
                )}
              </div>
              {/* Flying To Location */}
              <div className="col-span-2">
                <div className=" bg-white text-black px-6 py-3 rounded">
                  <h5 className="text-xs ps-1">Type</h5>
                  <select
                    className="outline-none"
                    defaultValue={data.toLocation}
                    onClick={() => setIsError({ ...isError, toLocation: true })}
                    onChange={(e) => {
                      setData({ ...data, toLocation: e.target.value });
                      () => setIsError({ ...isError, toLocation: true });
                    }}
                  >
                    <option selected>Pick a place</option>
                    {travelTypes?.map((item) => {
                      return (
                        <option value={item?.type} key={item?.id}>
                          {item?.type}
                        </option>
                      );
                    })}
                  </select>
                </div>
                {isError.toLocation && data.toLocation === "" && (
                  <p className="text-red-500 text-xs">
                    {"The field is required*"}
                  </p>
                )}
              </div>
              {/* Depart date */}
              <div>
                <div className="bg-white text-black px-1 py-3 rounded">
                  <h5 className="text-xs">When</h5>
                  <div onClick={() => setIsError({ ...isError, depart: true })}>
                    <DatePicker
                      className="w-full outline-none"
                      on
                      selected={data.depart}
                      onChange={(date) => {
                        setData({ ...data, depart: date });
                      }}
                    />
                  </div>
                </div>
                {isError.depart && data.depart === "" && (
                  <p className="text-red-500 text-xs">{"depart date need*"}</p>
                )}
              </div>
              {/* Travelers section */}
              <div className="col-span-2">
                <div className=" bg-white text-black px-6 py-3 rounded">
                  <h5 className="text-xs ps-1">Guest</h5>
                  <select
                    className="outline-none"
                    defaultValue={data.toLocation}
                    onClick={() => setIsError({ ...isError, toLocation: true })}
                    onChange={(e) => {
                      setData({ ...data, toLocation: e.target.value });
                      () => setIsError({ ...isError, toLocation: true });
                    }}
                  >
                    <option selected>Pick guest</option>
                    <option value="00">00</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                  </select>
                </div>
                {isError.toLocation && data.toLocation === "" && (
                  <p className="text-red-500 text-xs">
                    {"The field is required*"}
                  </p>
                )}
              </div>
              <div>
                <button
                  onClick={handleSearchData}
                  className="bg-red-500 px-5 py-3 rounded"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
