import { Route, Routes } from "react-router-dom";
import { DefaulLayout } from "./laytouts/DefaultLayout";
import { History } from "./pages/History";
import { Home } from "./pages/Home";

export function Router(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<DefaulLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  );
}
