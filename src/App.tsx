import { Tabs } from './components/Tabs';
import { data_2 } from './helpers/mockedData';

function App() {
  return (
    <div style={{ margin: '15px' }}>
      <h1>Tab components</h1>
      <Tabs items={data_2} />
    </div>
  );
}

export default App;
