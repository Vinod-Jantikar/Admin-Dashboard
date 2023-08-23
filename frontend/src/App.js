import { CssBaseline, ThemeProvider } from "@mui/material";
import {createTheme} from "@mui/material/styles"
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Customers from "scenes/customers";
import Daily from "scenes/daily";
import Dashboard from "scenes/dashboard";
import Geography from "scenes/geography";
import Layout from "scenes/layout";
import OverView from "scenes/overView";
import Products from "scenes/products";
import Transactions from "scenes/transactions";
import { themeSettings } from "theme";

function App() {

  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() =>  createTheme(themeSettings(mode)), [mode])

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Navigate to='/dashboard' replace/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/customers" element={<Customers/>}/>
            <Route path="/transactions" element={<Transactions/>}/>
            <Route path="/geography" element={<Geography />} />
            <Route path="/overview" element={<OverView/>}/>
            <Route path="/daily" element={<Daily/>} />
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
