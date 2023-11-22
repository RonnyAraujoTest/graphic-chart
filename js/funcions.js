window.onload = (event) => {
  new Chartist.Bar(
    "#student",
    {
      labels: ["Organismos Acad. Comunes", "Grado y Tenico superior"],
      series: [[47983, 148642]],
    },
    {
      seriesBarDistance: 10,
      reverseData: true,
      horizontalBars: true,
      axisY: {
        offset: 70,
      },
    }
  );

  new Chartist.Bar(
    "#teacher",
    {
      labels: ["Tiempo Completo", "Medio Tiempo", "Por Hora"],
      series: [[188, 69, 2909]],
    },
    {
      seriesBarDistance: 10,
      reverseData: true,
      horizontalBars: true,
      axisY: {
        offset: 70,
      },
    }
  );

  new Chartist.Bar(
    "#egresados",
    {
      labels: ["Grado", "Postgrado"],
      series: [[6579, 3443]],
    },
    {
      seriesBarDistance: 10,
      reverseData: true,
      horizontalBars: true,
      axisY: {
        offset: 70,
      },
    }
  );

  new Chartist.Bar(
    "#research",
    {
      labels: ["Finalizados", "En Ejecución"],
      series: [[10, 276]],
    },
    {
      seriesBarDistance: 10,
      reverseData: true,
      horizontalBars: true,
      axisY: {
        offset: 70,
      },
    }
  );
};
