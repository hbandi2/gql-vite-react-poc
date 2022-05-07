import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TopicsPage } from "./topics";

export function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/topics" element={<TopicsPage />} />
        <Route path="/" element={<Navigate replace to="/topics" />} />
      </Routes>
    </BrowserRouter>
  );
}
