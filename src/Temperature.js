import React from "react";

export default function Temperature() {
  return (
    <div class="col-6">
      <div class="d-flex weather-temperature">
        <img src="" alt="Clear" id="icon" />
        <div>
          <strong id="temperature" />
          <span class="units" /> °F
        </div>
      </div>
    </div>
  );
}
