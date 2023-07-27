import React from "react";

export default function Form() {
  return (
    <form id="search-form" class="mb-3 shadow-sm">
      <div class="row">
        <div class="col-6">
          <input
            type="search"
            placeholder="Type a city.."
            class="form-control"
            id="city-input"
            autocomplete="off"
          />
        </div>
        <div class="col-3">
          <input
            type="submit"
            value="Search"
            class="btn btn-primary shadow-sm w-100"
          />
        </div>
        <div class="col-3">
          <button
            class="btn btn-primary shadow-sm w-100"
            id="current-location-button"
          >
            Current
          </button>
        </div>
      </div>
    </form>
  );
}
