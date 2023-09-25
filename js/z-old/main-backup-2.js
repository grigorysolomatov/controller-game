// Config //////////////////////////////////////////////////////////////////////
function get_config() {
    let command_state_map = {
        "disabled": {
            scale: 1.0,
            tint: 0x202040,
        },
        "enabled": {
            scale: 1.0,
            tint: 0x204040,
        },
        "hover": {
            scale: 1.1,
            tint: 0x208080,
        },
    };
    let config = {
        window: {
            width: 1300,
            height: 800,
            color: 0x204020,
        },
        game_board: {
            nrows: 5,
            ncols: 5,
            step: 105,
            tile: {
                img: "tile",
                width: 100,
                state_map: {
                    "disabled": {
                    scale: 1.0,
                    tint: 0x202040,
                },
                "enabled": {
                    scale: 1.0,
                    tint: 0x204040,
                },
                "hover": {
                    scale: 1.1,
                    tint: 0x208080,
                },
                },
                init_state: "disabled",                
            },
        },
        joystick_board: {
            nrows: 5,
            ncols: 5,
            step:  105,
            tile: {
                img: "tile",
                width: 100,
                state_map: {
                    "disabled": {
                        scale: 1.0,
                        tint: 0x404020,
                    },
                    "enabled": {
                        scale: 1.0,
                        tint: 0x909020,
                    },
                    "hover": {
                        scale: 1.1,
                        tint: 0xFFFF20,
                    },
                },
                init_state: "disabled",
            },
        },
        time: {
            scale: 500,
            tint: 200,
        },
        joystick: {
            img: "joystick",
            width: 80,
            tint: 0xFF6000,
            time: {
                move: 500,
            },            
        },
        player: {
            img: "player",
            width: 80,
            tint: 0xFF6000,
            time: {
                move: 500,
            },
        },
        enemy: {
            img: "enemy",
            width: 80,
            tint: 0xFF0000,
            time: {
                move: 500,
            },
        },
        wall: {
            img: "wall",
            width: 80,
            tint: 0x202020,
        },
        commands: {
            "step_forward": {
                img: "step_forward",
                width: 60,
                state_map: command_state_map,
                init_state: "enabled",
            },
            "step_backward": {
                img: "step_backward",
                width: 60,
                state_map: command_state_map,
                init_state: "enabled",
            },
            "step_right": {
                img: "step_right",
                width: 60,
                state_map: command_state_map,
                init_state: "enabled",
            },
            "step_left": {
                img: "step_left",
                width: 60,
                state_map: command_state_map,
                init_state: "enabled",
            },
            "turn_left": {
                img: "turn_left",
                width: 60,
                state_map: command_state_map,
                init_state: "enabled",
            },
            "turn_right": {
                img: "turn_right",
                width: 60,
                state_map: command_state_map,
                init_state: "enabled",
            },
        },
    };
    return config
}
// Helper functions ////////////////////////////////////////////////////////////
function hexIntToRGB(hexInt) {
    const r = (hexInt >> 16) & 255;
    const g = (hexInt >> 8) & 255;
    const b = hexInt & 255;
    return {r:r, g:g, b:b};
}
function rgbToHexInt({r, g, b}) {
    return (r << 16) + (g << 8) + b;
}
// Main ////////////////////////////////////////////////////////////////////////
class MainScene extends Phaser.Scene {
    preload() {
        this.load.image("tile", "assets/tile.svg");
        this.load.image("joystick", "assets/joystick.svg");
        this.load.image("player", "assets/player.svg");
        this.load.image("enemy", "assets/enemy.svg");
        this.load.image("wall", "assets/wall.svg");
        this.load.image("step_forward", "assets/commands/step_forward.svg");
        this.load.image("step_backward", "assets/commands/step_backward.svg");
        this.load.image("step_left", "assets/commands/step_left.svg");
        this.load.image("step_right", "assets/commands/step_right.svg");
        this.load.image("turn_left", "assets/commands/turn_left.svg");
        this.load.image("turn_right", "assets/commands/turn_right.svg");
    }
    create() {
        let config = get_config()        
                
        let joystick_board = new JoystickBoard({
            board: new Board({
                scene: this,
                x: config.window.width/4*3,
                y: config.window.height/2,
                board_config: config.joystick_board,
            }),
            joystick: new Joystick({
                scene: this,
                x: null,
                y: null,
                joystick_config: config.joystick,            
            }),
        });

        let game_board = new GameBoard({
            board: new Board({
                scene: this,
                x: config.window.width/4,
                y: config.window.height/2,
                board_config: config.game_board,
            }),
            player: new Agent({
                scene: this,
                x: null,
                y: null,
                agent_config: config.player,
            }),
        });
        
        game_board.insert({
            scene: this,
            X: 1,
            Y: 1,
            entity: new Agent({
                scene: this,
                x: null,
                y: null,
                agent_config: config.wall,
            }),
        }); // Wall
        game_board.insert({
            scene: this,
            X: 3,
            Y: 3,
            entity: new Agent({
                scene: this,
                x: null,
                y: null,
                 agent_config: config.enemy,
            }),
        }); // Enemy
                
        joystick_board.place_command({
            X: 2,
            Y: 1,
            command: new Command({
                scene: this,
                game_board: game_board,
                command: "step_forward",
                command_config: config.commands["step_forward"],
            }),
        }); // step_forward
        joystick_board.place_command({
            X: 2,
            Y: 3,
            command: new Command({
                scene: this,
                game_board: game_board,
                command: "step_backward",
                command_config: config.commands["step_backward"],
            }),
        }); // step_backward
        joystick_board.place_command({
            X: 1,
            Y: 1,
            command: new Command({
                scene: this,
                game_board: game_board,
                command: "turn_left",
                command_config: config.commands["turn_left"],
            }),
        }); // turn_left
        joystick_board.place_command({
            X: 3,
            Y: 1,
            command: new Command({
                scene: this,
                game_board: game_board,
                command: "turn_right",
                command_config: config.commands["turn_right"],
            }),
        }); // turn_right
        joystick_board.place_command({
            X: 1,
            Y: 2,
            command: new Command({
                scene: this,
                game_board: game_board,
                command: "step_left",
                command_config: config.commands["step_left"],
            }),
        }); // step_left
        joystick_board.place_command({
            X: 3,
            Y: 2,
            command: new Command({
                scene: this,
                game_board: game_board,
                command: "step_right",
                command_config: config.commands["step_right"],
            }),
        }); // step_right
        joystick_board.place_command({
            X: 1,
            Y: 3,
            command: new Command({
                scene: this,
                game_board: game_board,
                command: "turn_right",
                command_config: config.commands["turn_right"],
            }),
        }); // turn_right
        joystick_board.place_command({
            X: 3,
            Y: 3,
            command: new Command({
                scene: this,
                game_board: game_board,
                command: "turn_left",
                command_config: config.commands["turn_left"],
            }),
        }); // turn_left
    }
}
// Basic board /////////////////////////////////////////////////////////////////
class Board {
    constructor({scene, x, y, board_config}) {
        this.scene = scene;
        this.x = x;
        this.y = y;
        this.config = board_config;
        this.tiles = Array(board_config.nrows).fill().map((_,i) => 
             Array(board_config.ncols).fill().map((_,j) => new Tile({
                 scene: scene,
                 x: board_config.step*j + x - (board_config.ncols - 1)*board_config.step/2,
                 y: board_config.step*i + y - (board_config.nrows - 1)*board_config.step/2,
                 tile_config: board_config.tile,
             }))
        );
    }
    foreach(func) {
        for(let X = 0; X < this.config.ncols; X++) {
            for(let Y = 0; Y < this.config.nrows; Y++) {
                func(X,Y);
            }
        }        
    }
}
class Tile extends Phaser.GameObjects.Sprite {
    constructor({scene, x, y, tile_config}) {
        super(scene, x, y, tile_config.img);
                
        let config = get_config();                
        this.displayWidth = tile_config.width;
        this.scaleY = this.scaleX;
        this.state = new VisState({
            sprite: this,
            state_map: tile_config.state_map,
            init_state: tile_config.init_state,
        });

        scene.add.existing(this);

        this.setInteractive();
        this.on("pointerover", () => {
            if (this.state.get() == "disabled") { return; }
            this.state.set("hover");
        });
        this.on("pointerout", () => {
            if (this.state.get() == "disabled") { return; }
            this.state.set("enabled");
        });
    }
}
class VisState {
    constructor({sprite, state_map, init_state}) {
        this.sprite = sprite;
        this.state = init_state;
        this.tint = state_map[this.state].tint;
        this.state_map = state_map;
        
        this.original_scale = this.sprite.scale;

        this.sprite.setTint(this.tint);
    }
    get() {
        return this.state;
    }
    set(state) {
        let config = get_config();
        
        // Scale ---------------------------------------------------------------
        this.sprite.scene.tweens.add({
            targets: this.sprite,
            scale: this.original_scale*this.state_map[state].scale,
            ease: "Quint.Out",
            duration: config.time.scale,
        });

        // Tint ----------------------------------------------------------------
        let current_tint = hexIntToRGB(this.state_map[this.state].tint);
        let target_tint = hexIntToRGB(this.state_map[state].tint);

        this.sprite.scene.tweens.add({
            targets: current_tint,
            r: target_tint.r,
            g: target_tint.g,
            b: target_tint.b,
            duration: config.time.tint,
            onUpdate: (tween) => {
                let combined_tint = (current_tint.r << 16) | (current_tint.g << 8) | current_tint.b;
                this.sprite.setTint(combined_tint);
            }
        });

        // Update --------------------------------------------------------------
        this.state = state;
        this.tint = this.state_map[state];
    }
}
// Special boards //////////////////////////////////////////////////////////////
class JoystickBoard {
    constructor({board, joystick}) {
        this.joystick = joystick;
        this.board = board;
        
        this.commands = Array(board.config.nrows).fill().map((_,i) => 
            Array(board.config.ncols).fill().map((_,j) => null));

        // Centralize joystick -------------------------------------------------
        let center = {
            X: Math.floor(0.5*this.board.config.nrows),
            Y: Math.floor(0.5*this.board.config.ncols),
        };
        this.joystick.X = center.X;
        this.joystick.Y = center.Y;        
        this.joystick.x = this.board.tiles[center.Y][center.X].x;
        this.joystick.y = this.board.tiles[center.Y][center.X].y;
        // ---------------------------------------------------------------------
        
        joystick.setDepth(10);

        this.setup_board();
    }
    setup_board() {
        this.board.foreach((X, Y) => {
            let tile = this.board.tiles[Y][X];
            let command = this.commands[Y][X];
            
            tile.on("pointerup", () => {
                this.on_click(X,Y);
            });
            tile.on("pointerover", () => {
                let command = this.commands[Y][X];
                if (command == null) { return; }
                command.state.set("hover");
            });
            tile.on("pointerout", () => {
                let command = this.commands[Y][X];
                if (command == null) { return; }
                command.state.set("enabled");
            });
        });
        this.reset_board();
    }
    reset_board() {
        this.board.foreach((X, Y) => {
            let tile = this.board.tiles[Y][X];
            if (this.close_to_joistick(X,Y)) {
                tile.state.set("enabled");                
            }
            else {
                tile.state.set("disabled");                    
            }
        });
    }
    close_to_joistick(X,Y) {
        let delta = {X: Math.abs(X - this.joystick.X), Y:Math.abs(Y - this.joystick.Y)}
        return delta.X <= 1 && delta.Y <= 1 && (delta.X + delta.Y) > 0;
    }        
    on_click(X,Y) {
        if (!this.close_to_joistick(X,Y)) {return}
        
        let tile = this.board.tiles[Y][X];
        
        this.joystick.X = X;
        this.joystick.Y = Y;        
        this.joystick.move_to({x:tile.x, y:tile.y});

        let command = this.commands[Y][X];
        if (command != null) { command.execute(); }

        this.reset_board();        
    }
    place_command({X,Y, command}) {
        let tile = this.board.tiles[Y][X];
        command.x = tile.x;
        command.y = tile.y;
        this.commands[Y][X] = command;
    }
}
class GameBoard {
    constructor({board, player}) {
        //this.player = player;
        this.player_pos = {X: 2, Y: 2};
        this.board = board;

        this.entities = Array(board.config.nrows).fill().map((_,i) => 
            Array(board.config.ncols).fill().map((_,j) => null));

        // Centralize player ---------------------------------------------------
        let center = {
            X: Math.floor(0.5*this.board.config.nrows),
            Y: Math.floor(0.5*this.board.config.ncols),
        };
        this.player_pos.X = center.X;
        this.player_pos.Y = center.Y;
        player.x = this.board.tiles[center.Y][center.X].x;
        player.y = this.board.tiles[center.Y][center.X].y;
        this.entities[center.Y][center.X] = player;
        // ---------------------------------------------------------------------
        
        player.setDepth(10);
        
        this.setup_board();
    }
    setup_board() {
        this.board.foreach((X, Y) => {
            let tile = this.board.tiles[Y][X];
            tile.state.set("disabled");
        });
    }
    get_player() {
        let {X, Y} = this.player_pos;
        return this.entities[Y][X];
    }
    insert({X, Y, entity}) {
        this.entities[Y][X] = entity;
        
        let tile = this.board.tiles[Y][X];
        entity.x = tile.x;
        entity.y = tile.y;
    }
}
// Entities ////////////////////////////////////////////////////////////////////
const EntityMethods = {
    move_to({x,y}) {
        this.scene.tweens.add({
            targets: this,
            x: x,
            y: y,
            ease: "Quint.Out",
            duration: this.config.time.move,
        });
    },
};
class Joystick extends Phaser.GameObjects.Sprite {
    constructor({scene, x, y, joystick_config}) {
        super(scene, x, y, joystick_config.img);
        this.scene = scene;
                
        this.config = joystick_config;
        
        this.displayWidth = this.config.width;
        this.scaleY = this.scaleX;

        this.setTint(this.config.tint);
        this.X = null;
        this.Y = null;

        scene.add.existing(this);        
    }
}
class Agent extends Phaser.GameObjects.Sprite {
    constructor({scene, x, y, agent_config}) {
        super(scene, x, y, agent_config.img);
        this.scene = scene;

        this.config = agent_config;
        
        this.displayWidth = this.config.width;
        this.scaleY = this.scaleX;

        this.setTint(this.config.tint);

        this.dir = 1.0; // *Math.PI/2

        scene.add.existing(this);        
    }
    get_angle(rel_dir) {
        return (this.dir + rel_dir)*Math.PI/2
    }    
    turn_to(dir) {
        // https://newdocs.phaser.io/docs/3.60.0/focus/Phaser.GameObjects.Sprite-angle
        this.dir = dir;        
        let angle = Phaser.Math.RadToDeg(this.get_angle(0)) - 90;
        this.scene.tweens.add({
            targets: this,
            angle: -angle,
            ease: "Quint.Out",
            duration: this.config.time.move,
        });
        this.dir = (this.dir + 4) % 4;
    }
}
Object.assign(Joystick.prototype, EntityMethods);
Object.assign(Agent.prototype, EntityMethods);
// Commands ////////////////////////////////////////////////////////////////////
class Command extends Phaser.GameObjects.Sprite {
    constructor({scene, x, y, game_board, command, command_config}) {
        super(scene, x, y, command_config.img);
        this.scene = scene;
                
        this.config = command_config;
        
        this.displayWidth = this.config.width;
        this.scaleY = this.scaleX;
        this.state = new VisState({
            sprite: this,
            state_map: command_config.state_map,
            init_state: command_config.init_state,
        });

        this.game_board = game_board;
        this.command = command;

        switch (this.command) {
        case "step_forward":
            this.execute = this.step(0);
            break;
        case "step_backward":
            this.execute = this.step(2);
            break;
        case "step_right":
            this.execute = this.step(-1);
            break;
        case "step_left":
            this.execute = this.step(1);
            break;            
        case "turn_left":
            this.execute = this.turn(1);
            break;
        case "turn_right":
            this.execute = this.turn(-1);
            break;        
        default:
            break
        }

        scene.add.existing(this);        
    }
    execute() {}
    step(rel_dir) {
        return () => {
            let player = this.game_board.get_player();
            let player_pos = this.game_board.player_pos;
            
            let angle = player.get_angle(rel_dir);
            let new_pos = {
                X: player_pos.X + Math.round(Math.cos(angle)),
                Y: player_pos.Y - Math.round(Math.sin(angle)),
                // minus because Y points down
            };

            if (new_pos.X < 0 || new_pos.Y < 0
                || new_pos.X >= this.game_board.board.config.ncols
                || new_pos.Y >= this.game_board.board.config.nrows
                || this.game_board.entities[new_pos.Y][new_pos.X] != null // Order matters
               ) { return; }
            
            let tile = this.game_board.board.tiles[new_pos.Y][new_pos.X];
            
            this.game_board.entities[player_pos.Y][player_pos.X] = null;
            this.game_board.entities[new_pos.Y][new_pos.X] = player;
            
            this.game_board.player_pos = new_pos;        
            player.move_to({x: tile.x, y: tile.y});
        };
    }
    turn(rel_dir) {
        return () => {
            let player = this.game_board.get_player();
            player.turn_to(player.dir + rel_dir);
        };
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
// /////////////////////////////////////////////////////////////////////////////
