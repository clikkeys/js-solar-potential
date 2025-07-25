<!--
 Copyright 2023 Google LLC

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      https://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 -->

<script lang="ts">
  /* global google */

  import * as GMAPILoader from '@googlemaps/js-api-loader';
  const { Loader } = GMAPILoader;

  import { page } from '$app/stores';
  import { onMount } from 'svelte';

  import SearchBar from './components/SearchBar.svelte';
  import Sections from './sections/Sections.svelte';

  const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const defaultPlace = {
    name: 'Rinconada Library',
    address: '1213 Newell Rd, Palo Alto, CA 94303',
  };

  let address = '';
  let addressParam = '';
  $: addressParam = $page.url.searchParams.get('address');

  let location: google.maps.LatLng | undefined;
  const zoom = 19;

  let mapElement: HTMLElement;
  let map: google.maps.Map;
  let geometryLibrary: google.maps.GeometryLibrary;
  let mapsLibrary: google.maps.MapsLibrary;
  let placesLibrary: google.maps.PlacesLibrary;

  // Geocode and update map/location
  async function searchAddress(addr: string) {
    if (!mapsLibrary || !map) return;
    const geocoder = new google.maps.Geocoder();
    try {
      const response = await geocoder.geocode({ address: addr });
      if (response.results && response.results.length > 0) {
        location = response.results[0].geometry.location;
        map.setCenter(location);
        // Optionally, update zoom or add marker here
      } else {
        alert('Address not found.');
      }
    } catch (e) {
      alert('Geocoding failed.');
    }
  }

  onMount(async () => {
    // Load the Google Maps libraries.
    const loader = new Loader({ apiKey: googleMapsApiKey });
    const libraries = {
      geometry: loader.importLibrary('geometry'),
      maps: loader.importLibrary('maps'),
      places: loader.importLibrary('places'),
    };
    geometryLibrary = await libraries.geometry;
    mapsLibrary = await libraries.maps;
    placesLibrary = await libraries.places;

    // Get the address information for the default location.
    const geocoder = new google.maps.Geocoder();
    const geocoderResponse = await geocoder.geocode({
      address: defaultPlace.address,
    });
    const geocoderResult = geocoderResponse.results[0];

    // Initialize the map at the desired location.
    location = geocoderResult.geometry.location;
    map = new mapsLibrary.Map(mapElement, {
      center: location,
      zoom: zoom,
      tilt: 0,
      mapTypeId: 'satellite',
      mapTypeControl: false,
      fullscreenControl: false,
      rotateControl: false,
      streetViewControl: false,
      zoomControl: false,
    });

    // If address param exists, search for it
    if (addressParam) {
      address = addressParam.replace(/-/g, ' ');
      await searchAddress(address);
    }
  });
</script>

<!-- Top bar -->
<div class="flex flex-row h-full">
  <!-- Main map -->
  <div bind:this={mapElement} class="w-full" />

  <!-- Side bar -->
  <aside class="flex-none md:w-96 w-80 p-2 pt-3 overflow-auto">
    <div class="flex flex-col space-y-2 h-full">
      {#if placesLibrary && map}
        <SearchBar
          bind:location
          {placesLibrary}
          {map}
          initialValue={addressParam ? addressParam.replace(/-/g, ' ') : defaultPlace.name}
        />
      {/if}

      <!-- Removed extra input and button -->

      <div class="p-4 surface-variant outline-text rounded-lg space-y-3">
        <p>
          <a
            class="primary-text"
            href="https://developers.google.com/maps/documentation/solar/overview?hl=en"
            target="_blank"
          >
            Two distinct endpoints of the <b>Solar API</b>
            <md-icon class="text-sm">open_in_new</md-icon>
          </a>
          offer many benefits to solar marketplace websites, solar installers, and solar SaaS designers.
        </p>

        <p>
          <b>Click on an area below</b>
          to see what type of information the Solar API can provide.
        </p>
      </div>

      {#if location}
        {#key location}
          <Sections {location} {map} {geometryLibrary} {googleMapsApiKey} />
        {/key}
      {/if}

      <div class="grow" />

      <div class="flex flex-col items-center w-full">
        <md-text-button
          href="https://github.com/googlemaps-samples/js-solar-potential"
          target="_blank"
        >
          View code on GitHub
          <img slot="icon" src="github-mark.svg" alt="GitHub" width="16" height="16" />
        </md-text-button>
      </div>

      <span class="pb-4 text-center outline-text label-small">
        This is not an officially supported Google product.
      </span>
    </div>
  </aside>
</div>
<style>
aside {
    width: 0 !important;
    padding: 0 !important;
}
:global(md-slider) {
  --md-slider-active-track-color: #013873;
  --md-slider-inactive-track-color: #ccc;
  --md-slider-handle-color: #013873;
  width: 100%;
  margin: 0;
}

/* Or use the ::part pseudo-element if supported: */
:global(md-slider)::part(handle), :global(md-slider)::part(handle):hover{
  background-color: #013873 !important;
}

</style>