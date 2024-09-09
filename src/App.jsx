import { Route, Routes } from "react-router-dom"
import Layout from "./Layout/Layout"
import Overview from './pages/Overview'
import Wallets from "./pages/Wallets"
import Transactions from "./pages/Transactions"
import Exchange from "./pages/Exchange"
import Market from "./pages/Market"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn.Page"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Overview />} />
          <Route path="/wallets" element={<Wallets />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/market" element={<Market />} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  )
}

export default App

