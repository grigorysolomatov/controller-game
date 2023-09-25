// Config //////////////////////////////////////////////////////////////////////
function get_config() {
    let config = {
        tile: {
            width: 100,
            step:  105,
            scale_factor: 1.1,
        },
        gboard: {
            nrows: 5,
            ncols: 5,
            colors: {
                disabled: 0x202040,
                enabled: 0x204040,
                selected: 0x208080,
            },
        },
        dboard: {
            nrows: 5,
            ncols: 5,
            colors: {
                disabled: 0x404020,
                enabled: 0x808020,
                selected: 0x808040,
            },
        },
        window: {
            width: 1300,
            height: 800,
            color: 0x204020,
        },
        time: {
            scale_tween: 500,
            color_tween: 250,
        },
    }
    return config
}
// GPT /////////////////////////////////////////////////////////////////////////
function hexIntToRGB(hexInt) {
    const r = (hexInt >> 16) & 255;
    const g = (hexInt >> 8) & 255;
    const b = hexInt & 255;
    return {r:r, g:g, b:b};
}
function rgbToHexInt({r, g, b}) {
    return (r << 16) + (g << 8) + b;
}
// Classes /////////////////////////////////////////////////////////////////////
class MainScene extends Phaser.Scene {
    preload() {
        this.load.image("tile", "assets/tile.svg");
    }
    create() {
        let config = get_config()        

        this.game_board = new Board({
            scene: this,
            x: config.window.width/4,
            y: config.window.height/2,
            nrows: config.gboard.nrows,
            ncols: config.gboard.ncols,
            is_selectable: false,
            colors: config.gboard.colors,
            //color: config.gboard.color,
            //hl_color: config.gboard.hl_color,
        });
        this.dash_board = new Board({
            scene: this,
            x: config.window.width*3/4,
            y: config.window.height/2,
            nrows: config.dboard.nrows,
            ncols: config.dboard.ncols,
            is_selectable: true,
            colors: config.dboard.colors,
            //color: config.dboard.color,
            //hl_color: config.dboard.hl_color,
        });        
    }
    update(time, delta) {
        
    }
}
class Tile extends Phaser.GameObjects.Sprite {
    constructor({scene, x, y, color, hl_color}) {
        // console.log(x,y)
        super(scene, x, y, "tile");
        scene.add.existing(this);

        let config = get_config();

        this.color = color;
        this.hl_color = hl_color;
        
        this.setTint(color);
        this.displayWidth = config.tile.width;
        this.scaleY = this.scaleX;

        this.original_scale = this.scale;

        this.setInteractive();
        this.on("pointerover", () => {
            if (true) {
                this.hover_highlight(true);                
            }
        });
        this.on("pointerout", () => {
            this.hover_highlight(false);            
        });
        this.on("pointerup", () => {
            console.log("WooHoo");
        });
    }
    tween_tint({from_color, to_color, duration}) {
        let current_tint = hexIntToRGB(from_color);
        let target_tint = hexIntToRGB(to_color);
        this.scene.tweens.add({
            targets: current_tint,
            r: target_tint.r,
            g: target_tint.g,
            b: target_tint.b,
            duration: duration,
            onUpdate: (tween) => {
                let combined_tint = (current_tint.r << 16) | (current_tint.g << 8) | current_tint.b;
                this.setTint(combined_tint);
            }
        });
    }
    hover_highlight(turn_on) {
        if (turn_on) {
            this.tween_tint({
                from_color: this.color,
                to_color: this.hl_color,
                duration: config.time.color_tween,
            });
            this.scene.tweens.add({
                targets: this,
                scale: this.original_scale*config.tile.scale_factor,
                ease: "Quint.Out",
                duration: config.time.scale_tween,
            });
        }
        else {
            this.tween_tint({
                from_color: this.hl_color,
                to_color: this.color,
                duration: config.time.color_tween,
            });
            this.scene.tweens.add({
                targets: this,
                scale: this.original_scale,
                ease: "Quint.Out",
                duration: config.time.scale_tween,
            });
        }
    }
}
class Board {
    constructor({scene, x, y, nrows, ncols, is_selectable, colors}) {
        //[color, hl_color] = [colors.disabled, colors.enabled];
        let color = colors.disabled;
        let hl_color = colors.enabled;        
        
        let config = get_config();
        this.scene = scene;
        this.color = color;
        this.tiles = Array(ncols).fill().map((_,i) => 
             Array(nrows).fill().map((_,j) => new Tile({
                 scene: scene,
                 x: config.tile.step*i + x - (ncols - 1)*config.tile.step/2,
                 y: config.tile.step*j + y - (nrows - 1)*config.tile.step/2,
                 color: color,
                 hl_color: hl_color,
             }))
        );
        this.is_selectable_ = is_selectable;
    }
    is_selectable() {
        return this.is_selectable_;
    }
}
// Run /////////////////////////////////////////////////////////////////////////
let config = get_config()
var game = new Phaser.Game({
    type: Phaser.AUTO,
    width: config.window.width,
    height: config.window.height,
    backgroundColor: config.window.color,
    scene: MainScene,
});
