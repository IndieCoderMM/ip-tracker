import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LocationCard from './components/LocationCard';
import MapView from './components/MapView';
import Popup from './components/Popup';
import SearchBar from './components/SearchBar';
import { getClientLocation } from './redux/clientState/client';

function App() {
  const dispatch = useDispatch();
  const clientStatus = useSelector((state) => state.client.status);
  useEffect(() => {
    if (clientStatus === 'idle') dispatch(getClientLocation());
  }, [dispatch, clientStatus]);

  return (
    <main>
      <header>
        <h1>IP Address Tracker</h1>
        <SearchBar />
        <LocationCard />
      </header>
      <MapView />
      <Popup />
    </main>
  );
}

export default App;
