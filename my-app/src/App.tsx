import './App.css'
import {Button} from "@mantine/core";
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';


function App() {

  return (
    <MantineProvider>
      <div>
         <Button variant="light" color="pink" size="xl" radius="xl">Button</Button>
          <div className="bg-red-500 p-4"> moran kristal </div>
      </div>
    </MantineProvider>
  )
}

export default App
