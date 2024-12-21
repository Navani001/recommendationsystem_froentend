import { useEffect, useState } from "react";
import ActionAreaCard from "./Cart";
import {
  searchMovies,
  fetchDescription,
  fetchHistoricalData,
} from "./utilis/backendfetch";
import "./index.css";
import InputSubscription from "./Input";
import Button from "@mui/material/Button";
import BasicPopover from "./popup";
function App() {
  const [search, setSearch] = useState("");
  const [desc, setDesc] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [descData, setDescData] = useState([]);
  const [fetchData, setFetchData] = useState([]);
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    localStorage.setItem("name", "user1");
  }, []);
  // Fetch search data
  const searchFetch = async (movie) => {
    setLoading1(true);
    setError("");
    console.log(movie);
    try {
      const data = await searchMovies(movie);
      setSearchData(data);
    } catch (err) {
      setError("Failed to fetch search results.");
    } finally {
      setLoading1(false);
    }
  };

  // Fetch description data
  const descFetch = async (desc) => {
    setLoading2(true);
    setError("");
    try {
      const data = await fetchDescription(desc);
      setDescData(data);
    } catch (err) {
      setError("Failed to fetch description results.");
    } finally {
      setLoading2(false);
    }
  };

  // Fetch historical data
  const hisFetch = async (movie) => {
    setLoading3(true);
    setError("");
    console.log(movie);
    try {
      const data = await fetchHistoricalData(
        localStorage.getItem("name"),
        movie
      );
      setFetchData(data);
    } catch (err) {
      setError("Failed to fetch historical data.");
    } finally {
      setLoading3(false);
    }
  };

  // Render the UI
  return (
    <div className="h-full w-full flex justify-center items-center text-white">
      <div className="h-[95%] w-[96%] flex flex-col">
        <div className="h-full w-full">
          <div className="w-full">
            <div className="flex justify-between">
              <h1 className="text-3xl font-bold w-full h-[50px] flex items-center">
                Movie Search
              </h1>
              <div>
                <BasicPopover></BasicPopover>
              </div>
            </div>
            <InputSubscription
              fetch={searchFetch}
              place="Enter name of a movie"
            />
            {/* <div className="flex w-full h-[70%]   items-center"> */}
            {loading1 ? (
              <p>Loading movie data...</p>
            ) : searchData.length > 0 ? (
              <div className="flex w-full h-[300px]   items-center">
                <div className="flex overflow-scroll scrollbar-hide gap-3 ">
                  {searchData.map((item, index) => (
                    <div key={index}>
                      <ActionAreaCard movie={item}></ActionAreaCard>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="self-start content-center p-5 flex h-[20%]">
                No movie data found.
              </div>
            )}
            {/* </div> */}
          </div>
          <div className=" w-full ">
            <h1 className="text-3xl font-bold w-full h-[50px] flex items-center">
              Movie Search based on description
            </h1>

            <InputSubscription
              fetch={descFetch}
              place="enter description of a movie"
            />
            {/* <div className="flex w-full h-[70%]   items-center"> */}
            {loading2 ? (
              <p>Loading description data...</p>
            ) : descData.length > 0 ? (
              <div className="flex w-full h-[300px]   items-center">
                <div className="flex overflow-scroll scrollbar-hide gap-3">
                  {descData.map((item, index) => (
                    <div key={index}>
                      <ActionAreaCard movie={item}></ActionAreaCard>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="self-start content-center p-5 h-[20%]">
                No movie data found.
              </div>
            )}

            {/* </div> */}
          </div>
          <div className=" w-full">
            <h1 className="text-3xl font-bold w-full h-[50px] flex items-center">
              Movie Search based on history
            </h1>
            <InputSubscription
              fetch={hisFetch}
              place="Enter the name to be added to the history of user"
            />

            <div className="flex w-full h-[80%]   items-center">
              {loading3 ? (
                <p>Loading history data...</p>
              ) : fetchData.length > 0 ? (
                <div className="flex w-full h-[300px]   items-center">
                  <div className="flex overflow-scroll scrollbar-hide gap-3">
                    {fetchData.map((item, index) => (
                      <div key={index}>
                        <ActionAreaCard movie={item}></ActionAreaCard>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="self-start content-center p-5 ">
                  No movie data found.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default App;
