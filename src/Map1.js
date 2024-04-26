import React, { useEffect, useState } from "react";
import Navheader from "./components/Navheader";
import {
  MapContainer,
  Marker,
  Polyline,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { Popup } from "react-leaflet";
import redIcon from "./assets/location.png";
import greenIcon from "./assets/gps.png";
import OrangeIcon from "./assets/placeholder.png";
import { useSelector } from "react-redux"; // Import useSelector hook to access Redux state
import axios from "axios"; // Import Axios for HTTP requests

const Home = () => {
  const position = [20.02297427233029, 42.624228087923576]; // Default position
  const [persons, setPersons] = useState([]); // State variable to hold persons data

  // const fetchPersons = async () => {
  //   try {
  //     const response = await axios.get(
  //       "http://jazlhelp.runasp.net/api/content"
  //     );
  //     setPersons(response.data);
  //     console.log("sucess fetching the data", response.data);
  //   } catch (error) {
  //     console.error("Error fetching persons data:", error);
  //     // Handle errors here
  //   }
  // };

  useEffect(() => {
    // fetchPersons();
    return () => {
      // Cleanup function to remove markers when component unmounts
      // setPersons([]); // Clear persons state
    };
  }, []);

  const markers = [
    // {
    //   position: [19.999837518893063, 42.60807025928232], // besha1
    //   popup: "Riyadh",
    //   data: "لم يتم المعالجة",
    //   name: "مواطن فلان الفلان",
    //   contactNumbers: "0500000000",
    //   executingEntity: "الجمعية الصحية الانسانية",
    //   requestType: "احتياج الى سرير متحرك لذوي الاحتياجات الخاصة",
    // },
    // {
    //   position: [20.014159268682786, 42.61439655478464], // Jeddah
    //   popup: "Jeddah",
    //   data: "تم المعالجة",
    //   name: "مواطن فلان الفلان",
    //   contactNumbers: "0500000000",
    //   executingEntity: "جمعية عايشين بكرم الله ",
    //   requestType: "يحتاج الى مصروف شهري",
    // },
    // {
    //   position: [19.99760046123814, 42.58951891442223], // Dammam
    //   popup: "Dammam",
    //   data: "جاري المعالجة",
    //   name: "مواطن فلان الفلان",
    //   contactNumbers: "0500000000",
    //   executingEntity: "جمعية  البر",
    //   requestType: "يحتاج الى اثاث منزلي",
    // },
  ];
  const charities = [
    {
      position: [20.032193090419284, 42.616524629009824],
      name: "جمعية البر الخيرية بيشة",
      number: "0551043592",
    },
    {
      position: [20.010703536045963, 42.614877905399844],
      name: "جمعية التنمية الأهلية بوسط بيشة",
      number: "0559678871",
    },
    {
      position: [20.020013433653432, 42.64141196122175],
      name: "جمعية كر لحفظ النعمة",
      number: "0533384488",
    },
  ];

  const getMarkerIcon = (data) => {
    if (data === "لم يتم المعالجة") {
      return new Icon({
        iconUrl: redIcon,
        iconSize: [38, 38],
      });
    } else if (data === "تم المعالجة") {
      return new Icon({
        iconUrl: greenIcon,
        iconSize: [38, 38],
      });
    } else if (data === "جاري المعالجة") {
      return new Icon({
        iconUrl: OrangeIcon,
        iconSize: [38, 38],
      });
    } else if (data === "Red") {
      console.log("It Match the Red icon");
      return new Icon({
        iconUrl: redIcon,
        iconSize: [38, 38],
      });
    } else if (data === "Green") {
      console.log("It Match the Green icon");
      return new Icon({
        iconUrl: greenIcon,
        iconSize: [38, 38],
      });
    } else if (data === "Orange") {
      console.log("It Match the Orange icon");
      return new Icon({
        iconUrl: OrangeIcon,
        iconSize: [38, 38],
      });
    } else {
      console.log("Nothing Match the icons");
      return new Icon({
        iconUrl: redIcon,
        iconSize: [38, 38],
      });
    }
  };
  const handleDelete = async (id) => {
    if (typeof window !== "undefined") {
      try {
        await axios.delete(`http://jazlhelp.runasp.net/api/content/${id}`);
        console.log("Person deleted successfully!");
        // Update state or refetch data if necessary
        // fetchPersons();
      } catch (error) {
        console.error("Error deleting person:", error);
        // Handle errors here
      }
    }
  };
  const handleUpdate = async (longitude, latitude, id, color) => {
    console.log(`the long >> ${longitude} 
    the id >> ${id}
    the lat >> ${latitude}
    the color>>${color}
    `);

    // try {
    //   await axios.put(`http://jazlhelp.runasp.net/api/content/${id}`);
    //   console.log("Person deleted successfully!");
    //   fetchPersons();
    // } catch (error) {
    //   console.error("Error deleting person:", error);
    // }
  };

  const { role, token, email, displayName } = useSelector(
    (state) => state.auth
  ); // Access user role from Redux state
  console.log(
    `User info: Role is ${role}, Token is ${token}, Email is ${email}, DisplayName is ${displayName}`
  );

  const LocationFinderDummy = () => {
    const map = useMapEvents({
      click(e) {
        console.log(e.latlng);
      },
    });
    return null;
  };
  useEffect(() => {
    console.log("persons", persons);
  }, [persons]);

  const limeOptions = { color: "red" };

  const polyline = [
    [42.606719991000126, 20.010043473306567],
    [42.60843559357457, 19.995029904781568],
    [42.58810570306765, 20.007926687340927],
  ];

  return (
    <div className="w-full bg-[#ceb99c] h-[100vh] p-0 m-0 ">
      <Navheader />
      <h1 className="text-4xl font-bold text-center my-8 text-black ">
        الجمعيات الخيرية وفرص التطوع في المحافظة
      </h1>
      <div className="w-[90%] h-[70vh] mx-auto  border-2 border-blue-500">
        <MapContainer
          center={position}
          zoom={14}
          style={{ height: "100%", zIndex: 0 }}
        >
          <TileLayer
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />{" "}
          <TileLayer
            attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          />
          <Polyline positions={polyline} />
          {persons &&
            persons.map((person, index) => (
              <Marker
                key={index}
                position={[person.latitude, person.longitude]}
                icon={getMarkerIcon(person.color)}
              >
                <Popup>
                  <table className="table-auto border-[1.5px] border-black text-right w-[200px] h-[150px]">
                    <tbody className="border-[1.5px] border-black">
                      <tr className="border-[1.5px] border-black">
                        <td className="border-[1.5px] border-black p-1">
                          {person.name || "N/A"}
                        </td>
                        <td className="border-[1.5px] border-black p-1">
                          الاسم:
                        </td>
                      </tr>
                      <tr>
                        <td className="border-[1.5px] border-black p-1">
                          {person.executingEntity || "N/A"}
                        </td>

                        <td className="border-[1.5px] border-black p-1">
                          الجهة المنفذة
                        </td>
                      </tr>
                      <tr>
                        <td className="border-[1.5px] border-black p-1">
                          {person.requestType || "N/A"}
                        </td>
                        <td className="border-[1.5px] border-black p-1">
                          :نوع الحالة
                        </td>
                      </tr>

                      <tr>
                        <td
                          className={`border-[1.5px] border-black p-1 ${
                            person.color == "Red" ? "bg-red-500" : ""
                          }`}
                        ></td>
                        <td className="border-[1.5px] border-black p-1">
                          :النطاق
                        </td>
                      </tr>

                      <tr>
                        <td className="border-[1.5px] border-black p-1">
                          {person.contactNumbers || "N/A"}
                        </td>
                        <td className="border-[1.5px] border-black p-1">
                          :رقم الاتصال
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="flex justify-center">
                    <button
                      className="text-blue-500 cursor-pointer p-1 m-1 "
                      onClick={() =>
                        handleUpdate(
                          person.longitude,
                          person.latitude,
                          person.id,
                          person.color
                        )
                      }
                    >
                      تعديل هذه الحالة
                    </button>
                    <button
                      className="text-red-500 cursor-pointer ml-4 p-1 m-1"
                      onClick={() => handleDelete(person.id)}
                    >
                      مسح هذه الحالة
                    </button>
                  </div>
                </Popup>
              </Marker>
            ))}
          {markers &&
            markers.map((marker, index) => (
              <Marker
                key={index}
                position={marker.position}
                icon={getMarkerIcon(marker.data)}
              >
                <Popup>
                  <table className="table-auto border-[1.5px] border-black text-right w-[200px] h-[150px]">
                    <tbody className="border-[1.5px] border-black">
                      <tr className="border-[1.5px] border-black">
                        <td className="border-[1.5px] border-black p-1">
                          {marker.name || "N/A"}
                        </td>
                        <td className="border-[1.5px] border-black p-1">
                          الاسم:
                        </td>
                      </tr>
                      <tr>
                        <td className="border-[1.5px] border-black p-1">
                          {marker.executingEntity || "N/A"}
                        </td>
                        <td className="border-[1.5px] border-black p-1">
                          الجهة المنفذة
                        </td>
                      </tr>
                      <tr>
                        <td className="border-[1.5px] border-black p-1">
                          {marker.requestType || "N/A"}
                        </td>
                        <td className="border-[1.5px] border-black p-1">
                          :نوع الحالة
                        </td>
                      </tr>
                      <tr>
                        <td className="border-[1.5px] border-black p-1">
                          {marker.contactNumbers || "N/A"}
                        </td>
                        <td className="border-[1.5px] border-black p-1">
                          :رقم الاتصال
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="flex justify-center">
                    <button className="text-blue-500 cursor-pointer p-1 m-1">
                      تعديل هذه الحالة
                    </button>
                    <button
                      className="text-red-500 cursor-pointer ml-4 p-1 m-1"
                      onClick={() => handleDelete(marker.id)}
                    >
                      مسح هذه الحالة
                    </button>
                  </div>
                </Popup>
              </Marker>
            ))}
          {charities &&
            charities.map((charity, index) => (
              <Marker
                key={index}
                position={charity.position}
                icon={getMarkerIcon("red")}
              >
                <Popup>
                  <table className="table-auto border-[1.5px] border-black text-right w-[200px] h-[150px]">
                    <tbody className="border-[1.5px] border-black">
                      <tr className="border-[1.5px] border-black">
                        <td className="border-[1.5px] border-black p-1">
                          {charity.name || "N/A"}
                        </td>
                        <td className="border-[1.5px] border-black p-1">
                          الاسم:
                        </td>
                      </tr>

                      <tr>
                        <td className="border-[1.5px] border-black p-1">
                          {charity.number || "N/A"}
                        </td>
                        <td className="border-[1.5px] border-black p-1">
                          :رقم الاتصال
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Popup>
              </Marker>
            ))}
        </MapContainer>
      </div>

      <div className="flex flex-row gap-4 w-[30%]   my-5 ml-20 pl-12">
        <div className="flex flex-row items-baseline gap-2 text-white my-auto text-xl">
          جمعيات خيرية
          <div className="bg-red-700 rounded-full w-[15px] h-[15px] my-auto" />
        </div>
        <div className="flex flex-row items-baseline gap-2 text-white my-auto text-xl">
          فرص تطوعية
          <div className="bg-green-600 rounded-full w-[15px] h-[15px] my-auto" />
        </div>
      </div>
    </div>
  );
};

export default Home;
