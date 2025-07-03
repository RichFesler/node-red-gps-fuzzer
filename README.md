# node-red-gps-fuzzer

### Description

This Node-RED function node injects randomized error into GPS coordinates to help obscure your exact location. Designed for mobile use where privacy or simulation is needed — not intended for static setups.

If you're logging or broadcasting your position publicly (e.g., Meshtastic, MQTT, live maps), this tool can help mask your true location by adding configurable randomness to latitude, longitude, and altitude.

> 💡 Useless if you're stationary. This is for things that move.

---

### ⚙️ What It Does

- Adds randomized error up to a configurable distance and altitude
- Produces realistic lat/lon drift using spherical trigonometry
- Leaves missing GPS values untouched (defaults to 0)

---

### 🔧 Configuration

These constants inside the function control how much "fuzz" is applied:

```javascript
const maxDistanceMiles = 15;    // Max horizontal range (miles)
const maxAltitudeFt = 100;      // Max vertical range (feet)
```

You can:
- **Reduce `maxDistanceMiles`** (e.g., 1–5) for closer deviation
- **Set `maxAltitudeFt = 0`** if altitude doesn’t matter

---

### 🧪 Use Cases

- 🔁 **Meshtastic**: obscure GPS broadcasts without disabling location
- 🚐 **Vanlife**: publish where you've been without giving away exact campsites
- 🚤 **Boat tracking**: simulate or protect marine GPS reporting
- 🚛 **Fleet/truck logs**: fuzz position for security while maintaining general tracking
- 🧪 **Node-RED simulation**: generate dynamic test data with realistic movement
- 🔐 **MQTT/API publishing**: share your location with built-in privacy

---

### 🚀 How To Use

Paste the code below into a **Function node** in Node-RED. Feed it GPS data like:

```javascript
msg.payload = {
  lat: 37.7749,
  lon: -122.4194,
  altitude: 50
}
```

Output will be:

```javascript
msg.payload = {
  lat: <offset>,
  lon: <offset>,
  altitude: <offset>
}
```

---

### 📜 License

MIT — free to use, modify, fork, or break.
