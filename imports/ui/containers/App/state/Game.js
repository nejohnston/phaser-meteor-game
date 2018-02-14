import Phaser from "/imports/startup/phaser-split.js";
import Tiles from "./../sprite/tiles";
// import { fireButton } from './../methods/bullet.js';
export default class extends Phaser.State {
  init() {}
  preload() {}

  create() {
    this.physics.startSystem(Phaser.Physics.ARCADE);

    for (var i = 0; i < 10; i++) {
      var sprite = game.add.sprite(64 + 64 * i, 200 + i * 4, "block");

      sprite.name = "block" + i;

      sprite.inputEnabled = true;

      sprite.events.onInputDown.add(clickedSprite, this);
    }
    // this.stage.disableVisibilityChange = false;
    // this.bulletSpeed = 600;
    // // generate random starting x posiiton based on world width
    // const x = Math.floor(Math.random() * this.world.width);
    // const y = Math.floor(Math.random() * this.world.height);
    // this.textincrement = 0;
    // this.style = {
    //   font: "bold 32px Arial",
    //   fill: "#000",
    //   boundsAlignH: "center",
    //   boundsAlignV: "middle"
    // };
    // // create player with starting position
    // this.player = new Player({
    //   game: this,
    //   x,
    //   y,
    //   asset: "player"
    // });
    // this.game.add.existing(this.player);
    // // send server players coordinates to broadcast to all other clients

    //   this.physics.arcade.enable(this.djObjects[d.challenger.id]);
    //   Streamy.emit("createChallengerResponse", {
    //     newChallengerId: d.challenger.id,
    //     id: Streamy.id(),
    //     player: { x: this.player.x, y: this.player.y, alive: this.player.alive }
    //   });
    // });
    // Streamy.on("requestChallengers", d => {
    //   this.djObjects[d.challenger.id] = this.game.add.existing(
    //     new DJ({
    //       game: this,
    //       x: d.challenger.player.x,
    //       y: d.challenger.player.y,
    //       asset: "dj"
    //     })
    //   );
    //   if (!d.challenger.player.alive) {
    //     this.djObjects[d.challenger.id].kill();
    //   }
    //   this.physics.arcade.enable(this.djObjects[d.challenger.id]);
    // });
    // Streamy.on("spawnBullet", d => {
    //   this.fireEvilBullet(d.data);
    // });
    // Streamy.on("respawnHim", d => {
    //   this.djObjects[d.data.id].reset(d.data.x, d.data.y);
    // });
    // Streamy.on("upHisScore", d => {
    //   console.log(d.id, d.score);
    //   this.scoreObjects[d.id].setText(`Player Score: ${d.score}`);
    // });
    // Streamy.on("gameFull", d => {
    //   this.state.start("GameFull");
    // });
    // Streamy.on("heWon", d => {
    //   this.gameOver(d.email);
    // });
    // this.firingTimer = 0;
    // this.bulletTime = 0;
    // this.createBulletSettings();
    // // set physics on below entities and groups
    // this.physics.arcade.enable([this.bullets, this.player, this.platforms]);
    // this.player.body.collideWorldBounds = true;
    // this.fireButton = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    // this.respawnkey = this.input.keyboard.addKey(Phaser.Keyboard.R);
    // this.game.add.existing(this.bullets.getFirstExists(false));
    // Streamy.on("killDJ", (d, s) => {
    //   if (d.data.id === Streamy.id()) {
    //     this.player.kill();
    //     return;
    //   }
    //   this.djObjects[d.data.id].kill();
    // });
    // while (
    //   this.physics.arcade.overlap(
    //     this.player,
    //     this.platforms,
    //     null,
    //     this.platformSpawnCheck,
    //     this
    //   ) ||
    //   this.physics.arcade.overlap(
    //     this.player,
    //     this.goodPlatforms,
    //     null,
    //     this.platformSpawnCheck,
    //     this
    //   )
    // ) {
    //   let newX = Math.floor(Math.random() * this.world.width);
    //   let newY = Math.floor(Math.random() * this.world.height);
    //   this.player.x = newX;
    //   this.player.y = newY;
    //   this.player.reset(newX, newY);
    // }
    // music = this.game.add.audio("backgroundMusic");
    // bulletFire = this.game.add.audio("bulletFire");
    // music.loop = true;
    // music.play();
    // this.game.onPause.add(function() {
    //   Streamy.emit("DJDie", { data: { id: Streamy.id() }, myID: Streamy.id() });
    //   this.state.start("Splash");
    // }, this);
  }

  update() {}

  render() {}
}
