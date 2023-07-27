import React from "react";

export default function Weather() {
  return (
    <div class="col-6">
      <ul>
        <li>
          Humidity: <span id="humidity"></span>%
        </li>
        <li>
          Wind: <span id="wind"></span> mph
        </li>
      </ul>
    </div>
  );
}
