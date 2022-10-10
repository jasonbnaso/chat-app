import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import { Chat } from "../Chat/Chat";

export const Routing = () => {
  return (
    <div>
      <div className="row custom-center">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/chat" element={<Chat />}></Route>
        </Routes>
      </div>
    </div>
  );
};
