import App from './App';
import './client/styles/App.css'
import { createRoot } from 'react-dom/client';
const domNode = document.getElementById('root');
if(domNode){
  const root = createRoot(domNode);
  root.render(<App/>)
}

