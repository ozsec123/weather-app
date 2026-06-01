<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Buggy SF Weather App</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <main class="card">
    <h1>San Francisco Weather</h1>

    <section>
      <h2>Local Time</h2>
      <p id="time">Loading...</p>
    </section>

    <section>
      <h2>Weather</h2>
      <p id="temperature">Loading temperature...</p>
      <p id="wind">Loading wind...</p>
    </section>

    <button id="refreshBtn">Refresh Weather</button>
  </main>

  <script src="app.js"></script>
</body>
</html>
