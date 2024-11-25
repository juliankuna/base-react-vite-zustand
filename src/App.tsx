// import { ConfigProvider } from "antd";
import "./App.css";
// import { AppTheme } from "./AppTheme";
// import esES from 'antd/locale/es_ES';
import './App.css'
import { Router } from './navigation/Router';

function App() {
  return (
    // <ConfigProvider theme={AppTheme} locale={esES}>
    <Router />
    /* </ConfigProvider>   */
  )
}

export default App
