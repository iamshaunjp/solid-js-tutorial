import { createSignal } from 'solid-js';
import { Routes, Route, A } from "@solidjs/router";

import banner from './assets/banner.png';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  const [darkTheme, setDarkTheme] = createSignal(false)

  function toggleTheme() {
    setDarkTheme(!darkTheme())
  }

  return (
    <div class="container m-auto bg">
      <header
        class="my-4 p-2 text-xl flex items-center gap-4 justify-end"
        classList={{"bg-neutral-900": darkTheme(), "text-white": darkTheme() }}
      >
        <span 
          class="material-symbols-outlined cursor-pointer"
          onClick={toggleTheme}
        >light_mode</span>
        <h1 class="mr-auto">Ninja Merch</h1>

        <A href="/">Home</A>
        <A href="/cart">Cart</A>
      </header>
      
      <img class="rounded-md" src={banner} alt="site banner" />

      <Routes>
        <Route path="/" component={Home} />
        <Route path="/cart" component={Cart} />
      </Routes>
      
    </div>
  );
}

export default App;
