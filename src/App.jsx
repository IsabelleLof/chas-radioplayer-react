// App.js
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import Channel from "./Channel";
import Navbar from "./Navbar";
import "./App.css";
import "react-loading-skeleton/dist/skeleton.css";

const App = () => {
  const [channels, setChannels] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.sr.se/api/v2/channels?format=json")
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setChannels(data.channels);
          setIsLoading(false);
        }, 2000);
      });
  }, []);

  const filteredChannels = channels.filter((channel) => {
    return channel.name.toLowerCase().includes(search.toLowerCase());
  });

  const handleSearchChange = (value) => {
    setSearch(value);
  };

  return (
    <div className="container">
      <Navbar onSearchChange={handleSearchChange} />
      {isLoading ? (
        <Skeleton count={10} width={1200} height={500} color="grey" />
      ) : (
        filteredChannels.map((channel) => (
          <Channel key={channel.id} channel={channel} />
        ))
      )}
    </div>
  );
};

export default App;
