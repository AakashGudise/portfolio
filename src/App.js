import React from 'react';
// import { useTypewriter , Cursor } from 'react-simple-typewriter';
import { init } from 'ityped';
import { useRef, useEffect } from 'react';


import './App.css';
import { MenuComponent } from './festurecomponent/menucomponent/menu.component';
import { HomeComponent } from './components/homecomponent/home.component';
import { Home2 } from './components/homecomponent/home2component';
import { AboutComponent } from './components/aboutcomponent/about.component';
import { AdminLayout } from './admin-layout/admin-layout.component';
import { FactsComponent } from './components/factscomponent/fact.component';
import { BrowserRouter } from 'react-router-dom';
import { AppRouterComponent } from './app.router';

function App() {
  // const textRef = useRef();

  // useEffect(() => {
  //   init(textRef . current,{
  //     backDelay:1500,
  //     showCursor:true,
  //     strings : ['developer','designer','mern stack developer'],
  //   })
  // },[])
  // const {text} = useTypewriter({
  //   words : ['Developer','Designer'],
  //   loop : {},
  //   typeSpeed:120,
  // });
  return (
    <div className="App">
      {/* <p>I'm a 
        <span className='text-danger' ref={textRef}>
          {text} 
        </span>
        <Cursor></Cursor>
        </p> */}


      {/* <MenuComponent></MenuComponent> */}
      {/* <HomeComponent></HomeComponent>  */}
      {/* <Home2></Home2> */}
      {/* <AboutComponent></AboutComponent> */}

      <AdminLayout></AdminLayout>
      {/* <FactsComponent></FactsComponent> */}
<BrowserRouter>
<AppRouterComponent></AppRouterComponent>
</BrowserRouter>

    </div>
  );
}

export default App;
