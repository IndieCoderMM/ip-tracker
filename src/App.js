import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MapView from './components/MapView';
import SearchBar from './components/SearchBar';
import { getClientLocation } from './redux/clientState/client';

function App() {
  const dispatch = useDispatch();
  const clientStatus = useSelector((state) => state.client.status);
  useEffect(() => {
    if (clientStatus === 'idle') dispatch(getClientLocation());
  }, [dispatch, clientStatus]);
  return (
    <div>
      <SearchBar />
      <MapView />
    </div>
  );
}

export default App;
