if (window.matchMedia("(min-width: 600px)").matches) {
  const scene = document.getElementById('scene')
  const parallaxInstance = new Parallax(scene, {
      pointerEvents: true,
      invertX: false,
      invertY: false
  })
}