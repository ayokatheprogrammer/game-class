import kaboom from "kaboom"

// initialize context
kaboom()

// load assets
loadSprite("player", "sprites/player.png")
loadSprite("ground", "sprites/ground.png")
loadSprite("enemy" ,"sprites/enemy.png")

// add a character to screen
const player = add([
  // list of components
  sprite("player"),
  pos(20, 70),
  area(),
])
addLevel([
  "    ",
  "  @ ",
  "    ",
  "yyyyyyyyyyyyyyy",
], {
  height: 32,
  width: 32,
  "y": () => [
    sprite("ground")
  ],
  "@": () => [
    sprite("enemy"),
    pos(40,40),
    area(),
    "dangerous",
  ]
})
const s = 200

keyDown("right",() => {
  player.move(s,0)
})
keyDown("left",() => {
  player.move(-s,0)
})
player.onCollide("dangerous",destroy)
// add a kaboom on mouse click
onClick(() => {
  addKaboom(mousePos())
})

// burp on "b"
onKeyPress("b", burp)