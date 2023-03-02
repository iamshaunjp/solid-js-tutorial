import { createSignal } from 'solid-js';

import banner from './assets/banner.png';
import Card from './components/Card';

function App() {
  const [darkTheme, setDarkTheme] = createSignal(false)

  function toggleTheme() {
    setDarkTheme(!darkTheme())
  }

  return (
    <div class="container m-auto bg">
      <header
        class="my-4 p-2 text-xl flex items-center gap-4"
        classList={{"bg-neutral-900": darkTheme(), "text-white": darkTheme() }}
      >
        <span 
          class="material-symbols-outlined cursor-pointer"
          onClick={toggleTheme}
        >light_mode</span>
        <h1>Ninja Merch</h1>
      </header>
      
      <img class="rounded-md" src={banner} alt="site banner" />
      
      <div class="grid grid-cols-4 gap-10 my-4">
        <Card flat={true} rounded={false}>
          <h2>Ninja Tee, black</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, expedita?</p>
          <button class="btn">view</button>
        </Card>
        <Card flat={false} rounded={true}>
          <h2>Ninja Tee, white</h2>
          <button class="btn">view</button>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, expedita?</p>
          <p>Only £10</p>
        </Card>
      </div>

    </div>
  );
}

export default App;
