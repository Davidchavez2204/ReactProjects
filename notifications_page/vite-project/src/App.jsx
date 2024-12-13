import Post1 from './components/Post1';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import usuario1 from './assets/images/avatar-mark-webber.webp'
import usuario2 from './assets/images/avatar-angela-gray.webp'
function App() {
  return (
    <section class="py-6 px-4">
      <div class="flex place-content-between">
        <h3 class="flex font-bold text-xl mb-6 text-veryDarkBlue gap-[19px]">Notifications
        <span class="inline-block bg-blue text-white w-8 h-8 text-center border rounded-md [word-spacing:9px]">3</span>
        </h3>
        <p class="text-darkGrayishBlue text-sm font-medium cursor-pointer hover:text-blue">Mark all as read</p>
        </div>
        <div className='flex flex-col gap-8 items-center'>
          <Post1 
          imagen={usuario1}
          nombre={'Mark Webber'}
          mensaje={'reacted to your recent post '}
          segundo={'My first tournament  today!'}/> 
          <Post1 
          imagen={usuario2}
          nombre={'Mark Webber'}
          mensaje={'reacted to your recent post '}
          segundo={'My first tournament  today!'}/> 
        </div>
        
    </section>
     
  );
}

export default App
