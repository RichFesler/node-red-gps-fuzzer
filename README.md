# node-red-gps-fuzzer

### Description

This Node-RED function node injects randomized error into GPS coordinates to help obscure your exact location. Designed for mobile use where privacy or simulation is needed — not intended for static setups.

If you're logging or broadcasting your position publicly (e.g., Meshtastic, MQTT, live maps), this tool can help mask your true location by adding controlled randomness to latitude, longitude, and altitude.

> 💡 Useless if you're stationary. This is for things that move.

---

### ⚙️ What It Does

- Adds randomized error up to ±15 miles from the actual position
- Modifies altitude within ±100 feet
- Produces realistic lat/lon drift using spherical trigonometry
- Defaults lat/lon/alt to `0` if not provided

---

### 🔧 Configuration

These constants inside the function control how much "fuzz" is applied:

```javascript
const maxDistanceMiles = 15;    // Max horizontal range (miles)
const maxAltitudeFt = 100;      // Max vertical range (feet)
