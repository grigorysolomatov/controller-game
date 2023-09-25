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
                time: {
                    scale: 500,
                    tint: 200,
                },
            },
        },
        controller_board: {
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
                time: {
                    scale: 500,
                    tint: 200,
                },
            },
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
                fade: 1000,
                wobble: 50,
            },
        },
        enemy: {
            img: "enemy",
            width: 80,
            tint: 0xFF0000,
            time: {
                move: 500,
                fade: 1000,
                wobble: 50,
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
                time: {
                    scale: 500,
                    tint: 200,
                },
            },
            "step_backward": {
                img: "step_backward",
                width: 60,
                state_map: command_state_map,
                init_state: "enabled",
                time: {
                    scale: 500,
                    tint: 200,
                },
            },
            "step_right": {
                img: "step_right",
                width: 60,
                state_map: command_state_map,
                init_state: "enabled",
                time: {
                    scale: 500,
                    tint: 200,
                },
            },
            "step_left": {
                img: "step_left",
                width: 60,
                state_map: command_state_map,
                init_state: "enabled",
                time: {
                    scale: 500,
                    tint: 200,
                },
            },
            "turn_left": {
                img: "turn_left",
                width: 60,
                state_map: command_state_map,
                init_state: "enabled",
                time: {
                    scale: 500,
                    tint: 200,
                },
            },
            "turn_right": {
                img: "turn_right",
                width: 60,
                state_map: command_state_map,
                init_state: "enabled",
                time: {
                    scale: 500,
                    tint: 200,
                },
            },
            "hit_forward": {
                img: "hit_forward",
                width: 60,
                state_map: command_state_map,
                init_state: "enabled",
                time: {
                    scale: 500,
                    tint: 200,
                },
            },
        },
        turn_btn: {
            img: "turn_btn",
            width: 161,
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
            init_state: "enabled",
            time: {
                scale: 500,
                tint: 200,
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
        this.load.image("hit_forward", "assets/commands/hit_forward.svg");

        this.load.image("turn_btn", "assets/turn_btn.svg");
    }
    create() {
        let config = get_config()        
                
        let controller_board = new ControllerBoard({
            board: new Board({
                scene: this,
                x: config.window.width/4*3,
                y: config.window.height/2,
                board_config: config.controller_board,
            }),
            joystick: new Controller({
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
                dir: 1,
                agent_config: config.player,
            }),
            turn_btn: new Button({
                scene: this,
                x: config.window.width/2,
                y: config.window.height*9/10,
                btn_config: config.turn_btn,
            }),
        });

        // Testing -------------------------------------------------------------
        let player = game_board.get_player();
        player.new_resource(Resources.health({value: 10, max_value: 10}));
        // ---------------------------------------------------------------------

        let enemy = new Enemy({
            scene: this,
            x: null,
            y: null,
            dir: -1.0,
            agent_config: config.enemy,
        });
        enemy.new_resource(Resources.health({value: 10, max_value: 10}));
        game_board.insert({
            scene: this,
            X: 3,
            Y: 0,
            entity: enemy,
        }); // Enemy
                
        controller_board.place_command({
            X: 2,
            Y: 1,
            command: new Command({
                scene: this,
                game_board: game_board,
                command_id: "step_forward",
                command_config: config.commands["step_forward"],
            }),
        }); // step_forward
        controller_board.place_command({
            X: 2,
            Y: 3,
            command: new Command({
                scene: this,
                game_board: game_board,
                command_id: "step_backward",
                command_config: config.commands["step_backward"],
            }),
        }); // step_backward
        controller_board.place_command({
            X: 1,
            Y: 2,
            command: new Command({
                scene: this,
                game_board: game_board,
                command_id: "turn_left",
                command_config: config.commands["turn_left"],
            }),
        }); // turn_left
        controller_board.place_command({
            X: 3,
            Y: 2,
            command: new Command({
                scene: this,
                game_board: game_board,
                command_id: "turn_right",
                command_config: config.commands["turn_right"],
            }),
        }); // turn_right
        controller_board.place_command({
            X: 2,
            Y: 2,
            command: new Command({
                scene: this,
                game_board: game_board,
                command_id: "hit_forward",
                command_config: config.commands["hit_forward"],
            }),
        }); // hit_forward
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
    foreach_rev(func) {
        for(let X = this.config.ncols-1; X >= 0; X--) {
            for(let Y = this.config.nrows-1; Y >= 0; Y--) {
                func(X,Y);
            }
        }
    }
}
class Tile extends Phaser.GameObjects.Sprite {
    constructor({scene, x, y, tile_config}) {
        super(scene, x, y, tile_config.img);
                
        //let config = get_config();                
        this.displayWidth = tile_config.width;
        this.scaleY = this.scaleX;
        this.state = new VisState({
            sprite: this,
            state_map: tile_config.state_map,
            init_state: tile_config.init_state,
            tint_time: tile_config.time.tint,
            scale_time: tile_config.time.scale,
        });

        scene.add.existing(this);

        this.setInteractive();
        this.on("pointerover", () => {
            if (this.state.get() == "disabled") {return;}
            this.state.set("hover");
        });
        this.on("pointerout", () => {
            if (this.state.get() == "disabled") {return;}
            this.state.set("enabled");
        });
    }
}
class VisState {
    constructor({sprite, state_map, init_state, scale_time, tint_time}) {
        this.sprite = sprite;
        this.state = init_state;
        this.tint = state_map[this.state].tint;
        this.state_map = state_map;
        this.scale_time = scale_time;
        this.tint_time = tint_time;
        
        this.original_scale = this.sprite.scale;

        this.sprite.setTint(this.tint);
    }
    get() {
        return this.state;
    }
    set(state) {        
        // Scale ---------------------------------------------------------------
        this.sprite.scene.tweens.add({
            targets: this.sprite,
            scale: this.original_scale*this.state_map[state].scale,
            ease: "Quint.Out",
            duration: this.scale_time,
        });

        // Tint ----------------------------------------------------------------
        let current_tint = hexIntToRGB(this.state_map[this.state].tint);
        let target_tint = hexIntToRGB(this.state_map[state].tint);

        this.sprite.scene.tweens.add({
            targets: current_tint,
            r: target_tint.r,
            g: target_tint.g,
            b: target_tint.b,
            duration: this.tint_time,
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
class ControllerBoard {
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
                if (command == null) {return;}
                command.state.set("hover");
            });
            tile.on("pointerout", () => {
                let command = this.commands[Y][X];
                if (command == null) {return;}
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
        this.joystick.tween_pos({x:tile.x, y:tile.y});

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
    constructor({board, player, turn_btn}) {
        this.board = board;
        this.turn_btn = turn_btn;        

        this.entities = Array(board.config.nrows).fill().map((_,i) => 
            Array(board.config.ncols).fill().map((_,j) => null));

        // Centralize player ---------------------------------------------------
        let center = {
            X: Math.ceil(0.5*this.board.config.ncols - 1),
            Y: Math.ceil(0.5*this.board.config.nrows - 1),
        };
        this.player_pos = {X: center.X, Y: center.Y};
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
        this.turn_btn.on("pointerup", () => {
            this.board.foreach_rev((X,Y) => {
                let agent = this.entities[Y][X];
                if (agent == null || agent == this.get_player()) {return;}
                Actions.step({
                    X: X,
                    Y: Y,
                    dir: 0,
                    game_board: this,
                });
            });
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
const TweenMethods = {
    tween_pos({x,y}) {
        this.scene.tweens.add({
            targets: this,
            x: x,
            y: y,
            ease: "Quint.Out",
            duration: this.config.time.move,
        });
    },
    tween_alpha({from, to}) {
        this.alpha = from;        
        this.scene.tweens.add({
            targets: this,
            alpha: {from: from, to: to},
            ease: "Quint.Out",
            duration: this.config.time.fade,
        });
    },
    tween_angle(angle) {
        this.scene.tweens.add({
            targets: this,
            angle: angle,
            ease: "Quint.Out",
            duration: this.config.time.move,
        });
    },
    wobble() {
        this.scene.tweens.add({
            targets: this,
            x: this.x + 10,
            ease: "Sin",
            duration: this.config.time.wobble,
            repeat: 0,
            yoyo: true,
            onComplete: () => {
                this.scene.tweens.add({
                    targets: this,
                    x: this.x - 10,
                    ease: "Sin",
                    duration: this.config.time.wobble,
                    repeat: 0,
                    yoyo: true,
                });
            },
        });
    },
};
const ResourceMethods = {
    ensure_resources() {
        if (this._resources === undefined) {
            this._resources = {};
        }        
    },
    new_resource({name, value, max_value, on_modified}) {
        this.ensure_resources();
        this._resources[name] = {
            value: value,
            max_value: max_value,
            on_modified: on_modified,
        };
    },
    get_resource(name) {
        return this._resources[name].value;
    },
    with_resources(resources) {
        for (const resource of resources) {this.new_resource(resource);}
        return this;
    },
    modify_resource(name, delta) {
        let old_val = this._resources[name].value;
        let new_val = Math.min(Math.max(old_val + delta, 0), this._resources[name].max_value);
        this._resources[name].value = new_val;
        this._resources[name].on_modified({
            target: this,
            old_val: old_val,
            delta: delta,
            new_val: new_val,
        });
    },
};
class Resources {
    static health({value, max_value}) {
        return {
            name: "health",
            value: value,
            max_value: max_value,
            on_modified: ({target, old_val, delta, new_val}) => {
                target.wobble();
                if (new_val > 0) {return;}
                target.tween_alpha({
                    from: 1.0,
                    to: 0.0,
                    on_complete: () => {target.destroy();},
                });
            },
        };
    }
}
class Controller extends Phaser.GameObjects.Sprite {
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
    constructor({scene, x, y, agent_config, dir}) {
        super(scene, x, y, agent_config.img);
        this.scene = scene;

        this.config = agent_config;
        
        this.displayWidth = this.config.width;
        this.scaleY = this.scaleX;

        this.setTint(this.config.tint);

        this.dir = dir; // *Math.PI/2
        this.angle = this.get_phaser_angle_deg(0);

        scene.add.existing(this);
    }
    get_angle(rel_dir) {
        return (this.dir + rel_dir)*Math.PI/2
    }
    get_angle_deg(rel_dir) {
        return (this.dir + rel_dir)*90
    }
    get_phaser_angle_deg(rel_dir) {
        return -this.get_angle_deg(rel_dir) + 90;
    }
    turn_to(dir) {
        // https://newdocs.phaser.io/docs/3.60.0/focus/Phaser.GameObjects.Sprite-angle
        this.dir = dir;        
        let angle = this.get_phaser_angle_deg(0);
        this.tween_angle(angle);
        this.dir = (this.dir + 4) % 4;
    }
}
Object.assign(Controller.prototype, TweenMethods);
Object.assign(Agent.prototype, TweenMethods, ResourceMethods);
//Object.assign(Agent.prototype, ResourceMethods);
class Enemy extends Agent {
    act({self_pos, board}) {
        console.log(self.pos);
    }
}
// UI //////////////////////////////////////////////////////////////////////////
class Button extends Phaser.GameObjects.Sprite {
    constructor({scene, x, y, btn_config}) {
        super(scene, x, y, btn_config.img);

        this.scene = scene;

        this.config = btn_config;
        
        this.displayWidth = this.config.width;
        this.scaleY = this.scaleX;
        
        this.state = new VisState({
            sprite: this,
            state_map: this.config.state_map,
            init_state: this.config.init_state,
            tint_time: btn_config.time.tint,
            scale_time: btn_config.time.scale,
        });

        scene.add.existing(this);

        this.setInteractive();
        this.on("pointerover", () => {
            if (this.state.get() == "disabled") {return;}
            this.state.set("hover");
        });
        this.on("pointerout", () => {
            if (this.state.get() == "disabled") {return;}
            this.state.set("enabled");
        });
    }
}
// Commands ////////////////////////////////////////////////////////////////////
class Actions {
    static step({X, Y, dir, game_board}) {
        let agent_pos = {X: X, Y: Y};
        let agent = game_board.entities[Y][X];

        let angle = agent.get_angle(dir);
        let new_pos = {
            X: agent_pos.X + Math.round(Math.cos(angle)),
            Y: agent_pos.Y - Math.round(Math.sin(angle)),
            // minus because Y points down
        };
        
        if (new_pos.X < 0 || new_pos.Y < 0
            || new_pos.X >= game_board.board.config.ncols
            || new_pos.Y >= game_board.board.config.nrows
            || game_board.entities[new_pos.Y][new_pos.X] != null // Order matters
           ) {return agent_pos;}
        
        let tile = game_board.board.tiles[new_pos.Y][new_pos.X];
        
        game_board.entities[agent_pos.Y][agent_pos.X] = null;
        game_board.entities[new_pos.Y][new_pos.X] = agent;
        
        game_board.agent_pos = new_pos;        
        agent.tween_pos({x: tile.x, y: tile.y});

        return new_pos;
    }
    static turn({X, Y, dir, game_board}) {
        let agent_pos = {X: X, Y: Y};
        let agent = game_board.entities[Y][X];
        agent.turn_to(agent.dir + dir);

        return agent_pos;
    }
    static hit({X, Y, dir, game_board}) {
        let agent_pos = {X: X, Y: Y};
        let agent = game_board.entities[Y][X];

        let angle = agent.get_angle(dir);
        let new_pos = {
            X: agent_pos.X + Math.round(Math.cos(angle)),
            Y: agent_pos.Y - Math.round(Math.sin(angle)),
            // minus because Y points down
        };

        if (new_pos.X < 0 || new_pos.Y < 0
            || new_pos.X >= game_board.board.config.ncols
            || new_pos.Y >= game_board.board.config.nrows
           ) {return agent_pos;}

        let target = game_board.entities[new_pos.Y][new_pos.X];

        if (target != null) {
            target.modify_resource("health", -5);
        }

        return agent_pos;
    }
}
class Command extends Phaser.GameObjects.Sprite {
    constructor({scene, x, y, game_board, command_id, command_config}) {
        super(scene, x, y, command_config.img);
        this.scene = scene;
                
        this.config = command_config;
        
        this.displayWidth = this.config.width;
        this.scaleY = this.scaleX;
        this.state = new VisState({
            sprite: this,
            state_map: command_config.state_map,
            init_state: command_config.init_state,
            tint_time: command_config.time.tint,
            scale_time: command_config.time.scale,
        });

        this.game_board = game_board;
        this.command_id = command_id;

        switch (command_id) {
        case "step_forward":
            this.execute = () => {
                game_board.player_pos = Actions.step({
                    X: game_board.player_pos.X,
                    Y: game_board.player_pos.Y,
                    dir: 0,
                    game_board: game_board,
                });
            };
            break;
        case "step_backward":
            this.execute = () => {
                game_board.player_pos = Actions.step({
                    X: game_board.player_pos.X,
                    Y: game_board.player_pos.Y,
                    dir: 2,
                    game_board: game_board,
                });
            };
            break;
        case "hit_forward":
            this.execute = () => {
                game_board.player_pos = Actions.hit({
                    X: game_board.player_pos.X,
                    Y: game_board.player_pos.Y,
                    dir: 0,
                    game_board: game_board,
                });
            };
            break;
        case "step_right":
            this.execute = () => {
                game_board.player_pos = Actions.step({
                    X: game_board.player_pos.X,
                    Y: game_board.player_pos.Y,
                    dir: -1,
                    game_board: game_board,
                });
            };
            break;
        case "step_left":
            this.execute = () => {
                game_board.player_pos = Actions.step({
                    X: game_board.player_pos.X,
                    Y: game_board.player_pos.Y,
                    dir: 1,
                    game_board: game_board,
                });
            };;
            break;            
        case "turn_left":
            this.execute = () => {
                game_board.player_pos = Actions.turn({
                    X: game_board.player_pos.X,
                    Y: game_board.player_pos.Y,
                    dir: 1,
                    game_board: game_board,
                });
            };
            break;
        case "turn_right":
            this.execute = () => {
                game_board.player_pos = Actions.turn({
                    X: game_board.player_pos.X,
                    Y: game_board.player_pos.Y,
                    dir: -1,
                    game_board: game_board,
                });
            };
            break;        
        default:
            break
        }

        scene.add.existing(this);        
    }
    execute() {}
}
// Run /////////////////////////////////////////////////////////////////////////
let config = get_config();
var game = new Phaser.Game({
    type: Phaser.AUTO,
    width: config.window.width,
    height: config.window.height,
    backgroundColor: config.window.color,
    scene: MainScene,
});
// /////////////////////////////////////////////////////////////////////////////
